import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
        userId: 1,
        userNumber: 0,
    },
    mutations: {
        getUserId(state, data) {
            state.userId = data;
        },
        getUserNumber(state, data) {
            state.userNumber = data;
        }
    },
    actions: {},
    modules:{
        
    }
})
export default store