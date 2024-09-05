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
              <Tarbar />
            </div>
            <router-view></router-view>
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
import { ref, computed, onMounted } from 'vue'
import BoxHeader from './header.vue'
import Tarbar from './tarbar.vue'
import useUserStore from '@/store/modules/user'
import useWebSocketStore from '@/store/modules/socket'
const webSocketStore = useWebSocketStore()

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
onMounted(() => {
  // 建立 WebSocket 连接
  webSocketStore.connect()
})

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
    min-width: 800px;
    min-height: 1200px;
    width: 70vw;
    height: 90vh;
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
