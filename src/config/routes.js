import Vue from 'vue'
import Layout from '../public/layout'

export default [{
        path: '/',
        // redirect: '/index',
        component: resolve => { require(['../pages/index.vue'], resolve); }
    },
    // {
    //     path: '*',
    //     component: resolve => { require(['../pages/index.vue'], resolve); }
    // },
    {
        path: '/index',
        component: resolve => { require(['../pages/index.vue'], resolve); }
    },     
    {
        path: '/ordermanagement',
        component: resolve => { require(['../pages/uc/OrderManagement.vue'], resolve); },
        children: [
        ]
    },

    {
        path: '/membercenter',
        component: resolve => { require(['../pages/uc/MemberCenter.vue'], resolve); },
        children: [{
                path: '',
                component: resolve => { require(['../pages/uc/MemberCenter.vue'], resolve); }
            }
        ]
    },
    {
        path: '/login',
        component: resolve => { require(['../pages/uc/Login.vue'], resolve); }
    },
    {
        path: '/register',
        component: resolve => { require(['../pages/uc/Register.vue'], resolve); }
    }

];