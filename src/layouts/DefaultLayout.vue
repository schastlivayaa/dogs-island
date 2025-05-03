<template>
    <div class="default-layout">
      <Header/>
      <main><router-view/></main>
      <Footer/>
    </div>
</template>

<script>
import Header from '@/components/Header/Header.vue';
import Footer from '@/components/Footer/Footer.vue';

export default {
  name: 'DefaultLayout',
  components: {
    Header,
    Footer
  }
};
</script>
