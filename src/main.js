import Vue from 'vue'
import 'vuetify/dist/vuetify.min.css'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import Vuetify from 'vuetify'
import VTextField from 'vuetify'
Vue.config.productionTip = false;

Vue.use(Vuetify);
Vue.use(VTextField);


new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
