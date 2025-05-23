<template>
  <div class="page__filter">
    <h2 class="page__title">Статьи</h2>

    <TagsFilter
      :tags="tags"
      v-model="selectedTag"
      @update:model-value="selectTag"
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
import { useRoute, useRouter } from 'vue-router'

import TagsFilter from '@/components/TagFilter.vue'
import ArticleList from '@/components/ArticleList.vue'
import tags from '@/assets/data/tags_articles.json'
import allArts from '@/assets/data/articles.json'

// реактивные состояния
const allArticles   = ref([])
const pageSize      = 12
const currentPage   = ref(1)
// роутинг
const route = useRoute()
const router = useRouter()

onMounted(() => {
  allArticles.value = structuredClone(allArts)
})

const selectedTag = computed(() => route.query.tag || null)

// отфильтрованные статьи
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
  const next = slug === selectedTag.value ? null : slug
  router.push({
    query: { ...route.query, tag: next || undefined },
  })
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