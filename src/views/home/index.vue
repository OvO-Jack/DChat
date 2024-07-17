<template>
    <div>
        <div class="wrapper">
            <div class="mainBox">
                <div class="boxHeader">
                    <boxHeader />
                </div>
                <div class="boxMain">
                    <mainBox></mainBox>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref, reactive } from "vue"
import boxHeader from './header.vue'
import mainBox from './main.vue'


</script>
<style lang="scss" scoped>
.wrapper {
    width: 100vw;
    height: 100vh;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: center;
    /* 水平居中 */
    align-items: center;
    /* 垂直居中 */

    .mainBox {
        width: 80vw;
        height: 80vh;
        border: 1px solid black;

        .boxHeader {
            display: flex;
            border: 1px solid black;
            height: 40px;
        }

        .boxMain {
            display: flex;
            flex: 1;
        }
    }
}
</style>./mainBox.vue