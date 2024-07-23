<template>
    <div class="itemBox">
        <div class="imgBox">
            <img src="../../../../../public/证件照.jpg" alt="">
        </div>
        <div class="contentBox">
            <div class="headerBox">
                <div class="title">实习生哈哈哈</div>
                <div class="time">10:44
                </div>
            </div>
            <div class="bottomBox">
                <div class="textBox">
                    哈哈哈哈哈哈
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref, reactive } from "vue"




</script>
<style lang="scss" scoped>
.itemBox {
    width: 100%;
    height: 60px;
    display: flex;
    font-size: 12px;
    border-left: 3px solid orange;

    .imgBox {
        margin: auto 8px;

        img {
            width: 40px;
            height: 40px;
            border-radius: 50%;
        }
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

    background-color: rgb(248, 248, 248);
}
</style>