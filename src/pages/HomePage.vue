<template>
    <Banner />

    <ArticleList
      :articles="paged"
      :hasMore="hasMore"
      :onLoadMore="loadMore"
    />
</template>


<script setup>
import Banner from '@/components/Banner.vue'
import ArticleList from '@/components/ArticleList.vue'

import { onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useArticlesStore } from '@/stores/articlesStore'

// Инициализируем стор
const articlesStore = useArticlesStore()

// Выносим нужные поля из стора в локальные рефы
const { paged, hasMore } = storeToRefs(articlesStore)

// При первом монтировании загружаем статьи
onMounted(async () => {
  await articlesStore.init()
})

// Коллбек для кнопки «Загрузить ещё»
function loadMore() {
  articlesStore.loadMore()
}
</script>