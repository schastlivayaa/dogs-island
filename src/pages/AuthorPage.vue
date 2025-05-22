<template>
  <div class="author">
    <h2 class="author__title">Статьи автора: {{ authorName }}</h2>

    <ArticleList
      :articles="pagedArticles"
      :hasMore="hasMore"
      :onLoadMore="loadMore"
    />
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import ArticleList from '@/components/ArticleList.vue'
import allArticlesJson from '@/assets/data/articles.json'

const route = useRoute()
const allArticles = ref([])

// загрузить все статьи
onMounted(() => {
  allArticles.value = structuredClone(allArticlesJson)
})

// текущий slug автора из URL
const authorSlug = computed(() => route.params.author)

// отфильтрованный массив статей этого автора
const filtered = computed(() =>
  allArticles.value.filter(
    a => a.author && a.author.slug === authorSlug.value
  )
)

// имя автора (берём из первой статьи, если есть)
const authorName = computed(() => {
  const first = filtered.value[0]
  return first && first.author ? first.author.name : ''
})

// пагинация
const pageSize = 6
const currentPage = ref(1)

const pagedArticles = computed(() =>
  filtered.value.slice(0, currentPage.value * pageSize)
)

const hasMore = computed(() =>
  pagedArticles.value.length < filtered.value.length
)

function loadMore() {
  if (hasMore.value) {
    currentPage.value++
  }
}

</script>

<style scoped lang="scss">
@use '@/assets/styles/abstracts/constants' as *;

.author {
    background-color: $color-medium;
    padding-top: 3rem;

  &__title {
    text-align: center;
    color: $color-additional;
    text-transform: uppercase;
  }
}
</style>
