<template>
    <div class="default-layout">
      <Header></Header>
      <main><router-view/></main>
      <ScrollToTop />
      <Footer></Footer>
    </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import ScrollToTop from '@/components/ScrollToTop.vue'

export default {
  name: 'DefaultLayout',
  components: {
    Header,
    Footer,
    ScrollToTop
  }
};
</script>
