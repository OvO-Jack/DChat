<template>
    <div class="peerMessageWrapper">
        <div class="imgBox">
            <el-avatar :size="35" src="../../../../../public/9.jpg"></el-avatar>
        </div>
        <div class="textBox">
            琴崽崽琴崽崽琴崽崽琴崽崽琴崽崽琴崽崽琴崽崽琴崽崽琴崽崽琴崽崽琴崽崽琴崽崽琴崽崽琴崽崽琴崽崽琴崽崽琴崽崽琴崽崽琴崽崽琴崽崽琴崽崽琴崽崽琴崽崽琴崽崽琴崽崽琴崽崽琴崽崽琴崽崽琴崽崽琴崽崽琴崽崽琴崽崽琴崽崽琴崽崽琴崽崽琴崽崽琴崽崽
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref, reactive } from "vue"




</script>
<style lang="scss" scoped>
.peerMessageWrapper {
    display: flex;
    font-size: $base-font-size;
    margin-bottom: 20px;


    .imgBox {
        margin-right: 10px;
    }

    .textBox {
        width: 100%;
        height: 100%;
        background: rgb(246, 246, 246); // 设置左边接收对方消息气泡颜色
        border-radius: 5px;
        display: flex;
        padding: 5px;
    }
}
</style>