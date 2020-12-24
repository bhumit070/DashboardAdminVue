<template>
  <div class="dashboard-main-wrapper">
    <Header image="image_url" />
    <Aside />
    <div class="dashboard-wrapper">
      <div class="container-fluid dashboard-content">
        <div class="row">
          <router-view />
        </div>
      </div>
      <Footer />
    </div>
  </div>
</template>

<script>
import Header from '@/views/layout/header/Header.vue';
import Aside from '@/views/layout/aside/Aside.vue';
import Footer from '@/views/layout/footer/Footer.vue';
import { isSignedIn } from '../../helper';
export default {
  name: 'Layout',
  components: {
    Footer,
    Header,
    Aside,
  },
  created() {
    if (isSignedIn() === false) {
      this.$router.push('/login');
    }
  },
};
</script>
