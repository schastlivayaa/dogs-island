<template>
  <section class="articles">
    <div class="articles__grid">
        <ArticleCard
        v-for="art in articlesStore.paged"
        :key="art.id"
        :title="art.title"
        :desc="art.desc"
        :image="art.image"
        :link="art.link"
      />
    </div>

    <div class="articles__load-more" v-if="articlesStore.hasMore">
      <button class="btn_colored paragraph" @click="articlesStore.loadMore">
        Загрузить еще
      </button>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'
import { useArticlesStore } from '@/stores/articlesStore'
import ArticleCard from '@/components/ArticleCard.vue'

const articlesStore = useArticlesStore()

onMounted(async () => {
  await articlesStore.init()
})
</script>

<style scoped lang="scss">
@use '@/assets/styles/abstracts/constants' as *;

.articles {
    background-color: $color-medium;
    padding: 5rem 20rem;

    @media (max-width: 1320px) {
        padding: 4rem 17rem;
    }
    @media (max-width: 790px) {
        padding: 3rem 10rem;
    }
    
    &__grid {
        display: flex;
        flex-wrap: wrap;
        gap: 2rem;
    }

    &__load-more {
        margin-top: 4rem;
        text-align: center;
    }
}
</style>
