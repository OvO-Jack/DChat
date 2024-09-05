<template>
    <div class="chatroomWrapper">
        <Header></Header>
        <ChatItem></ChatItem>
        <InputBox></InputBox>
    </div>
</template>

<script setup lang="ts">
import Header from './header.vue'
import ChatItem from './privateItem.vue'
import InputBox from './inputBox.vue'

</script>

<style scoped lang="scss">
.chatroomWrapper {
    border-radius: 0px 0px 10px 0px;
    display: flex;
    flex: 1;
    flex-direction: column;
    border-right: 1px solid $base-background-color;
    border-bottom: 1px solid $base-background-color;
}
</style>
