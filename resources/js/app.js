/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

//require('./bootstrap');

//window.Vue = require('vue').default;

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

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */
require('./bootstrap');
import vue from 'vue'
window.Vue = vue;

//Componente importante
import App from './components/App.vue';
import AppEst from './components/Estudiante/AppEst.vue';
import AppAse from './components/ASESOR/AppAse.vue';

//importamos Axios
import VueAxios from 'vue-axios';
import axios from 'axios';

//Importamos y configuramos el Vue-router
import VueRouter from 'vue-router';
import {routes} from './routes';
import {routeEst} from './routeEst';
import {routeAse} from './routeAse';

Vue.use(VueRouter);
Vue.use(VueAxios, axios);

Vue.component("empresa", require('./components/Empresas.vue').default);

const router = new VueRouter({
    mode: 'history',
    routes: routes
});

const routerest = new VueRouter({
    mode: 'history',
    routes: routeEst
});

const routerase = new VueRouter({
    mode: 'history',
    routes: routeAse
});



const app = new Vue({
    el: '#app',
    router: router,
    render: h => h(App),
});
const appest = new Vue({
    el: '#app',
    routerest: routerest,
    render: h => h(AppEst),
});
const appase = new Vue({
    el: '#app',
    routerase: routerase,
    render: h => h(AppAse),
});
