export default {
    path: 'content',
    name: 'content',
    component: () => import(/* webpackChunkName: "content" */"../../views/content")
};
