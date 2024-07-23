<template>
    <div class="listWrapper">
        <div class="btnWrapper">
            <div>全部</div>
            <div>闪电</div>
        </div>
        <div class="mainBox">
            <Item></Item>
            <Item></Item>
            <Item></Item>
            <Item></Item>
            <Item></Item>
            <Item></Item>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref, reactive } from 'vue'
import Item from './item.vue'
</script>
<style lang="scss" scoped>
.listWrapper {
    width: 250px;
    height: 100%;
    border-right: 1px solid $base-background-color;

    .btnWrapper {
        width: 100%;
        display: flex;
        justify-content: space-between;
        padding: 10px 10px;
        font-size: $base-font-size;
    }

    .btnWrapper div {
        margin: 0px 5px;
    }

    .mainBox {}
}
</style>
