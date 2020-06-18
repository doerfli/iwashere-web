import Vue from 'vue';
import Vuex from 'vuex';
import account from '@/store/account';
import locations from '@/store/locations';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    account,
    locations
  },
});
