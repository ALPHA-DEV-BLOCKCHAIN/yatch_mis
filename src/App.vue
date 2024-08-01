<template>
  <v-app>
    <NavBar />
    <v-content>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>
    <Footer />
  </v-app>
</template>

<script>
import NavBar from './components/NavBar.vue';
import Footer from './components/FooterSection.vue';

export default {
  components: {
    NavBar,
    Footer
  }
};
</script>