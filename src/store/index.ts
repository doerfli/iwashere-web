import Vue from 'vue';
import Vuex from 'vuex';
import account from '@/store/account';
import locations from '@/store/locations';
import visit from '@/store/visit';

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
    locations,
    visit
  },
});
