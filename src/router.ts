import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import LocationsView from '@/views/LocationsView.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/locations',
      name: 'Locations',
      component: LocationsView,
    },
  ],
});
