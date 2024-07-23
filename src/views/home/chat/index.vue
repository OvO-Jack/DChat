<template>
  <div class="wrapper">
    <Category></Category>
    <List></List>
    <Chatroom></Chatroom>
  </div>
</template>
<script setup lang="ts">
import { ref, reactive } from 'vue'
import Category from './category.vue';
import List from './list/index.vue';
import Chatroom from './chatroom/index.vue'
</script>
<style lang="scss" scoped>
.wrapper {
  display: flex;
  height: 100%;
}
</style>
