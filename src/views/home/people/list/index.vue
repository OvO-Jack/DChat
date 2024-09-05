<template>
    <div class="listWrapper">
        <div class="mainBox">
            <Item v-for="(item, index) of listData" :key="index" :item="item" @click="clickAction(item, index)"></Item>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref, reactive } from 'vue'
import { ItemType } from './list'
import Item from './item.vue'
const listData = reactive<ItemType[]>([
    {
        iconName: 'organization',
        title: '组织架构',
        active: true,
        backgroundColor: 'rgb(115, 140, 252)'
    },
    {
        iconName: 'qunzu',
        title: '群组',
        active: false,
        backgroundColor: 'rgb(243,205,55)'
    },
    {
        iconName: 'tuandui',
        title: '我的团队',
        active: false,
        backgroundColor: 'rgb(135,198,195)'
    },
    {
        iconName: 'gongzhonghao',
        title: '公众号',
        active: false,
        backgroundColor: 'rgb(104,163,253)'
    }
])
const activeIndex = ref<number>(0);

const clickAction = (item: ItemType, index: number) => {
    listData[activeIndex.value].active = false;
    item.active = true;
    activeIndex.value = index;
}
</script>
<style lang="scss" scoped>
.listWrapper {
    width: 220px;
    height: 100%;
    border-right: 1px solid $base-background-color;
    border-bottom: 1px solid $base-background-color;

    .mainBox {
        width: 220px;
    }
}
</style>
