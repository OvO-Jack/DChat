<template>
    <div class="ownMessageWrapper">
        <div class="imgBox">
            <img src="../../../../../../public/9.jpg" alt="">
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
.ownMessageWrapper {
    display: flex;
    font-size: $base-font-size;
    margin-bottom: 20px;
    flex-direction: row-reverse;

    .imgBox {
        margin-left: 10px;

        img {
            width: 35px !important;
            height: 35px !important;
            border-radius: 50%;
        }
    }

    .textBox {
        width: 100%;
        height: 100%;
        background: rgb(235, 241, 253); // 设置左边接收对方消息气泡颜色
        border-radius: 5px;
        display: flex;
        padding: 5px;
    }
}
</style>