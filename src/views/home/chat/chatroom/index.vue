<template>
    <div class="chatroomWrapper">
        <Header></Header>
        <ChatItem></ChatItem>
        <InputBox></InputBox>
    </div>
</template>
<script setup lang="ts">
import { ref, reactive } from "vue"
import Header from './header.vue'
import ChatItem from "./privateItem.vue";
import InputBox from "./inputBox.vue";



</script>
<style lang="scss" scoped>
.chatroomWrapper {
    width: 100%;
    height: 100%;
    min-height: 420px;
    border-right: 1px solid $base-background-color;
    border-bottom: 1px solid $base-background-color;
    display: grid;
    grid-template-rows: auto 1fr auto;
}
</style>