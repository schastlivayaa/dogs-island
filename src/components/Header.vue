<template>
    <header class="header">
        <section :class="['header__content', { 'header__content--mobile-open': mobileOpen }]">
            <!-- Logo and Title -->
            <div class="header__logo">
                <RouterLink to="/" class="header__logo-link">
                    <img 
                      src="@/assets/images/logo.svg" 
                      alt="Dog's Island Logo" 
                      class="header__logo-image"
                    >
                    <h1 class="header__logo-title">СОБАЧИЙ ОСТРОВ | DOG'S ISLAND</h1>
                </RouterLink>
            </div>

            <!-- Burger Button for Mobile -->
            <button
                :class="['header__burger-btn', { 'header__burger-btn--open': mobileOpen } ]"
                aria-label="Toggle menu"
                @click="toggleMobileMenu"
            >
                <span class="header__burger-line header__burger-line--top"></span>
                <span class="header__burger-line header__burger-line--middle"></span>
                <span class="header__burger-line header__burger-line--bottom"></span>
            </button>

            <!-- Main Navigation -->
            <div class="header__menu" :class="{ 'header__menu--open': mobileOpen }">
                <nav :class="['header__nav', { 'header__nav--open': mobileOpen }]">
                    <ul class="header__nav-list">
                        <li 
                          class="header__nav-item paragraph"
                          v-for="item in menu.items"
                          :key="item.path"
                          @mouseenter="openDropdown(item.path)"
                          @mouseleave="closeDropdown"
                        >
                            <RouterLink
                              :to="item.path"
                              class="header__nav-link"
                              :class="{ 'header__nav-link--active': menu.activePath === item.path }"
                              @click="select(item.path)"
                            >
                                {{ item.title }}
                            </RouterLink>

                            <ul
                              v-if="item.children"
                              class="header__dropdown caption-small"
                              v-show="dropdown === item.path"
                            >
                                <li 
                                  v-for="child in item.children" 
                                  :key="child.path"
                                  class="header__dropdown-item"
                                >
                                    <RouterLink
                                      :to="child.path"
                                      class="header__dropdown-link"
                                      :class="{ 'header__dropdown-link--active': menu.activePath === child.path }"
                                      @click="select(child.path)"
                                    >
                                        {{ child.title }}
                                    </RouterLink>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </nav>
                
                <!-- Utility Icons -->
                <div class="header__icon">
                    <button class="header__icon-btn header__icon-btn--search" aria-label="Search"></button>
                    <button class="header__icon-btn header__icon-btn--vk" aria-label="VK"></button>
                    <button class="header__icon-btn header__icon-btn--telegram" aria-label="Telegram"></button>
                    <button class="header__icon-btn header__icon-btn--mail" aria-label="Mailing"></button>
                    <button class="header__icon-btn header__icon-btn--phone" aria-label="Mobile app"></button>
                </div>
            </div>
        </section>
    </header>
</template>

<script setup>
import { ref } from 'vue'
import { useMenuStore } from '@/stores/menuStore'
import { useRouter } from 'vue-router'

const menu = useMenuStore()
const dropdown = ref(null)
const mobileOpen = ref(false)
const router = useRouter()

function openDropdown(path) {
  if (!mobileOpen.value) dropdown.value = path
}

function closeDropdown() {
  dropdown.value = null
}

function select(path) {
  menu.setActive(path)
  dropdown.value = null
  mobileOpen.value = false
}

function toggleMobileMenu() {
  mobileOpen.value = !mobileOpen.value
}
</script>

<style lang="scss" scoped>
// добавь адаптивности. на 1440px сайт должен выглядеть также, просто текст должен стать меньше. на 768 сделай бургер меню
@use '@/assets/styles/abstracts/constants' as *;

