<template>
    <v-navigation-drawer v-model="drawer" color="blue" dark app class="red darken-4">
      <v-layout column align-center>
          <v-flex class="my-2 mx-auto text-center">
              <v-avatar size="100">
                  <v-img src="/img1.png"></v-img>
              </v-avatar>
              <p class="white--text subheading mt-1 text-center">Username</p>
              <Popup/>
          </v-flex>
      </v-layout>
      <v-list flat>
        <v-list-item v-for="link in links" :key="link.text" router :to="link.route" active-class="border">
          <!-- <v-list-item-action>
          </v-list-item-action> -->
          <v-list-item-content class="d-flex align-center">
            <v-icon>{{ link.icon }}</v-icon>
            <span class="ml-2">{{ link.text }}</span>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <!-- <v-app> -->
        <v-app-bar color="blue" dark app>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title class="text-uppercase">
          <span class="font-weight-light">Yatch MIS</span>          
        </v-toolbar-title>
        <v-spacer></v-spacer>
  
        <v-menu offset-y>
          <template v-slot:activator="{ props }">
            <v-btn text v-bind="props">
              <v-icon left>mdi-chevron-down</v-icon>
              <span>Menu</span>
            </v-btn>
          </template>
          <v-list flat>
            <v-list-item v-for="link in links" :key="link.text" router :to="link.route" active-class="border">
              <v-list-item-title>{{ link.text }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
  
        <v-btn text>
          <span>Exit</span>
          <v-icon right>mdi-exit-to-app</v-icon>
        </v-btn>
      </v-app-bar>
    <!-- </v-app> -->
  </template>
  
  <script>
  import Popup from './PopupView.vue';
  export default {
    data: () => ({
    drawer: true,
    links: [
      { icon: 'mdi-folder', text: 'Deserts', route: '/deserts' },
      { icon: 'mdi-home', text: 'Home', route: '/' },
      { icon: 'mdi-menu', text: 'Designation', route: '/designation' },
      { icon: 'mdi-heart', text: 'Statuses', route: '/statuses' },
      { icon: 'mdi-upload', text: 'Crochets', route: '/crochets'}
    ],
  }),

  components: {
    Popup
  }
};
</script>

<style scoped>
.border {
  border-left: 4px solid #0ba518;
}
</style>