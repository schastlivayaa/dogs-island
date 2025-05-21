<template>
  <section class="banner">
    <!-- Arrows -->
    <button class="banner__arrow banner__arrow--left" @click="banner.prev">
      <img src="@/assets/images/arrow-left.svg" alt="Previous slide" class="banner__arrow-icon" />
    </button>

    <!-- Slider Wrapper -->
    <div class="banner__wrapper">
      <div class="banner__track" :style="trackStyle">
        <RouterLink
          v-for="(slide, idx) in banner.slides"
          :key="slide.image"
          :to="slide.link"
          :class="['banner__card', { 'banner__card--current': idx === banner.currentIndex }]"
        >
          <img
            :src="slide.image"
            :alt="slide.title"
            class="banner__image"
          />
          <div class="banner__card-info">
            <h2 class="banner__card-title">{{ slide.title }}</h2>
            <p class="banner__card-desc paragraph">{{ slide.desc }}</p>
          </div>
        </RouterLink>
      </div>
    </div>

    <button class="banner__arrow banner__arrow--right" @click="banner.next">
      <img src="@/assets/images/arrow-right.svg" alt="Next slide" class="banner__arrow-icon" />
    </button>
  </section>
</template>

<script setup>
import { onMounted, computed } from 'vue'
import { useBannerStore } from '@/stores/bannerStore'
import { RouterLink } from 'vue-router'

const banner = useBannerStore()

// Dimensions
const slideWidth = 900 // px
const gap = 20         // px (2rem)

// Load slides, а затем сразу в середину
onMounted(async () => {
  await banner.loadSlides()
  const len = banner.slides.length
  if (len > 0) {
    banner.currentIndex = Math.floor(len / 2)
  }
})

// Считаем сдвиг
const trackStyle = computed(() => {
  const offset = -banner.currentIndex * (slideWidth + gap)
  return {
    transform: `translateX(${offset}px)`,
    transition: 'transform 0.5s ease'
  }
})
</script>

<style lang="scss" scoped>
@use '@/assets/styles/abstracts/constants' as *;

.banner {
  position: relative;
  padding: 5rem 0;
  display: flex;
  justify-content: center;

  &__arrow {
    position: absolute;
    top: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;

    &:hover .banner__arrow-icon {
      filter: brightness(0.7);
    }
  }
  &__arrow--left { 
    left: 0;
    width: calc(28.9rem + 5rem);
    background: linear-gradient(
      to right,
      rgba(127, 163, 202, 0.3),
      transparent 80%
    );
    justify-content: flex-end;
    padding-right: 1rem;

    &:hover {
      background: linear-gradient(
        to right,
        rgba(127, 163, 202, 0.5),
        transparent 80%
      );
    }
  }
  &__arrow--right { 
    right: 0;
    width: calc(28.9rem + 5rem);
    background: linear-gradient(
      to left,
      rgba(127, 163, 202, 0.3),
      transparent 80%
    );
    justify-content: flex-start;
    padding-left: 1rem;

    &:hover {
      background: linear-gradient(
        to left,
        rgba(127, 163, 202, 0.5),
        transparent 80%
      );
    }
  }

  &__arrow-icon {
    width: 35px;
    height: 40px;
    object-fit: contain;
  }

  &__wrapper {
    width: 900px;
    overflow: visible;
    margin: 0 1rem;
  }

  &__track {
    display: flex;
    gap: 20px;
  }
}

.banner__card {
  width: 900px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: 0.5;
  transition: opacity 0.5s ease;

  &--current {
    opacity: 1;

    .banner__card-info {
      display: block;
    }
  }

  &:not(.banner__card--current) {
    .banner__card-info {
      display: none;
    }
  }
}

.banner__image {
  width: 900px;
  height: 340px;
  object-fit: cover;
  border-radius: 0.5rem;
}

.banner__card-info {
  margin-top: 3rem;
  text-align: center;
}

.banner__card-title {
  color: $color-additional;
  margin-bottom: 0.5rem;
}
</style>
