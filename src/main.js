import { createApp } from 'vue';
import 'bootstrap';
import App from './App.vue';
import router from './router';
import store from './store';
import TableComponent from 'vue-table-component';

createApp(App)
  .use(store)
  .use(TableComponent)
  .use(router)
  .mount('#app');
