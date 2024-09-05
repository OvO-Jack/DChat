<template>
  <div class="wrapper">
    <Category @categoryAction="categoryAction" @updateCategoryTitle="updateCategoryTitle" v-show="category.status"
      :category="category">
    </Category>
    <List :category="category" @categoryAction="categoryAction"></List>
    <router-view :key="key"></router-view>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed } from 'vue'
import Category from './category.vue';
import List from './list/index.vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const key = computed(() => route.fullPath);

const initialCategory = JSON.parse(localStorage.getItem('category') || '{"status": true, "title": "全部"}');
const category = reactive({
  status: initialCategory.status as boolean,
  title: initialCategory.title as string
});

const categoryAction = () => {
  category.status = !category.status;
  localStorage.setItem('category', JSON.stringify({ status: category.status, title: category.title }));
};

const updateCategoryTitle = (title: string) => {
  category.title = title;
  localStorage.setItem('category', JSON.stringify({ status: category.status, title: category.title }));
};
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  height: 100%;
  flex: 1;
}
</style>
