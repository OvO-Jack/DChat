<template>
  <div>
    <div class="wrapper">
      <div class="mainBox">
        <div class="boxHeader">
          <BoxHeader />
        </div>
        <div class="boxMain">
          <div class="bottomBox">
            <el-row class="bottomBox">
              <el-col :span="2">
                <Tarbar @select="showContent" />
              </el-col>
              <el-col :span="22">
                <div class="content-container">
                  <Chat v-if="activeContent === '1'" />
                  <Test v-if="activeContent === '2'" />
                  <Test1 v-if="activeContent === '3'" />
                </div>
              </el-col>
            </el-row>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, reactive } from 'vue'
import BoxHeader from './header.vue'
import Tarbar from './tarbar.vue'
import Chat from './chat/index.vue'
import Test from './test/index.vue'
import Test1 from './test1/index.vue'

const activeContent = ref('1')

const showContent = (contentId: string) => {
  activeContent.value = contentId
}
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
    display: flex;
    flex-direction: column;

    .boxHeader {
      display: flex;
      border: 1px solid black;
      height: 40px;
    }

    .boxMain {
      flex: 1;
      .bottomBox {
        height: 100%;
      }
    }
  }
}
</style>
