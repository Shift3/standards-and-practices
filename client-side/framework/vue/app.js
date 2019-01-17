import VueRouter from 'vue-router';
import Vuex from 'vuex';
import router from './routes';

require('./bootstrap');

window.Vue = require('vue');

Vue.use(VueRouter)
Vue.use(Vuex)

Vue.component('example', require('./components/Example.vue'));

const store = new Vuex.Store({
    state: {

    },
    mutations: {

    }
})

const app = new Vue({
    el: '#app',

    store,
    router,

    data:{


    },

    computed:{

    },

    methods: {

    }




});