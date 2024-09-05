<template>
    <div class="badge-container" v-if="!hidden">
        <slot></slot>
        <div v-if="badgeVisible" class="mainBox" :style="badgeStyle">
            <template v-if="!isDot">
                {{ computedBadgeText }}
            </template>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { useChatStore } from '@/store/modules/chat'

const props = defineProps<{
    path?: string
    value?: number
    max?: number
    isDot?: boolean
    hidden?: boolean,
    top?: string,
    right?: string
}>()

const badgeStyle = computed(() => ({
    top: props.top ?? '-3px',
    right: props.right ?? '-3px',
}))

const store = useChatStore()

// 默认值设置
const max = props.max ?? 99
const isDot = props.isDot ?? false
const hidden = props.hidden ?? false

// 计算当前路径及其子路径的Badge值
const badgeText = computed(() => {
    let currentBadgeValue = store.getBadgeState(props.path)

    // 如果传入了 value，使用 value 作为当前路径的值
    if (typeof props.value === 'number') {
        store.setBadge(props.path, props.value)
        currentBadgeValue = props.value
    } else {
        // 没有传入 value 的情况下，计算子路径的总和
        currentBadgeValue = store.getChildBadgeSum(props.path)
    }

    // 最终计算的 badge 值
    return currentBadgeValue > max ? `${max}+` : currentBadgeValue
})

// 计算最终显示的Badge文本
const computedBadgeText = computed(() => badgeText.value)

// 判断是否显示badge（红点或者数字）
const badgeVisible = computed(() => {
    return !hidden && Number(badgeText.value) > 0
})

// 在组件挂载时更新路径状态
onMounted(() => {
    // 如果传入了 value，初次加载时需要更新 store 中的 badge 状态
    if (typeof props.value === 'number') {
        store.setBadge(props.path, props.value)
    }
})
</script>

<style scoped>
.badge-container {
    display: inline-block;
    position: relative;
}

.mainBox {
    position: absolute;
    z-index: 99;
    color: #fff;
    background-color: rgb(245, 74, 69);
    width: 15px;
    height: 15px;
    min-width: 15px;
    padding: 0px;
    border-radius: 50%;
    line-height: 15px;
    text-align: center;
    font-size: 10px;
}
</style>