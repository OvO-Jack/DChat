<template>
    <div class="mainBox">
        <div class="svgBox">
            <SvgIcon name="organizationTitle" width="20px" height="20px"></SvgIcon>
        </div>
        <div>
            <el-breadcrumb :separator-icon="ArrowRight">
                <el-breadcrumb-item :to="{ path: '/' }">所有员工</el-breadcrumb-item>
                <el-breadcrumb-item>CEO</el-breadcrumb-item>
                <el-breadcrumb-item>promotion list</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref, reactive } from "vue"
import { ArrowRight } from '@element-plus/icons-vue'
</script>
<style lang="scss" scoped>
.mainBox {
    height: 60px;
    line-height: 60px;
    display: flex;
    align-items: center;

    .svgBox {
        margin: auto 15px auto 20px;
    }
}
</style>