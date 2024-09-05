<template>
    <div class="listWrapper">
        <div class="btnWrapper">
            <div class="leftBox">
                <div v-show="!category.status" class="svgBox" @click="emit('categoryAction')">
                    <SvgIcon name="rightSpread"></SvgIcon>
                </div>
                <div>{{ category.title }}</div>
            </div>
            <div>闪电</div>
        </div>
        <div class="mainBox">
            <div v-for="(item, index) in list" :key="index" @click="clickItem(item, index)">
                <div v-if="item.type === 'private'">
                    <PrivateItem :active="isActive(index)" :userinfo="item.userinfo" :unreadCount="item.unreadCount">
                    </PrivateItem>
                </div>
                <div v-if="item.type === 'group'"></div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed, nextTick } from 'vue';
import PrivateItem from './privateItem.vue';
import { getUserList } from '@/api/user';
import { UserWithUnreadCount, UserListResponse } from '@/api/user/type';
import { ElMessage } from 'element-plus'
import { useRouter, useRoute } from 'vue-router';
const router = useRouter();
const $route = useRoute();

const props = defineProps(['category']);
const emit = defineEmits(['categoryAction']);


const list = ref<UserWithUnreadCount[]>([]);
const activeIndex = ref<number>(-1);

const clickItem = (item: UserWithUnreadCount, index: number) => {
    activeIndex.value = index;
    router.push({
        name: 'chatroom',
        params: { userId: item.userinfo.id },
        query: { username: item.userinfo.username, deviceid: item.userinfo.deviceId },
    });
};

const isActive = (index: number) => index === activeIndex.value;


onMounted(() => {
    getUserListMethod();
})

//获取用户信息列表
const getUserListMethod = async () => {
    try {
        const res: UserListResponse = await getUserList();
        if (res.code === 200) {
            list.value = res.data;
        }
        if ($route.params.userId && list.value) {
            list.value.forEach((item, index) => {
                if (item.userinfo.id === $route.params.userId as string) {
                    activeIndex.value = index;
                }
            })
        }
        if (activeIndex.value === -1) {
            activeIndex.value = 0;
        }
    } catch (error) {
        ElMessage.error('网络不佳，请刷新重试')
    }
}
</script>

<style lang="scss" scoped>
.listWrapper {
    height: 100%;
    border-right: 1px solid $base-background-color;
    border-bottom: 1px solid $base-background-color;
    width: 250px;

    .btnWrapper {
        width: 100%;
        display: flex;
        justify-content: space-between;
        padding: 10px 10px;
        font-size: $base-font-size;

        .leftBox {
            margin: 0;

            .svgBox {
                margin-right: 5px;
                width: 25px;
                height: 25px;
                display: flex;
                justify-content: center;
                align-items: center;
                cursor: pointer;
            }

            .svgBox:hover {
                background-color: rgba(200, 203, 206, 0.395);
                border-radius: 5px;
            }
        }
    }

    .btnWrapper>div {
        margin: 0px 5px;
        display: flex;
        align-items: center;
    }

    .mainBox {
        width: 100%;
    }
}
</style>
