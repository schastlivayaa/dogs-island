<template>
    <header>
        <section class="header_content">
            <LogoTitle />
            <MainMenu />
        </section>
    </header>
</template>

<script>
import LogoTitle from "./LogoTitle.vue";
import MainMenu from './MainMenu.vue';

export default {
    name: 'Header',
    components: { 
        LogoTitle,
        MainMenu
    }
};
</script>