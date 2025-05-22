<template>
    <article class="article">
        <h2 class="article__title">{{ article.title }}</h2>

        <img 
            v-if="article.image"
            class="article__image" 
            :src="article.image" 
            :alt="article.title" 
        />

        <div class="article__container paragraph">
            <p
              v-if="article.intro"
              class="article__intro"
            >
                {{ article.intro }}
            </p>

            <div
              class="article__main"
              v-html="article.content"
            ></div>

            <div class="article__meta">
                <div class="article__creators">
                    <RouterLink
                      v-if="article.author"
                      :to="{ name: 'AuthorArticles', params: { author: article.author.slug } }"
                      class="article__author"
                    >
                        Автор: {{ article.author.name }},
                    </RouterLink>

                    <span 
                      v-if="article.photographer" 
                      class="article__photographer"
                    >
                        Фотограф: {{ article.photographer }}
                    </span>
                </div>

                <div class="article__share">
                    <span>Поделиться:</span>
                    <a href="#" class="article__share-link" aria-label="Поделиться ВКонтакте">
                        <img src="@/assets/images/vk_blue.svg" alt="Поделиться ВКонтакте">
                    </a>
                    <a href="#" class="article__share-link" aria-label="Поделиться Telegram">
                        <img src="@/assets/images/tg_blue.svg" alt="Поделиться Telegram">
                    </a>
                </div>
            </div>
        </div>
    </article>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

import allArticles from '@/assets/data/articles.json'

const route = useRoute()
const article = ref({
  title: '',
  image: '',
  intro: '',
  content: '',
  author: null,
  photographer: ''
})

onMounted(() => {
  const id = Number(route.params.id)
  // в API — fetch(`/api/articles/${id}`).then(...)
  const found = allArticles.find(a => a.id === id)
  if (found) {
    article.value = {
      ...found,
      intro: found.intro || '',
      content: found.content || found.desc, 
      author: found.author || null,
      photographer: found.photographer || ''
    }
  }
})

function share(to) {
  const url   = encodeURIComponent(window.location.href)
  const title = encodeURIComponent(article.value.title)
  let shareUrl = ''

  if (to === 'vk') {
    shareUrl = `https://vk.com/share.php?url=${url}&title=${title}`
  } else if (to === 'telegram') {
    shareUrl = `https://t.me/share/url?url=${url}&text=${title}`
  }

  window.open(shareUrl, '_blank', 'width=600,height=400')
}
</script>

<style scoped lang="scss">
@use '@/assets/styles/abstracts/constants' as *;

.article {
  padding: 4rem 0;

  &__title {
    text-align: center;
    color: $color-additional;
    padding-bottom: 3rem;
  }

  &__image {
    height: 50rem;
    width: 100%;
    object-fit: cover;
    object-position: center;
  }

  &__container {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 3rem 18rem;
    color: $color-dark;
  }

  &__intro {
    font-weight: 500;
  }

  &__meta {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 1rem;
    text-transform: uppercase;
    font-family: 'Bebas Neue Cyrillic';
  }

  &__creators {
    .article__author {
      &:hover {
        text-decoration: underline;
      }
    }
  }

  &__share {
    display: flex;
    align-items: center;
    gap: 1rem;

    &-link {
        width: 2.7rem;
        height: 2.7rem;
    }


  }
}

/* Адаптив */
@media (max-width: 600px) {
  .article-page {
    padding: 2rem 1rem;
    &__title {
      font-size: 1.75rem;
    }
  }
}
</style>