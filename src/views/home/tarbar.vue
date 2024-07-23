<template>
  <div class="nav-container">
    <div class="nav-item" @click="selectItem('1')" :class="{ active: activeItem === '1' }">
      <div v-if="activeItem === '1'">
        <div>
          <SvgIcon name="chatActiveIcon" width="20px" height="20px"></SvgIcon>
        </div>
        <div>对话</div>
      </div>
      <div v-else>
        <div>
          <SvgIcon name="chatIcon" width="20px" height="20px"></SvgIcon>
        </div>
        <div>对话</div>
      </div>
    </div>
    <div class="nav-item" @click="selectItem('2')">
      <!-- <img src="tab-order.png" alt="Icon 2"> -->222
    </div>
    <div class="nav-item" @click="selectItem('3')">
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

<style lang="scss" scoped>
.nav-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 0;
  background-color: $base-background-color;

  .nav-item {
    width: 60px;
    height: 35px;
    margin: 10px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    font-size: 12px
  }

  .active {
    font-weight: 800;
  }
}
</style>
