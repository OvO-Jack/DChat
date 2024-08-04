<template>
    <div class="listWrapper">
        <div class="btnWrapper">
            <div>全部</div>
            <div>闪电</div>
        </div>
        <div class="mainBox">
            <PrivateItem :active="true"></PrivateItem>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref, reactive } from 'vue'
import PrivateItem from './privateItem.vue'
</script>
<style lang="scss" scoped>
.listWrapper {
    height: 100%;
    border-right: 1px solid $base-background-color;
    border-bottom: 1px solid $base-background-color;

    .btnWrapper {
        width: 220px;
        display: flex;
        justify-content: space-between;
        padding: 10px 10px;
        font-size: $base-font-size;
    }

    .btnWrapper div {
        margin: 0px 5px;
    }

    .mainBox {
        width: 220px;
    }
}
</style>
