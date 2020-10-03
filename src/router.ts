import Vue from 'vue';
import Router from 'vue-router';
import LocationsView from '@/views/LocationsView.vue';
import NewLocationView from '@/views/NewLocationView.vue';
import VisitRegistrationView from '@/views/VisitRegistrationView.vue';
import SignupView from '@/views/SignupView.vue';
import LocationsGuestlistView from '@/views/LocationsGuestlistView.vue';
import LocationQrcodeView from '@/views/LocationQrcodeView.vue';
import SignupConfirmView from '@/views/SignupConfirmView.vue';
import ProfileView from '@/views/ProfileView.vue';
import ResetPasswordView from '@/views/ResetPasswordView.vue';
import LoginView from '@/views/LoginView.vue';
import VisitConfirmEmailView from '@/views/VisitConfirmEmailView.vue';
import FaqView from '@/views/FaqView.vue';
import FeedbackView from '@/views/FeedbackView.vue';
import DemoView from '@/views/DemoView.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: LoginView,
    },
    {
      path: '/demo',
      name: 'Demo',
      component: DemoView,
    },
    {
      path: '/faq',
      name: 'Faq',
      component: FaqView,
    },
    {
      path: '/feedback',
      name: 'Feedback',
      component: FeedbackView,
    },
    {
      path: '/login',
      name: 'Login',
      component: LoginView,
    },
    {
      path: '/locations',
      name: 'Locations',
      component: LocationsView,
    },
    {
      path: '/locations/new',
      name: 'NewLocation',
      component: NewLocationView,
    },
    {
      path: '/locations/:shortname/qrcode',
      name: 'LocationQRCodeView',
      component: LocationQrcodeView,
    },
    {
      path: '/locations/:shortname/guestlist',
      name: 'Guestlist',
      component: LocationsGuestlistView,
    },
    {
      path: '/profile',
      name: 'Profile',
      component: ProfileView
    },
    {
      path: '/resetPassword/:token',
      name: 'ResetPassword',
      component: ResetPasswordView
    },
    {
      path: '/signup',
      name: 'Signup',
      component: SignupView,
    },
    {
      path: '/signupConfirm/:token',
      name: 'SignupConfirm',
      component: SignupConfirmView,
    },
    {
      path: '/visit/:shortname',
      name: 'RegisterVisit',
      component: VisitRegistrationView
    },
    {
      path: '/visit/:id/confirm',
      name: 'ConfirmVisitEmail',
      component: VisitConfirmEmailView
    },
  ],
});
