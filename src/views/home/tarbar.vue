<template>
  <div class="nav-container">
    <div class="nav-item" v-for="(item, index) of tarbarData" :key="index" @click="selectItem(item, index)"
      :class="{ active: item.active === true }">
      <div>
        <div class="svgBox">
          <RedPoint v-if="item.redPoint" :path="item.redPoint.path" :top="item.redPoint.top"
            :right="item.redPoint.right">
            <SvgIcon :name="item.active ? item.svgActive : item.svg" width="20px" height="20px"></SvgIcon>
          </RedPoint>
          <SvgIcon v-else :name="item.active ? item.svgActive : item.svg" width="20px" height="20px"></SvgIcon>
        </div>
        <div>{{ item.title }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import { ref } from 'vue'
import { useRouter } from 'vue-router';
let $router = useRouter();

const activeItem = ref('1')
interface Item {
  svg: string
  svgActive: string
  title: string
  active: boolean
  path: string,
  redPoint?: {
    path?: string,
    top?: string,
    right?: string
  }
}
const tarbarData = reactive<Item[]>([
  {
    svg: 'chatIcon',
    svgActive: 'chatActiveIcon',
    title: '对话',
    active: true,
    path: '/home/chat/defaultRoom',
    redPoint: {
      path: 'chat',
      top: '-6px',
      right: '-6px'
    }
  },
  {
    svg: 'peopleIcon',
    svgActive: 'peopleActiveIcon',
    title: '联系人',
    active: false,
    path: '/home/people'
  }
])

const selectItem = (item: Item, index: number) => {
  tarbarData.forEach((item, i) => {
    item.active = i === index
  })
  activeItem.value = String(index)
  $router.push(item.path)
}
</script>

<style lang="scss" scoped>
.nav-container {
  border-radius: 0px 0px 0px 10px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 0;
  background-color: $base-background-color;

  .nav-item {
    width: 60px;
    height: 50px;
    margin: 10px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    font-size: 12px;
  }

  .nav-item>div {
    width: 100%;
    text-align: center;
  }

  .active {
    font-weight: 800;
  }
}
</style>
