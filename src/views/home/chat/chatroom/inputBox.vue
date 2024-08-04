<template>
    <div class="inputBox">
        <div class="mainBox">
            <div class="textareaBox">
                <div class="moreBox">
                    <div>表情</div>
                    <div>文件</div>
                </div>
                <textarea type="text" class="custom-scrollbar" v-model="message" @keyup.enter="sendMessage" />
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref, reactive } from "vue"
const message = ref('');
const emit = defineEmits(['sendMessage']);
const sendMessage = () => {
    if (message.value.trim() === '') return;
    const msg = message.value;
    message.value = '';
    emit('sendMessage', msg);
};


</script>
<style lang="scss" scoped>
.inputBox {
    height: 160px;
    min-height: 160px;
    width: 100%;
    display: flex;

    .mainBox {
        margin: 0px 10px;
        padding: 10px 0px;
        width: 100%;
        height: 100%;

        .textareaBox {
            border: 1px solid #ccc;
            border-radius: 12px;
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;

            .moreBox {
                width: 100%;
                height: 30px;
                line-height: 30px;
                padding-left: 10px;
                gap: 10px;
                display: flex;
            }

            textarea {
                margin-bottom: 10px;
                padding-left: 10px;
                resize: none;
                border: none;
                width: 100%;
                height: 100%;
            }

            /* 定义滚动条的宽度、高度和背景色 */
            ::-webkit-scrollbar {
                width: 4px;
                height: 4px;
                margin: 2px 0px;
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
        }
    }
}
</style>