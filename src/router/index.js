import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'main',
        component: () => import('@/views/forUser/Main.vue'),
    },
    {
        path: '/our_fleet',
        name: 'ourFleet',
        component: () => import('@/views/forUser/ourFleet.vue'),
    },
    {
        path: '/routes',
        name: 'routes',
        component: () => import('@/views/forUser/Routes.vue'),
    },
    {
        path: '/routes/:id',
        name: 'routes',
        component: () => import('@/views/forUser/routeDetailPage.vue'),
    },
    {
        path: '/transportation_rules',
        name: 'transportationRules',
        component: () => import('@/views/forUser/transportationRules.vue'),
    },
    {
        path: '/irregular_transportation',
        name: 'irrgularTransportation',
        component: () => import('@/views/forUser/irregularTransportation.vue'),
    },
    {
        path: '/contact',
        name: 'contact',
        component: () => import('@/views/forUser/Contact.vue'),
    },
    {
        path: '/admin',
        name: 'admin',
        component: () => import('@/views/forAdmin/Main.vue'),
    }

];
const router = new VueRouter({
    mode: 'history',
    routes,
});

export default router;