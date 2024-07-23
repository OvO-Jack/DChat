<template>
  <div>
    <div class="homeWrapper">
      <div class="mainBox">
        <div>
          <BoxHeader />
        </div>
        <div class="boxMain">
          <div class="bottomBox">
            <div>
              <Tarbar @select="showContent" />
            </div>
            <div class="contentBox">
              <Chat v-if="activeContent === '1'" />
              <Test v-if="activeContent === '2'" />
              <Test1 v-if="activeContent === '3'" />
            </div>
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
body {
  font-size: $base-font-size;
}

.homeWrapper {
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
    width: 65vw;
    height: 85vh;
    min-height: 450px;
    margin: 100px 0px;
    display: flex;
    flex-direction: column;

    .boxMain {
      flex: 1;
      height: calc(80vh - 50px);

      .bottomBox {
        height: 100%;
        display: flex;

        .contentBox {
          height: 100%;
          width: 100%;
        }
      }
    }
  }
}
</style>
