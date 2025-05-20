<template>
    <header class="header">
        <div class="header__content">
            <!-- Logo and Title -->
            <RouterLink to="/" class="header__logo">
                <img 
                    src="@/assets/images/logo.svg" 
                    alt="Dog's Island Logo" 
                    class="header__logo-image"
                >
                <h1 class="header__logo-title">СОБАЧИЙ ОСТРОВ | DOG'S ISLAND</h1>
            </RouterLink>

            <!-- Burger Toggle -->
            <div 
              :class="['header__burger', { 'header__burger--open': mobileOpen }]" 
              @click="toggleMobileMenu" 
            >
                <span class="header__burger-span"></span>
                <span class="header__burger-span"></span>
            </div>

            <!-- Main Navigation -->
            <div :class="['header__menu', { 'header__menu--open': mobileOpen }]">
                <nav class="header__nav">
                    <ul class="header__nav-list">
                        <li 
                          class="header__nav-item paragraph"
                          v-for="item in menu.items"
                          :key="item.path"
                          @mouseenter="!mobileOpen && openDropdown(item.path)"
                          @mouseleave="!mobileOpen && closeDropdown()"
                        >
                            <div class="header__nav-link-wrap">
                                <RouterLink
                                  :to="item.path"
                                  class="header__nav-link"
                                  :class="{ 'header__nav-link--active': menu.activePath === item.path }"
                                  @click="select(item.path)"
                                >
                                    {{ item.title }}
                                </RouterLink>
                                <button
                                  v-if="item.children && mobileOpen"
                                  class="header__dropdown-toggle"
                                  @click="toggleDropdown(item.path)"
                                  aria-label="Toggle submenu"
                                >
                                    ▼
                                </button>
                            </div>

                            <ul
                              v-if="item.children && dropdown === item.path"
                              class="header__dropdown caption-small"
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
        </div>
    </header>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useMenuStore } from '@/stores/menuStore'

const menu = useMenuStore()
const dropdown = ref(null)
const mobileOpen = ref(false)

watch(mobileOpen, (isOpen) => {
  document.body.classList.toggle('no-scroll', isOpen)
})

function openDropdown(path) {
  dropdown.value = path
}

function closeDropdown() {
  dropdown.value = null
}

function select(path) {
  menu.setActive(path)
  dropdown.value = null
  if (mobileOpen.value) mobileOpen.value = false
}

function toggleDropdown(path) {
  dropdown.value = dropdown.value === path ? null : path
}

function toggleMobileMenu() {
  mobileOpen.value = !mobileOpen.value
  if (!mobileOpen.value) dropdown.value = null
}
</script>

<style lang="scss" scoped>
@use '@/assets/styles/abstracts/constants' as *;

:global(body.no-scroll) {
  overflow: hidden;
}

.header {
    &__content {
        padding: 1rem 12rem;
        max-width: 1920px;
        width: 100%;
        margin: 0 auto;
        position: relative;

        @media (max-width: 790px) {
            padding: 1rem;
        }
    }

    &__logo {
        display: flex;
        align-items: center;
        justify-content: center;

        @media (max-width: 790px) {
            width: 100%;
            justify-content: flex-start;
        }
        
        &-image {
            margin-right: 2.4rem;
            height: auto;

            @media (max-width: 1605px) {
                width: 14rem;
            }
            @media (max-width: 1320px) {
                width: 12rem;
            }
            @media (max-width: 790px) {
                width: 10rem;
            }
        }
    }

    &__burger {
        display: none;
        position: absolute;
        top: 1rem;
        right: 1rem;
        width: 40px;
        height: 40px;
        padding: 10px;
        cursor: pointer;
        flex-direction: column;
        gap: 8px;
        z-index: 101;
        //transition: all 0.3s ease;

        @media (max-width: 790px) {
            display: flex;
        }

        &-span {
            display: block;
            width: 100%;
            height: 2px;
            background: $color-dark;
            transition: transform 0.3s ease;
        }

        &--open{
            .header__burger-span:nth-child(1) {
                transform: translateY(5px) rotate(45deg);
            }
            .header__burger-span:nth-child(2) {
                transform: translateY(-5px) rotate(-45deg);
            }
        }        
    }

    &__menu {
        display: flex;
        justify-content: space-between;
        padding-top: 3rem;

        // @media (max-width: 790px) {
        //     display: none;

        //     &--open {
        //         display: block;
        //         position: absolute;
        //         top: 0;
        //         left: 0;
        //         width: 100vw;
        //         height: 100vh;
        //         background: $color-light;
        //         padding: 5rem 1rem 1rem;
        //         overflow-y: auto;
        //         box-sizing: border-box;
        //         z-index: 100;

        //         .header__nav-link {
        //             font-size: 3rem;
        //         }
        //     }
        // }
        @media (max-width: 790px) {
            /* Always present but hidden via opacity/visibility */
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            background: $color-light;
            padding: 5rem 1rem 1rem;
            overflow-y: auto;
            box-sizing: border-box;
            z-index: 100;
            opacity: 0;
            visibility: hidden;
            transition: opacity 0.3s ease;

            &--open {
                opacity: 1;
                visibility: visible;

                /* Increase font size in mobile menu */
                .header__nav-link {
                    font-size: 4rem;
                }
                .header__dropdown-link {
                    font-size: 3rem;
                }
            }
        }
    }

    &__nav {
        width: 85%;

        &-list {
            display: flex;
            justify-content: space-between;

            @media (max-width: 790px) {
                flex-direction: column;
                gap: 2rem;
            }
        }

        &-item {
            position: relative;
        }
    }

    &__nav-link-wrap {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    &__dropdown-toggle {
        display: none;
        background: none;
        border: none;
        cursor: pointer;
        font-size: 1rem;

        @media (max-width: 790px) {
            display: inline-block;
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

        @media (max-width: 790px) {
            position: static;
            padding: 1rem 0 0 2rem;
        }

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
    }

    &__icon {
        display: flex;
        align-items: center;
        gap: 0.7rem;

        &-btn {
            padding: 1.5rem;
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;
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