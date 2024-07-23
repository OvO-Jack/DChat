<template>
  <div class="headerWrapper">
    <el-row justify="space-between" class="headerBox" style="width: 100%;">
      <el-col :span="6" class="avatarBox">
        <div style="display: flex; align-items: center;">
          <el-avatar :size="35" />
        </div>
      </el-col>
      <el-col :span="6">
        <el-input v-model="searchValue" style="width: 240px" placeholder="Type something" :prefix-icon="Search" />
      </el-col>
      <el-col :span="6">
      </el-col>
    </el-row>
  </div>
</template>
<script setup lang="ts">
import { ref, reactive } from 'vue'
import { Search } from '@element-plus/icons-vue'

const searchValue = ref('')

</script>
<style lang="scss" scoped>
.headerWrapper {
  display: flex;
  height: 50px;
  background-color: $base-background-color;

  .headerBox {

    .avatarBox {
      padding-left: 10px;
    }

    .avatarBox>div {
      margin: auto;
    }
  }

  .headerBox>div {
    margin: auto 0px;
  }
}
</style>
