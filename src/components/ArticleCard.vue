<template>
  <RouterLink 
    :to="{ name: 'ArticleDetail', params: { id: article.id } }" 
    class="article-card">
    <img
      v-if="article.image"
      :src="article.image"
      :alt="article.title"
      class="article-card__image"
    />
    <div class="article-card__content">
      <h2 class="article-card__title">{{ article.title }}</h2>
      <p class="article-card__desc paragraph">{{ article.desc }}</p>
    </div>
  </RouterLink>
</template>

<script setup>
import { RouterLink } from 'vue-router'

const props = defineProps({
  article: {
    type: Object,
    required: true
  }
})
</script>

<style scoped lang="scss">
@use '@/assets/styles/abstracts/constants' as *;

.article-card {
    display: flex;
    flex-direction: column;
    background: $color-light;
    overflow: hidden;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    transition: transform 0.2s ease;
    margin: 0 auto;
    flex: 1 1 370px;
    max-width: 480px;
    min-width: 200px;

    &:hover {
        transform: translateY(-4px);
    }

    &__image {
        width: 100%;
        aspect-ratio: 444 / 296; // соотношение сторон
        object-fit: cover;
    }

    &__content {
        padding: 1rem;
        flex: 1;
    }

    &__title {
        margin: 0.5rem 0;
        color: $color-additional;
    }
}
</style>
