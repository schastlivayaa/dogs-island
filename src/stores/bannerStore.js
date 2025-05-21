import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useBannerStore = defineStore('banner', () => {
  // State
  const slides = ref([])
  const currentIndex = ref(0)

  // Getter
  const currentSlide = computed(() => slides.value[currentIndex.value] || {})

  // Actions
  async function loadSlides() {
    const data = await import('@/assets/data/banner.json')
    slides.value = data.default
  }

  function next() {
    if (!slides.value.length) return
    currentIndex.value = (currentIndex.value + 1) % slides.value.length
  }

  function prev() {
    if (!slides.value.length) return
    currentIndex.value = (currentIndex.value - 1 + slides.value.length) % slides.value.length
  }

  function set(index) {
    if (index >= 0 && index < slides.value.length) {
      currentIndex.value = index
    }
  }

  return {
    slides,
    currentIndex,
    currentSlide,
    loadSlides,
    next,
    prev,
    set,
  }
})
