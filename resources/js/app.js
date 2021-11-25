require('./bootstrap');

window.Vue = require('vue').default;

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

//Vue.component('example-component', require('./components/ExampleComponent.vue').default);

Vue.component('empresa', require('./components/empresa.vue').default);
/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */
import vue from 'vue';
window.Vue=vue;
import App from './components/App.vue';
import VueAxios from 'vue-axios';
import axios from 'axios';
import Vue from 'vue';
import VueRouter from 'vue-router';
import {routes} from './routes';

Vue.use(VueRouter);
Vue.use(VueAxios, axios);

const app = new Vue({
    el: '#app',
    router: 'history',
    render: h => h(App),
});

const router=new Vue({
    mode: 'history',
    routes: routes
});
