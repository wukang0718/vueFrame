export default {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "Login" */"../../views/Login"),
    meta: {
        login: true
    }
};
