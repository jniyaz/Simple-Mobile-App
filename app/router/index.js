import Vue from 'nativescript-vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import Home from './components/Home';
import Reddit from './components/Reddit';

const router = new VewRouter({
    pageRouting: true,
    routes: [
        {
            path: '/home',
            component: Home,
            meta: {
                title: 'Home'
            }
        },
        {
            path: '/reddit',
            component: Reddit,
            meta: {
                title: 'Reddit'
            }
        },
        {path: '*', redirect: '/home'}
    ],
});

router.replace('/home');
module.exports = router;
