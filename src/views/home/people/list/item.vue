<template>
    <div class="itemBox" :class="{ active: item.active === true }">
        <div class="svgIconBox" :style="{ background: item.backgroundColor }">
            <SvgIcon :name="item.iconName" width="20px" height="20px"></SvgIcon>
        </div>
        <div>{{ item.title }}</div>
    </div>
</template>
<script setup lang="ts">
import { ref, reactive } from "vue"
import { ItemType } from './list'
defineProps<{ item: ItemType }>();



</script>
<style lang="scss" scoped>
.itemBox {
    width: 100%;
    display: flex;
    height: 60px;
    line-height: 60px;
    border-bottom: 1px solid $base-background-color;
    position: relative;
    cursor: pointer;

    .svgIconBox {
        width: 40px;
        height: 40px;
        margin: auto 10px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        line-height: 40px;
    }
}

.itemBox::before {
    content: " ";
    display: inline-block;
    height: 8px;
    width: 8px;
    border-width: 1px 1px 0 0;
    border-color: #ccc;
    border-style: solid;
    position: absolute;
    bottom: 25px;
    right: 20px;
    transform: rotate(45deg);
}

.active {
    background-color: rgb(239, 240, 241);
}

.active::before {
    border-color: black;
}
</style>