.header {
    &__content {
        padding: 3rem 12rem;
        max-width: 1920px;
        width: 100%;

        &--mobile-open {
            background: rgba(245, 250, 255, 0.95);
        }

        @media (max-width: 768px) {
            //padding: 1.5rem 8rem;
            flex-direction: column;
            align-items: stretch;
            padding: 1rem;
        }
    }

    &__logo {
        &-link {
            display: flex;
            align-items: center;
            justify-content: center;

            @media (max-width: 768px) {
                justify-content: space-between;
                width: 100%;
            }
        }
        
        &-image {
            margin-right: 2.4rem;
            height: auto;

            @media (max-width: 1440px) {
                width: 10rem;
            }

            @media (max-width: 768px) {
                width: 5rem;
            }
        }

        &-title {
            @media (max-width: 1440px) {
                font-size: 9rem;
            }

            @media (max-width: 768px) {
                font-size: 5rem;
            }
        }

        &-title:hover {
            color: $color-additional;
        }
    }

    &__burger-btn {
        display: none;
        background: none;
        border: none;
        padding: 0;
        width: 2.5rem;
        height: 2.5rem;
        cursor: pointer;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;

        @media (max-width: 768px) {
            display: flex;
            position: absolute;
            top: 1rem;
            right: 1rem;
        }

        &--open .header__burger-line--top {
            transform: translateY(0.5rem) rotate(45deg);
        }
        &--open .header__burger-line--middle {
            opacity: 0;
        }
        &--open .header__burger-line--bottom {
            transform: translateY(-0.5rem) rotate(-45deg);
        }
    }

    &__burger-line {
        display: block;
        width: 2rem;
        height: 0.2rem;
        background: $color-dark;
        border-radius: 1px;
        transition: transform 0.3s ease, opacity 0.3s ease;
    }

    &__menu {
        display: flex;
        justify-content: space-between;
        padding-top: 4rem;

        &--open {
            @media (max-width: 768px) {
                display: block;
            }
        }

        @media (max-width: 768px) {
            display: none;
        }
    }

    &__nav {
        width: 85%;
        &-list {
            display: flex;
            justify-content: space-between;
        }

        &--open {
            @media (max-width: 768px) {
                display: block;
                background: $color-light;
                position: absolute;
                top: 4rem;
                left: 0;
                width: 100%;
                padding: 1rem;
            }
        }

        @media (max-width: 768px) {
            display: none;

            &-list {
                flex-direction: column;
                gap: 1rem;
            }
        }

        &-item {
            position: relative;

            // &--active {
            //     font-weight: 600;
            // }
        }
    }

    &__dropdown {
        position: absolute;
        top: 100%;
        left: 0;
        background: $color-light;
        color: $color-dark;
        padding: 1rem;
        padding-left: 3rem;
        list-style: disc;

        &-item {
            padding: 0.5rem;

            // &::before {
            //     content: '•';
            //     margin-right: 0.5rem;
            //     line-height: 1.2;
            //     flex-shrink: 0;
            //     color: $color-dark;
            // }

            &:hover {
                color: $color-additional;
            }
        }

        &-link {
            white-space: nowrap;

            // &--active {
            //     font-weight: 600;
            // }
        }

        @media (max-width: 768px) {
            position: static;
            padding-left: 1rem;
        }
    }

    &__icon {
        display: flex;
        align-items: center;
        gap: 0.7rem;

        @media (max-width: 768px) {
            margin-top: 1rem;
            justify-content: center;
        }

        &-btn {
            height: 3rem;
            width: 3rem;
            background-repeat: no-repeat;
            background-position: center;
            border: none;
            cursor: pointer;
            
            &--search {
                background-image: url('@/assets/images/search.svg');
            }

            &--vk {
                background-image: url('@/assets/images/vk_black.svg');
            }

            &--telegram {
                background-image: url('@/assets/images/tg_black.svg');
            }

            &--mail {
                background-image: url('@/assets/images/mail.svg');
            }

            &--phone {
                background-image: url('@/assets/images/phone.svg');
            }
        }
    }
}

</style>