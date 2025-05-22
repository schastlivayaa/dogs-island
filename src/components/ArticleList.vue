<template>
  <section class="articles">
    <div class="articles__grid">
        <ArticleCard
        v-for="art in articles"
        :key="art.id"
        :title="art.title"
        :desc="art.desc"
        :image="art.image"
        :link="art.link"
      />
    </div>

    <div class="articles__load-more" v-if="hasMore">
      <button class="btn_colored paragraph" @click="onLoadMore">
        Загрузить еще
      </button>
    </div>
  </section>
</template>

<script setup>
import ArticleCard from '@/components/ArticleCard.vue'

defineProps({
  articles: { type: Array, required: true },
  onLoadMore: { type: Function, default: null },
  hasMore: { type: Boolean, default: false },
});
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
