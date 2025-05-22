<template>
  <div class="filter__container">
    <div class="filter__list">
      <button
        v-for="tag in tags"
        :key="tag.slug"
        :class="['filter__btn btn caption-small', { active: tag.slug === modelValue } ]"
        @click="toggle(tag.slug)"
      >
        {{ tag.title }}
      </button>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  tags: {
    type: Array,
    required: true
  },
  // Текущий выбранный slug (v-model)
  modelValue: {
    type: String,
    default: null
  }
})

const emit = defineEmits(['update:modelValue'])

function toggle(slug) {
  const next = props.modelValue === slug ? null : slug
  emit('update:modelValue', next)
}
</script>

<style scoped lang="scss">
@use '@/assets/styles/abstracts/constants' as *;

.filter {
  &__list {
    padding: 2rem 20rem;
    text-align: center;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 15px;
  }
}
</style>