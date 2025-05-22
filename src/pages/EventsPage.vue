<template>
  <div class="page__filter">
    <h2 class="page__title">События</h2>

    <TagsFilter
      :tags="tags"
      v-model="selectedTag"
    />
  </div>

  <ArticleList
    :articles="pagedArticles"
    :hasMore="hasMore"
    :onLoadMore="loadMore"
  />
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import TagsFilter from '@/components/TagFilter.vue'
import ArticleList from '@/components/ArticleList.vue'
import tags from '@/assets/data/tags_events.json'
import allArts from '@/assets/data/events.json'

// реактивные состояния
const allArticles   = ref([])
const selectedTag   = ref(null)
const pageSize      = 12
const currentPage   = ref(1)

onMounted(() => {
  // загружаем все статьи из JSON
  allArticles.value = structuredClone(allArts)
})

// отфильтрованный массив
const filtered = computed(() =>
  selectedTag.value
    ? allArticles.value.filter(a => a.tags.includes(selectedTag.value))
    : allArticles.value
)

// «разбивка по страницам» — от первой до currentPage
const pagedArticles = computed(() =>
  filtered.value.slice(0, currentPage.value * pageSize)
)

// есть ли ещё?
const hasMore = computed(() =>
  pagedArticles.value.length < filtered.value.length
)

// методы
function loadMore() {
  currentPage.value++
}

function selectTag(slug) {
  // сбросить на тот же клик, иначе выбрать новый
  selectedTag.value = selectedTag.value === slug ? null : slug
  currentPage.value = 1
}
</script>

<style scoped lang="scss">
@use '@/assets/styles/abstracts/constants' as *;

.page__filter {
  background-color: $color-medium;
  padding-top: 4rem;
}
</style>