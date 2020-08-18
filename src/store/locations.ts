import {Module} from 'vuex';
import {request} from '@/superagent';
import LocationEntity from '@/model/locationentity';
import VisitEntity from '@/model/visitentity';

const locationsModule: Module<any, any> = {
  namespaced: true as true,
  state: {
    all: [] as LocationEntity[],
    location: {} as LocationEntity,
    dates: {},
    date: {},
    visits: [] as VisitEntity[]
  },
  mutations: {
    addAll(state, payload) {
      state.all = (payload.locations as LocationEntity[]).sort((a: any, b: any) => a.name.localeCompare(b.name));
    },
    set(state, payload) {
      state.location = payload.location as LocationEntity;
    },
    dates(state, payload) {
      state.dates = payload.dates.sort((a: any, b: any) => b.date.localeCompare(a.date));
      state.date = {};
      state.visits = [];
    },
    setDate(state, payload) {
      state.date = payload.date;
    },
    setVisits(state, payload) {
      state.visits = payload.visits as VisitEntity[];
    },
    confirmEmail(state, payload) {
      const id = payload.id;
      state.visits.filter((v: VisitEntity) => v.id === id).forEach((v: VisitEntity) => v.verifiedEmail = true);
    },
    confirmPhone(state, payload) {
      const id = payload.id;
      state.visits.filter((v: VisitEntity) => v.id === id).forEach((v: VisitEntity) => v.verifiedPhone = true);
    }
  },
  actions: {
    async getAll({commit}, payload) {
      // console.log("retrieving locations");
      request.get(`/api/locations`)
        .then((response) => {
          // console.log(response);
          const locations =  response.body.locations as LocationEntity[];
          commit('addAll', { locations });
        });
    },
    async getLocation({commit}, payload) {
      // console.log("getLocation");
      const resp = await request.get(`/api/locations/byShortname/${payload.shortname}`);
      // console.log(resp);
      commit('set', { location: resp.body as LocationEntity });
    },
    async getDates({commit}, payload) {
      // console.log("getDates");
      const resp = await request.get(`/api/visits/${payload.shortname}/dates`);
      // console.log(resp);
      commit('dates', { dates: resp.body.dates });
    },
    async setDate({commit}, payload) {
      await commit('setDate', { date: payload.date });
      const resp = await request.get(`/api/visits/${payload.shortname}/${this.state.locations.date}`);
      // console.log(resp);
      commit('setVisits', { visits: resp.body.visits });
    },
    confirmEmail({commit}, payload) {
      commit('confirmEmail', { id: payload.id});
    },
    confirmPhone({commit}, payload) {
      commit('confirmPhone', { id: payload.id});
    }
  },
  getters: {

  },
};

export default locationsModule;
