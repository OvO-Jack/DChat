<template>
    <div class="peerMessageWrapper">
        <div class="imgBox" v-if="showAvatar">
            <el-avatar :size="35" src="../../../../../public/9.jpg"></el-avatar>
        </div>
        <div class="textBox" :class="{ groupBox: !showAvatar }">
            {{ messages.message }}
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref, reactive, onMounted } from "vue"
import { Message } from "../chat";
defineProps<{ messages: Message, showAvatar: boolean }>();
</script>
<style lang="scss" scoped>
.peerMessageWrapper {
    display: flex;
    font-size: $base-font-size;
    margin-bottom: 20px;


    .imgBox {
        margin-right: 10px;
        width: 35px;
    }

    .textBox {
        background: rgb(246, 246, 246); // 设置左边接收对方消息气泡颜色
        border-radius: 5px;
        display: flex;
        padding: 8px;
    }

    // 如果是分组的话，设置左间距
    .groupBox {
        margin-left: 45px;
    }
}
</style>