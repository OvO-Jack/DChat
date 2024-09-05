<template>
    <div class="header">
        <Header></Header>
    </div>
</template>
<script setup lang="ts">
import { ref, reactive } from "vue"
import Header from './header.vue'



</script>
<style lang="scss" scoped>
.header {
    height: 60px;
    width: 100%;
    border-bottom: 1px solid $base-background-color;
}
</style>