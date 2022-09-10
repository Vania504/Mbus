import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '../store';

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
        meta: { requiresLogin: true }
    },
    {
        path: '/login',
        name: 'admin_login',
        component: () => import('@/components/forAdmin/signIn.vue'),
    }

];
const router = new VueRouter({
    mode: 'hash',
    routes,
});

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresLogin) && store.getters.loggedUser == null) {
        next({ name: 'admin_login' })
    }
    else {
        next();
    }
})

export default router;