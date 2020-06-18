import router from '@/router';
import {Module} from 'vuex';
import {request} from '@/superagent';
// import req from 'superagent';

const accountModule: Module<any, any> = {
  namespaced: true as true,
  state: {
  },
  mutations: {
  },
  actions: {
    async login({ commit }, payload) {
      const form = new FormData();
      form.append('username', payload.username);
      form.append('password', payload.password);
      request.post("/api/login")
        .send(form)
        .then((response) => {
          console.log(response);
          if (response.status === 200 ) {
            router.push({name: "Locations"});
          }
        });
    },
  },
};

export default accountModule;
