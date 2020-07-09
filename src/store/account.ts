import router from '@/router';
import {Module} from 'vuex';
import {request} from '@/superagent';
import User from '@/model/user';
// import req from 'superagent';

const accountModule: Module<any, any> = {
  namespaced: true as true,
  state: {
    user: null
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload.user;
    },
    resetUser(state) {
      state.user = null;
    }
  },
  actions: {
    async fetchUser({ commit }) {
      console.log("fetch user");
      if (this.state.account.user == null || this.state.account.user.username === undefined) {
        const response = await request.get("/api/user").send();
        await commit('setUser', { user: response.body as User });
      } else {
        return {} as User;
      }

    },
    async resetUser({ commit }) {
      console.log("reset user");
      await commit('resetUser');
    }
  },
};

export default accountModule;
