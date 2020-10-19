import Vue from 'vue';

// BS4
import 'bootstrap';
import { $ } from 'jquery';

// VueAxios
import axios from 'axios';
import VueAxios from 'vue-axios';

// VeeValidate
import {
  extend,
  configure,
  ValidationProvider,
  ValidationObserver,
} from 'vee-validate';
import * as rules from 'vee-validate/dist/rules';
import { messages } from 'vee-validate/dist/locale/zh_TW.json';

// VueSweetalert2
import VueSweetalert2 from 'vue-sweetalert2';

// AOS
import AOS from 'aos';
import 'aos/dist/aos.css';

// VueLodingOverlay
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';

import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import Pagination from '@/components/Pagination.vue';
import Topbtn from '@/components/Topbtn.vue';

import App from './App.vue';
import router from './router';
import store from './store';

// VueAxios
Vue.use(VueAxios, axios);

// VeeValidate
Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);

Object.keys(rules).forEach((rule) => {
  extend(rule, {
    ...rules[rule],
    message: messages[rule],
  });
});

configure({
  classes: {
    valid: 'is-valid',
    invalid: 'is-invalid',
  },
});

// VueSweetalert2
Vue.use(VueSweetalert2);

// Aos
AOS.init();

// VueLoadingOverlay
Vue.component('Loading', Loading);

Vue.component('Header', Header);
Vue.component('Footer', Footer);
Vue.component('Pagination', Pagination);
Vue.component('Topbtn', Topbtn);

// jQuery
window.$ = $;

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
