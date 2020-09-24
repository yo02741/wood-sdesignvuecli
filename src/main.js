import Vue from 'vue';

// BS4
import 'bootstrap';
import { $ } from 'jquery';

// fontAwesome
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faFacebook,
  faInstagram,
  faGithub,
  faCodepen,
} from '@fortawesome/free-brands-svg-icons';
import {
  faTrashAlt,
  faUserCircle,
  faShoppingCart,
  faCheck,
  faAngleRight,
  faAngleLeft,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// VueLodingOverlay
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';

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

// pagination
import pagination from '@/components/pagination.vue';

import App from './App.vue';
import router from './router';
// Own CSS
import '@/assets/css/all.css';

// FontAwesome
// eslint-disable-next-line max-len
library.add(faFacebook, faInstagram, faGithub, faCodepen, faTrashAlt, faUserCircle, faShoppingCart, faCheck, faAngleRight, faAngleLeft);
Vue.component('font-awesome-icon', FontAwesomeIcon);

// VueLoadingOverlay
Vue.component('Loading', Loading);

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

// pagination
Vue.component('pagination', pagination);

// jQuery
window.$ = $;

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
