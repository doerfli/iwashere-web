import {Module} from 'vuex';
import {request} from '@/superagent';
import LocationEntity from '@/model/locationentity';

const visitModule: Module<any, any> = {
  namespaced: true as true,
  state: {
    location: {}
  },
  mutations: {
    save(state, payload) {
      state.location = payload.location as LocationEntity;
    }
  },
  actions: {
    async getLocation({ commit }, payload) {
      const resp = await request.get(`/api/locations/byShortname/${payload.shortname}`);
      console.log(resp);
      commit('save', { location: resp.body as LocationEntity });
    },
  },
};

export default visitModule;
