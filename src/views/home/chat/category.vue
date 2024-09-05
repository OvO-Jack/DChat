<template>
    <div class="categoryWrapper">
        <div class="btnWrapper">
            <div class="svgBox" @click="emit('categoryAction')">
                <SvgIcon name="leftFold"></SvgIcon>
            </div>
        </div>
        <ul class="mainBox">
            <li v-for="(item, index) of list" :key="index" @click="selectItem(item)"
                :class="{ activeItem: category.title === item }">
                <div>{{ item }}</div>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const props = defineProps(['category']);
const list = ['全部', '未读', '@我', '单聊', '群聊', '服务号'];

const selectItem = (activeItemName: string) => {
    emit('updateCategoryTitle', activeItemName);
}

const emit = defineEmits(['categoryAction', 'updateCategoryTitle']);

</script>

<style lang="scss" scoped>
.categoryWrapper {
    height: 100%;
    border-right: 1px solid $base-background-color;
    border-bottom: 1px solid $base-background-color;
    padding: 10px 10px;
    font-size: $base-font-size;
    width: 100px;

    .btnWrapper {
        width: 100%;
        display: flex;
        justify-content: space-between;

        .svgBox {
            width: 25px;
            height: 25px;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
        }

        .svgBox:hover {
            background-color: rgba(200, 203, 206, 0.395);
            border-radius: 5px;
        }
    }

    .mainBox {
        width: 100%;
        margin-top: 10px;

        li {
            width: 100%;
            height: 30px;
            line-height: 30px;
            cursor: pointer;
        }

        li div {
            padding-left: 5px;
        }

        .activeItem {
            background-color: rgb(254, 248, 245);
            color: orange;
            font-weight: 600;
        }
    }
}
</style>
