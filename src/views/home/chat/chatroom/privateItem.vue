<template>
    <el-scrollbar ref="scrollbarRef">
        <div class="privateItemWrapper" ref="messageContainer">
            <div class="mainBox">
                <div class="contentBox">
                    <div v-for="(group, groupIndex) in groupedMessages" :key="groupIndex">
                        <div v-for="(item, index) in group.messages" :key="item.timestamp">
                            <ownMessage v-if="userStore.$state.userinfo._id === item.senderId" :messages="item"
                                :showAvatar="index === 0" />
                            <peerMessage v-else :messages="item" :showAvatar="index === 0" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </el-scrollbar>
</template>

<script setup lang="ts">
import ownMessage from "./components/ownMessage.vue";
import peerMessage from "./components/peerMessage.vue";
import { Message } from './chat';
import { getMessage } from '@/api/chat/index'
import { getMessageData, tableData } from '@/api/chat/type'
import { ref, reactive, onMounted, watch, computed, nextTick } from 'vue'
import { ElScrollbar } from 'element-plus'
import useUserStore from '@/store/modules/user';
const userStore = useUserStore();
import useWebSocketStore from '@/store/modules/socket'
const webSocketStore = useWebSocketStore()

import { useRoute } from 'vue-router'
const $route = useRoute();
const messageContainer = ref<HTMLElement | null>(null);


const showMessage = ref([]);

const getMessageData = async () => {
    webSocketStore.activeConnectId = $route.params.userId as string;
    try {
        const res: getMessageData = await getMessage($route.params.userId as string, '1', '50');
        if (res.code === 200) {
            showMessage.value = res.data;
        }

        //获取完消息后 通知对方你的消息我已经读了 最好是做判断 最新的一条消息是否已读 如果已读就没必要发请求了

        if (showMessage.value) {
            let first = true;
            for (let i = showMessage.value.length - 1; i >= 0; i--) {
                //必须要对方消息的第一条
                if (showMessage.value[i].senderId === $route.params.userId as string && first) {
                    first = false;
                    //先判断是不是对方消息 如果是判断读的状态 以及确保是第一条消息
                    if (showMessage.value[i].status !== "READ") {
                        //如果第一条未读 发送已读的websocket
                        webSocketStore.markRead({
                            senderId: $route.params.userId as string,
                            receiverId: userStore.userinfo._id
                        })
                        break;
                    }
                }
            }
        }
    } catch (error) {
        console.error('Error fetching messages:', error);
    } finally {
        scrollToBottom()
    }
}
//消息分组
const groupedMessages = computed(() => {
    const groups: { senderId: string; messages: Message[] }[] = [];
    let currentGroup: Message[] = [];
    let currentSenderId = '';

    showMessage.value.forEach((message, index) => {
        if (index === 0 || message.senderId !== showMessage.value[index - 1].senderId) {
            //如果是第一条信息或者当前发送者不等于上一条发送者
            if (currentGroup.length > 0) {
                //如果当前分组有值 push进去
                groups.push({
                    senderId: currentSenderId,
                    messages: currentGroup,
                });
            }
            currentGroup = [message];
            currentSenderId = message.senderId;
        } else {
            currentGroup.push(message);
        }
    });

    if (currentGroup.length > 0) {
        groups.push({
            senderId: currentSenderId,
            messages: currentGroup,
        });
    }

    return groups;
});


// 监听特定用户的 WebSocket 消息变化
watch(
    () => webSocketStore.messages[$route.params.userId as string],
    (newMessages) => {
        if (newMessages && newMessages.length > 0) {
            showMessage.value.push(...newMessages); // 将新的消息添加到 showMessage 列表
            webSocketStore.clearMessages($route.params.userId as string);
            scrollToBottom();
            console.log(newMessages);

            if (newMessages[0].receiverId === userStore.userinfo._id) {
                //重点：当前这条消息 我是接受者receiverId等于当前登录用户 通知对方消息已读

                console.log('接受者发送', userStore.userinfo._id, '发送者接受：', $route.params.userId as string);

                webSocketStore.markRead({
                    //这里告诉服务器 那么接受者应该是我 也就是当前用户 发送者是对面 此时站在接受者的视角
                    senderId: $route.params.userId as string,
                    receiverId: userStore.userinfo._id
                })
            }
        }
    },
    { deep: true }
);

//监听消息已读未读
watch(
    () => webSocketStore.readStatus[$route.params.userId as string],
    (newStatus) => {
        if (newStatus) {
            console.log(newStatus, '变成已读');

            groupedMessages.value.forEach(group => {
                // 检查是否是当前用户发送的消息组
                if (group.senderId === userStore.userinfo._id) {
                    group.messages.forEach(message => {
                        message.status = 'READ'; // 更新为已读状态
                    });
                }
            });
            //修改完回复原样
            webSocketStore.readStatus[$route.params.userId as string] = !newStatus;
        }
    }
);


//滚动条
const scrollbarRef = ref<InstanceType<typeof ElScrollbar>>()
const scrollToBottom = async () => {
    await nextTick()
    scrollbarRef.value!.setScrollTop(messageContainer.value.scrollHeight)
}

onMounted(async () => {
    getMessageData();
    await nextTick();
})
</script>
<style lang="scss" scoped>
.privateItemWrapper {
    min-height: 200px;
    flex: 1;

    .mainBox {
        width: 100%;
        height: 100%;

        .contentBox {
            margin: 10px 10px;
            height: 100%;
        }
    }
}
</style>