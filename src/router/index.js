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
        name: 'routes_detail_page',
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
        path: '/tickets',
        name: 'ticket_search_page',
        component: () => import('@/views/forUser/ticketSearch.vue'),
    },
    {
        path: '/tickets/booking',
        name: 'ticket_booking',
        component: () => import('@/views/forUser/bookingTicket.vue')
    },
    {
        path: '/edit_profile',
        name: 'editProfile',
        component: () => import('@/components/forUser/editUserProfile.vue')
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
        component: () => import('@/components/forAdmin/Auth/desktop/signIn.vue'),
    },
    {
        path: '/reset_password/:code',
        name: 'reset_password_code',
        component: () => import('@/views/forAdmin/inputNewPassword.vue'),
    },
    {
        path: '/ticket',
        name: 'my_ticket_mobile',
        component: () => import('@/components/forUser/myTicket/myTicketDrawer.vue')
    }
];
const router = new VueRouter({
    mode: 'history',
    routes,
});

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresLogin) && store.getters.loggedUser == null) {
        next({ name: 'main' })
    } else if (to.matched.some(record => record.meta.requiresLogin) && store.getters.loggedUser.role_id == 3) {
        next({ name: 'main' })
    }
    else {
        next();
    }
})

export default router;