<template>
    <div class="headerWrapper">
        <div class="mainBox">
            <div class="leftBox">
                <div class="title">{{ $route.query.username }}</div>
            </div>
            <div class="rightBox">
                <div class="icon">
                    图标
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref, reactive } from "vue"
import { useRoute } from 'vue-router'
const $route = useRoute()


</script>
<style lang="scss" scoped>
.headerWrapper {
    width: 100%;
    height: 60px;
    border-bottom: 1px solid $base-background-color;

    .mainBox {
        display: flex;
        justify-content: space-between;
        margin: auto 10px;
        height: 60px;
        line-height: 60px;

        .leftBox {
            .title {
                font-weight: 500 !important;
            }
        }

        .rightBox {
            .icon {
                // SCSS 样式
            }
        }
    }
}
</style>