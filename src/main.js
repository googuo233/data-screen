import { ConfigProvider } from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;
Vue.use(ConfigProvider);

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app');
