import Vue from 'vue';
import iView from 'iview';
import locale from 'iview/dist/locale/en-US';

import App from './App.vue';

Vue.use(iView, { locale });

new Vue({
  el: '#app',
  render: h => h(App),
});
