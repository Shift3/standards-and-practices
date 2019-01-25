import VueRouter from 'vue-router';


let routes = [
    {
        path: '/example',
        component: require('./views/Example.vue')
    },

]


export default new VueRouter({
    routes
})