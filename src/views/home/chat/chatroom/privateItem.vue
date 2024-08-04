<template>
    <div class="privateItemWrapper">
        <div class="mainBox">
            <div class="contentBox">
                <div style="height: 1000px;">
                    <peerMessage />
                    <ownMessage />
                </div>
            </div>
        </div>

        <div class="chat-item" v-for="message in messages" :key="message.createTime">
            <div class="message" :class="{ 'self': message.sender === username }">
                <img :src="message.senderPhoto" v-if="message.senderPhoto" />
                <div v-else class="nickname">{{ message.senderPhotoNickname }}</div>
                <div class="text">{{ message.text }}</div>
                <div class="time">{{ message.createTime }}</div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref, reactive } from 'vue';
import ownMessage from "./components/ownMessage.vue";
import peerMessage from "./components/peerMessage.vue";
import { Message } from './chat';
const props = defineProps<{ messages: Message[], username: string }>();



</script>
<style lang="scss" scoped>
.privateItemWrapper {
    min-height: 200px;

    .mainBox {
        width: 100%;
        height: 100%;
        overflow: auto;

        .contentBox {
            margin: 10px 10px;
        }
    }
}

/* 定义滚动条的宽度、高度和背景色 */
::-webkit-scrollbar {
    width: 4px;
    height: 4px;
}

/* 定义滚动条滑块的样式 */
::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background-color: #c5c5c5;
}

/* 定义滚动条的边框和圆角 */
::-webkit-scrollbar-track {
    color: #fff;
}

/* 定义滚动条滑块在 hover 状态下的样式 */
::-webkit-scrollbar-thumb:hover {
    background-color: #999;
}


.chat-item {
    display: flex;
    flex-direction: column;
}

.message {
    display: flex;
    align-items: center;
}

.self {
    justify-content: flex-end;
}

.nickname {
    background-color: #f0f0f0;
    border-radius: 50%;
    padding: 10px;
    margin-right: 10px;
}

.text {
    background-color: #e0e0e0;
    border-radius: 10px;
    padding: 10px;
    max-width: 60%;
}

.time {
    font-size: 0.8em;
    color: #999;
}
</style>