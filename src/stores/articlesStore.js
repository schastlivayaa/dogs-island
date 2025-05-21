import { defineStore } from 'pinia'

export const useArticlesStore = defineStore('articles', {
  state: () => ({
    all: [],      // после fetch сюда попадут все статьи
    page: 1,
    perPage: 12
  }),
  getters: {
    paged(state) {
      const end = state.page * state.perPage
      return state.all.slice(0, end)
    },
    hasMore(state) {
      return state.page * state.perPage < state.all.length
    }
  },
  actions: {
    // Вызываем при инициализации — подгрузить JSON
    async init() {
      try {
        const res = await fetch('/data/articles.json')
        if (!res.ok) throw new Error('Cannot load articles.json')
        this.all = await res.json()
      } catch (e) {
        console.error(e)
        this.all = []
      }
    },
    loadMore() {
      if (this.hasMore) {
        this.page++
      }
    },
    reset() {
      this.page = 1
    }
  }
})
