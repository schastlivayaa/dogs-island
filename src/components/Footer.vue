<template>
    <footer class="footer">
        <div class="footer__content">
            <!-- Subscribe Section -->
            <div class="footer__subscribe">
                <div class="footer__subscribe-item">
                    <h3 class="footer__subscribe-title">ПОДПИСАТЬСЯ НА ЖУРНАЛ</h3>
                    <button class="btn btn_bordered caption">подписаться</button>
                </div>
                <div class="footer__subscribe-item">
                    <h3 class="footer__subscribe-title">ПОДПИСАТЬСЯ НА РАССЫЛКУ</h3>
                    <input 
                      type="email"
                      v-model="email"
                      class="footer__subscribe-input caption"
                      placeholder="Введите Ваш email"
                      aria-label="E-mail для рассылки"
                      required
                    />
                    <button class="btn btn_bordered caption">подписаться</button>
                    <p class="ultra-small">
                        Подписываясь на рассылку, я соглашаюсь с правилами обработки персональных данных в соответствии с Политикой конфиденциальности
                    </p>
                </div>
            </div>

            <!-- Main Footer Content -->
            <div class="footer__main">
                <h3 class="footer__title">СОБАЧИЙ ОСТРОВ | DOG`S ISLAND</h3>

                <!-- Social Icons -->
                <div class="footer__social">
                    <a href="#" class="footer__social-link">
                        <img src="@/assets/images/tg_white.svg" alt="Telegram">
                    </a>
                    <a href="#" class="footer__social-link">
                        <img src="@/assets/images/vk_white.svg" alt="VK">
                    </a>
                    <a href="#" class="footer__social-link">
                        <img src="@/assets/images/R_white.svg" alt="R">
                    </a>
                </div>

                <!-- Navigation Columns -->
                <div class="footer__nav">
                    <div class="footer__column caption">
                        <p class="footer__column-title">6+</p>
                    </div>

                    <div class="footer__column caption">
                        <p class="footer__column-title">Собачий Остров</p>
                        <ul class="footer__list">
                            <li><RouterLink to="/articles">Статьи</RouterLink></li>
                            <li><RouterLink to="/events">События</RouterLink></li>
                            <li><RouterLink to="/journal">Журнал</RouterLink></li>
                            <li><RouterLink to="/education">Просвещение</RouterLink></li>
                            <li><RouterLink to="/cooperation">Сотрудничество</RouterLink></li>
                            <li><RouterLink to="/about">О нас</RouterLink></li>
                            <li><RouterLink to="/contacts">Контакты</RouterLink></li>
                        </ul>
                    </div>

                    <div class="footer__column caption">
                        <p class="footer__column-title">Редакция</p>
                        <ul class="footer__list">
                            <li><RouterLink to="/about">О проекте</RouterLink></li>
                            <li><RouterLink to="/advertising">Рекламодателям</RouterLink></li>
                            <li><RouterLink to="/cooperation">Сотрудничество</RouterLink></li>
                            <li><RouterLink to="/subscription">Подписка</RouterLink></li>
                            <li><RouterLink to="/contacts">Контакты</RouterLink></li>
                        </ul>
                    </div>
                    
                    <div class="footer__column caption footer__column--wide">
                        <p class="footer__column-title"><RouterLink to="policy">Политика конфиденциальности</RouterLink></p>
                    </div>
                </div>
            </div>

            <!-- Bottom Copyright -->
            <div class="footer__bottom caption-small">
                <p>
                    Собачий остров / Dog's Island». Номер свидетельства ПИ № ТУ 78 – 02319. Учредитель и главный редактор: София Дудова. Использование материалов журнала «Собачий остров / Dog's Island» возможно только с разрешения редакции, при цитировании ссылка на журнал обязательна. © Журнал «Собачий остров / Dog's Island» 2003 – 2025. Все права защищены.
                </p>
            </div>
        </div>
    </footer>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style lang="scss" scoped>
@use '@/assets/styles/abstracts/constants' as *;

.footer {
    background-color: $color-primary;
    color: $color-light;

    &__content {
        max-width: 1920px;
        width: 100%;
        margin: 0 auto;
    }

    &__subscribe {
        display: flex;
        flex-wrap: wrap;
        gap: 2rem;
        padding: 2.5rem 12rem;

        &-item {
            background: $color-light;
            color: $color-dark;
            margin: 0 auto;
            flex: 1 1 200px;
            min-width: 200px;
            padding: 2rem 4rem;
            text-align: center;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 1rem;

            @media (max-width: 790px) {
                flex: 1 1 100%;
                min-width: auto;
                max-width: 400px;
            }
        }

        &-title {
            color: $color-additional;
            text-transform: uppercase;
        }

        &-input {
        width: 100%;
        max-width: 400px;
        padding: 0.75rem 1rem;
        border: 1px solid #cccccc;
        //margin-bottom: 1rem;

        &::placeholder {
            color: #999999;
            font-style: italic;
            opacity: 1; /* override default opacity */
            font-size: 2.2rem;
        }
        }
    }

    &__title {
        color: $color-additional;
        text-align: center;
        text-transform: uppercase;
    }

    &__social {
        display: flex;
        gap: 1rem;
        justify-content: center;
        padding: 2rem 0;

        &-link {
        display: inline-block;
        width: 3rem;
        height: 3rem;

        img {
            width: 100%;
            height: auto;
        }
        }
    }

    &__main {
        padding: 2rem 12rem;

        // @media (max-width: 790px) {
        // padding: 2rem 1rem;
        // }
    }

    &__nav {
        display: flex;
        justify-content: space-between;
        max-width: 90%;
        margin: 0 auto;

        // @media (max-width: 790px) {
        //     flex-direction: column;
        //     align-items: center;
        //     gap: 2rem;
        // }
    }

    &__column-title {
        margin-bottom: 1rem;
    }

    &__list {
        li {
            margin-bottom: 0.5rem;
            a {
                &:hover {
                    text-decoration: underline;
                }
            }
        }
    }

    &__bottom {
        border-top: 2px solid $color-medium;
        padding: 2rem 12rem;


    }
}
</style>
