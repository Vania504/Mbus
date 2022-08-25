import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'main',
        component: () => import('@/views/Main.vue'),
    },
    {
        path: '/our_fleet',
        name: 'main',
        component: () => import('@/views/ourFleet.vue'),
    },
];
const router = new VueRouter({
    mode: 'history',
    routes,
});

export default router;