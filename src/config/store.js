import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
export default new Vuex.Store({
    state: {
        member: null,
        token:'',
        username:""
    },
    mutations: {
        setMember(state, member) {
            state.member = member;
            localStorage.setItem('MEMBER', JSON.stringify(member));
        },
        setToken(sta,data){
           this.token=data;
        },
        setUsername(sta,data){
            this.username=data
        }
    },
    getters: {
        isLogin(state){
            // debugger
            return state.member != null;
        }
    }
});