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

    <!-- 引入头像编辑 -->
    <ImgCorpper :dialogVisibleCorpper="dialogVisibleCorpper" @confirm="confirm"
      @update:dialogVisibleCorpper="updateDialogVisibleCorpper" />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import BoxHeader from './header.vue'
import Tarbar from './tarbar.vue'
import Chat from './chat/index.vue'
import Test from './test/index.vue'
import Test1 from './test1/index.vue'
import useUserStore from '@/store/modules/user'

// 使用 store
const userStore = useUserStore()

const dialogVisibleCorpper = computed(() => userStore.variable.dialogVisibleCorpper)

// 更新弹窗显示状态
const updateDialogVisibleCorpper = (value: boolean) => {
  userStore.dialogVisibleCorpper(value)
}

// 头像编辑弹窗确认
const confirm = () => {
  userStore.dialogVisibleCorpper(false)
}

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
  height: 100vh;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  .mainBox {
    width: 65vw;
    height: 85vh;
    min-height: 450px;
    margin: 100px 0px;
    display: flex;
    flex-direction: column;

    .boxMain {
      min-height: 420px;
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
