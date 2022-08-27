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
    {
        path: '/routes',
        name: 'routes',
        component: () => import('@/views/Routes.vue'),
    },
    {
        path: '/routes/:id',
        name: 'routes',
        component: () => import('@/views/routeDetailPage.vue'),
    },
    {
        path: '/transportation_rules',
        name: 'main',
        component: () => import('@/views/transportationRules.vue'),
    },
];
const router = new VueRouter({
    mode: 'history',
    routes,
});

export default router;