<template>
    <div class="ownMessageWrapper">
        <div class="imgBox" v-if="showAvatar">
            <el-avatar :size="35" src="../../../../../public/9.jpg"></el-avatar>
        </div>
        <div class="textBox" :class="{ groupBox: !showAvatar }">
            {{ messages.message }}
        </div>
    </div>
    <div class="statusBox">
        <span v-if="messages.status === 'READ'">已读</span>
        <span v-else-if="messages.status === 'SENT'">未读</span>
    </div>
</template>
<script setup lang="ts">
import { ref, reactive } from "vue"
import { Message } from "../chat";
defineProps<{ messages: Message, showAvatar: boolean }>();



</script>
<style lang="scss" scoped>
.ownMessageWrapper {
    display: flex;
    font-size: $base-font-size;
    flex-direction: row-reverse;

    .imgBox {
        margin-left: 10px;
        width: 35px;
    }

    .textBox {
        background: rgb(235, 241, 253); // 设置左边接收对方消息气泡颜色
        border-radius: 5px;
        display: flex;
        padding: 8px;
        justify-content: flex-end;
    }

    // 如果是分组的话，设置右间距
    .groupBox {
        margin-right: 45px;
    }
}

.statusBox {
    display: flex;
    font-size: $base-font-size;
    flex-direction: row-reverse;
    margin-bottom: 10px;
    margin-right: 45px;
    margin-top: 2px;
    font-size: 10px;
    color: #aaa
}
</style>