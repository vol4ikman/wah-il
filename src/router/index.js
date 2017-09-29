/* jshint esversion: 6 */

import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/components/Hello';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Pro from '@/components/Pro';

Vue.use(Router);

export default new Router({
    //mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Hello',
            component: Hello
        },
        {
            path: '/about',
            name: 'About',
            component: About
        },
        {
            path: '/contact',
            name: 'Contact',
            component: Contact
        },
        {
            path: '/pro',
            name: 'Pro',
            component: Pro
        }
    ]
});
