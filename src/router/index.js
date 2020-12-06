import Vue from "vue";
import VueRouter from "vue-router";
import NEWS from "@/views/NEWS/index.vue";

Vue.use(VueRouter);

const routes = [{
        path: '/',
        name: 'NEWS',
        component: NEWS
    },
    {
        path: '/REVIEWS',
        name: 'REVIEWS',
        component: () =>
            import ( /* webpackChunkName: "profile" */ '../views/REVIEWS'),
    },
    {
        path: '/PHONES',
        name: 'PHONES',
        component: () =>
            import ( /* webpackChunkName: "profile" */ '../views/PHONES'),
    },
    {
        path: '/VIDEOS',
        name: 'VIDEOS',
        component: () =>
            import ( /* webpackChunkName: "profile" */ '../views/VIDEOS'),
    },
    {
        path: '/POSTS',
        name: 'POSTS',
        component: () =>
            import ( /* webpackChunkName: "profile" */ '../views/POSTS'),
    }
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

export default router;