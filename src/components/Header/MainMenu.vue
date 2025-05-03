<template>
    <div class="main-menu">
        <nav class="main-menu__nav">
            <ul class="main-menu__list">
                <li class="main-menu__item paragraph">Статьи</li>
                <li class="main-menu__item paragraph">События</li>
                <li class="main-menu__item paragraph">Журнал</li>
                <li class="main-menu__item paragraph">Просвещение</li>
                <li class="main-menu__item paragraph">Сотрудничество</li>
                <li class="main-menu__item paragraph">О нас</li>
                <li class="main-menu__item paragraph">Контакты</li>
            </ul>
        </nav>
        <HeaderActions />
    </div>
</template>

<script>
import HeaderActions from './HeaderActions.vue';

export default {
    name: 'MainMenu',
    components: { 
        HeaderActions
    }
};
</script>