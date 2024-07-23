<template>
  <div class="nav-container">
    <div
      class="nav-item"
      :class="{ active: activeItem === '1' }"
      @click="selectItem('1')"
    >
      <!-- <img src="tab-home.pgn" alt="Icon 1"> -->111
    </div>
    <div
      class="nav-item"
      :class="{ active: activeItem === '2' }"
      @click="selectItem('2')"
    >
      <!-- <img src="tab-order.png" alt="Icon 2"> -->222
    </div>
    <div
      class="nav-item"
      :class="{ active: activeItem === '3' }"
      @click="selectItem('3')"
    >
      <!-- <img src="tab-message.png" alt="Icon 3"> -->333
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, defineEmits } from 'vue'

const emit = defineEmits(['select'])
const activeItem = ref('1')

const selectItem = (item: string) => {
  activeItem.value = item
  emit('select', item)
}
</script>

<style>
.nav-container {
  width: 100%;
  height: 100%;
  background-color: rgb(245, 246, 248);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 0;
}

.nav-item {
  width: 40px;
  height: 40px;
  margin: 10px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.nav-item img {
  width: 100%;
  height: auto;
}

.nav-item.active {
  border: 2px solid red;
}
</style>
