import { createRouter, createWebHistory } from 'vue-router';

import HomePage from '@/pages/HomePage.vue';
import ArticlesPage from '@/pages/ArticlesPage.vue';
import EventsPage from '@/pages/EventsPage.vue';
import JournalPage from '@/pages/JournalPage.vue';
import EducationPage from '@/pages/EducationPage.vue';
import CoopPage from '@/pages/CoopPage.vue';
import AboutPage from '@/pages/AboutPage.vue';
import ContactsPage from '@/pages/ContactsPage.vue';

import ArticleDetails from '@/pages/ArticleDetails.vue';
import AuthorPage from '@/pages/AuthorPage.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/articles',
    name: 'Articles',
    component: ArticlesPage
  },
  {
    path: '/articles/:id',
    name: 'ArticleDetail',
    component: ArticleDetails,
    props: true
  },
  {
    path: '/events',
    name: 'Events',
    component: EventsPage
  },
  {
    path: '/author/:author',
    name: 'AuthorPage',
    component: AuthorPage,
    props: true
  },
  {
    path: '/journal',
    name: 'Journal',
    component: JournalPage
  },
  {
    path: '/education',
    name: 'Education',
    component: EducationPage
  },
  {
    path: '/cooperation',
    name: 'Coop',
    component: CoopPage
  },
  {
    path: '/about',
    name: 'About',
    component: AboutPage
  },
  {
    path: '/contacts',
    name: 'Contacts',
    component: ContactsPage
  }
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    } 
    return savedPosition || { top: 0 }
  }
})