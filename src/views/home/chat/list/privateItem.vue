<template>
    <div class="itemBox" :class="{ active: active === true }">
        <div class="imgBox">
            <RedPoint :path="`chat.${userinfo.id}`" :value="unreadCount">
                <el-avatar :size="40" :src="userinfo.image">
                </el-avatar>
            </RedPoint>
        </div>
        <div class="contentBox">
            <div class="headerBox">
                <div class="title">{{ userinfo.username }}</div>
                <div class="time">10:44
                </div>
            </div>
            <div class="bottomBox">
                <div class="textBox">
                    发送的消息
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref, reactive } from "vue"
defineProps({
    active: {
        type: Boolean,
        default: false
    },
    userinfo: {
        type: Object,
        require: true
    },
    unreadCount: {
        type: Number,
        require: true
    }
});

const path = ref()

</script>
<style lang="scss" scoped>
.itemBox {
    width: 100%;
    height: 60px;
    display: flex;
    font-size: 12px;

    .imgBox {
        margin: auto 8px;
    }

    .contentBox {
        width: 100%;
        margin: auto 10px auto 0px;

        .headerBox {
            display: flex;
            justify-content: space-between;
            height: 20px;
            font-size: 13px;

            .title {
                font-weight: 600;
            }

            .time {
                color: #ccc;
                font-size: 10px;
                height: 20px;
                line-height: 20px;
            }
        }

        .bottomBox {
            .textBox {
                color: #ccc;
                font-size: 12px;
            }
        }
    }
}

.active {
    border-left: 3px solid orange;
    background-color: rgb(248, 248, 248);
}
</style>