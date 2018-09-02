import Vue from 'vue';
import App from './App.vue';
import routes from './config/routes.js';
import store from './config/store.js';
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import VueRouter from 'vue-router';
import Layout from './public/layout';
import api from './config/api';
Vue.use(iView);
Vue.use(VueRouter);

let router = new VueRouter({
   // mode: 'hash',
    routes
});

// Vue.http.interceptors.push((request, next) => {
//     //登录成功后将后台返回的TOKEN在本地存下来,每次请求从sessionStorage中拿到存储的TOKEN值
//     let storeToke = localStorage.getItem('TOKEN');
//     request.headers.set('x-auth-token', storeToke);
//     next((response) => {
//         //登录极验证时需获取后台返回的TOKEN值
//         var xAuthToken = response.headers.get('x-auth-token');
//         if(xAuthToken!=null&&xAuthToken!=''){
//             localStorage.setItem('TOKEN', xAuthToken);
//         }
//         //
//         if (response.body.code == '4000' || response.body.code == '3000') {
//             store.commit('setMember',null);
//             router.push('/login');
//             return false;
//         }
//         return response;
//     });
// });
Vue.config.productionTip = false
new Vue({
    el: '#app',
    router,
    store,
    template: '<Layout/>',
    components: { Layout }
})
