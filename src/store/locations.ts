import {Module} from 'vuex';
import {request} from '@/superagent';
import LocationEntity from "@/model/locationentity";

const locationsModule: Module<any, any> = {
  namespaced: true as true,
  state: {
    all: [] as LocationEntity[]
  },
  mutations: {
    addAll(state, payload) {
      state.all = payload.locations as LocationEntity[];
    }
  },
  actions: {
    async getAll({commit}, payload) {
      console.log("retrieving locations");
      request.get(`/api/locations`)
        .then((response) => {
          console.log(response);
          const locations =  response.body.locations as LocationEntity[];
          commit('addAll', { locations });
        });
    }
  },
  getters: {

  },
};

export default locationsModule;
