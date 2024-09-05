<template>
  <div class="peoplerWapper">
    <div>
      <List></List>
    </div>
    <div class="mainBox">
      <Organzation></Organzation>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, reactive } from 'vue'
import List from './list/index.vue'
import Organzation from './organzation/index.vue'
</script>
<style lang="scss" scoped>
.peoplerWapper {
  height: 100%;
  display: flex;
  flex: 1;

  .mainBox {
    display: flex;
    height: 100%;
    border-right: 1px solid $base-background-color;
    border-bottom: 1px solid $base-background-color;
    flex: 1;
    border-radius: 0px 0px 10px 0px;
  }
}
</style>
