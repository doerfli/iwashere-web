import {Module} from 'vuex';
import {request} from '@/superagent';
import LocationEntity from "@/model/locationentity";

const locationsModule: Module<any, any> = {
  namespaced: true as true,
  state: {
    all: [] as LocationEntity[],
    location: {} as LocationEntity,
    dates: {}
  },
  mutations: {
    addAll(state, payload) {
      state.all = payload.locations as LocationEntity[];
    },
    set(state, payload) {
      state.location = payload.location as LocationEntity;
    },
    dates(state, payload) {
      state.dates = payload.dates.sort((a: any, b: any) => a.date.localeCompare(b.date));
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
    },
    async getLocation({commit}, payload) {
      console.log("getLocation");
      const resp = await request.get(`/api/locations/byShortname/${payload.shortname}`);
      console.log(resp);
      commit('set', { location: resp.body as LocationEntity });
    },
    async getDates({commit}, payload) {
      console.log("getLocation");
      const resp = await request.get(`/api/visits/${payload.shortname}/dates`);
      console.log(resp);
      commit('dates', { dates: resp.body.dates });
    }
  },
  getters: {

  },
};

export default locationsModule;
