import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from './Login';
import Content from './Content';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'home',
        redirect: '/login',
        component: () => import(/* webpackChunkName: "Home" */"../views/Home"),
        meta: {
            login: true
        },
        children: [
            Content
        ]
    },
    Login
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router;
