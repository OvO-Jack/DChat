<template>
    <div class="chatroomWrapper">
        <Header></Header>
        <ChatItem :messages="messages" :username="username"></ChatItem>
        <InputBox @sendMessage="sendMessage"></InputBox>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue';
// import io from 'socket.io-client';
import Header from './header.vue';
import ChatItem from "./privateItem.vue";
import InputBox from "./inputBox.vue";
import { Message } from './chat';


const username = ref('赵敏');
const messages = reactive<Message[]>([]); // 明确声明 messages 的类型

onMounted(() => {
    // socket.emit('online', username.value);
    // socket.on('reply_private_chat', (msg: Message) => {
    //     messages.push(msg);
    // });
});

const sendMessage = (msg: string) => {
    const params = {
        sender: username.value,
        receiver: '聂小倩', // 假设接收者为 user2
        text: msg,
    };
    socket.emit('private_chat', params, (response: Message) => {
        messages.push(response);
    });
};
</script>

<style scoped lang="scss">
.chatroomWrapper {
    min-width: 450px;
    display: flex;
    flex-direction: column;
    border-right: 1px solid $base-background-color;
    border-bottom: 1px solid $base-background-color;
}
</style>