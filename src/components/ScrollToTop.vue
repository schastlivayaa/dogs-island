<template>
  <button
    v-show="visible"
    @click="scrollToTop"
    class="scroll-to-top"
    aria-label="Scroll to top"
  >
    <img
      src="@/assets/images/arrow-top.svg"
      alt="Scroll to top"
      class="scroll-to-top__icon"
    />
  </button>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const visible = ref(false)

function handleScroll() {
  visible.value = window.pageYOffset > 100
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped lang="scss">
@use '@/assets/styles/abstracts/constants' as *;

.scroll-to-top {
    position: fixed;
    bottom: 3rem;
    right: 3rem;
    width: 60px;
    height: 60px;
    border: none;
    border-radius: 50%;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
    background-color: $color-light;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;

  &__icon {
    width: 35px;
    height: 40px;
    object-fit: contain;
  }
}
</style>
