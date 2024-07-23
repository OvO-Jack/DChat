<template>
    <div class="categoryWrapper">
        <div class="btnWrapper">
            <div>按钮</div>
            <div>设置</div>
        </div>
        <ul class="mainBox">
            <li @click="selectItem('全部')" :class="{ activeItem: activeItem === '全部' }">
                <div>全部</div>
            </li>
            <li @click="selectItem('未读')" :class="{ activeItem: activeItem === '未读' }">
                <div>未读</div>
            </li>
            <li @click="selectItem('@我')" :class="{ activeItem: activeItem === '@我' }">
                <div>@我</div>
            </li>
            <li @click="selectItem('单聊')" :class="{ activeItem: activeItem === '单聊' }">
                <div>单聊</div>
            </li>
            <li @click="selectItem('群聊')" :class="{ activeItem: activeItem === '群聊' }">
                <div>群聊</div>
            </li>
            <li @click="selectItem('服务号')" :class="{ activeItem: activeItem === '服务号' }">
                <div>服务号</div>
            </li>
        </ul>
    </div>
</template>
<script setup lang="ts">
import { ref, reactive } from 'vue'
const activeItem = ref('全部')
const selectItem = (activeItemName: string) => {
    activeItem.value = activeItemName
}

</script>
<style lang="scss" scoped>
.categoryWrapper {
    width: 120px;
    height: 100%;
    border-right: 1px solid $base-background-color;
    padding: 10px 10px;
    font-size: $base-font-size;

    .btnWrapper {
        width: 100%;
        display: flex;
        justify-content: space-between;
    }

    .btnWrapper div {
        margin: 0px 5px;
    }

    .mainBox {
        margin-top: 10px;

        li {
            width: 100%;
            height: 30px;
            line-height: 30px;
        }

        li div {
            padding-left: 5px;
        }

        .activeItem {
            background-color: rgb(254, 248, 245);
        }
    }
}
</style>
