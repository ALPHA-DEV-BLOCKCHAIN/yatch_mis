import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index';

// Vuetify
import 'vuetify/styles';
import 'vuetify/dist/vuetify.min.css';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
// import { VDataTable } from 'vuetify/labs/components';
import { loadFonts } from './plugins/webfontloader';

loadFonts()

//icons
import { mdi, aliases } from 'vuetify/iconsets/mdi';
// import '@mdi/js'; 

import '@mdi/font/css/materialdesignicons.css'; 
import 'material-design-icons-iconfont/dist/material-design-icons.css';

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
    iconfont: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  },
});

createApp(App)
  // .component('VDataTable', VDataTable)
  .use(router)
  .use(vuetify)
  .mount('#app');
