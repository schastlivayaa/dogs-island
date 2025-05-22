<template>
  <div class="filter__container">
    <h2 class="filter__title">Статьи</h2>
    <!-- Блок фильтров -->
    <div class="filter__tags">
      <button
        v-for="t in tags"
        :key="t.slug"
        :class="['filter__btn btn caption-small', { active: t.slug === selectedTag }]"
        @click="selectTag(t.slug)"
      >
        {{ t.title }}
      </button>
    </div>
  </div>

  <!-- Список карточек -->
  <ArticleList
    :articles="pagedArticles"
    :hasMore="hasMore"
    :onLoadMore="loadMore"
  />
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import ArticleList from '@/components/ArticleList.vue'
import tags from '@/assets/data/tags_articles.json'
import allArts from '@/assets/data/articles.json'

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

.filter {
  &__container {
    padding: 4rem 20rem;
    text-align: center;
  }

  &__title {
    color: $color-dark;
  }

  &__tags {
    padding: 2rem;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 15px;
  }
}

</style>