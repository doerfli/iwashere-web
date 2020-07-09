<template>
  <div>
    <section class="hero">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            {{ $t("title.home")}}
          </h1>
          <h2 class="subtitle">
            {{ $t("title.home_sub")}}
          </h2>
        </div>
      </div>
    </section>
    <section class="container">
      <div class="notification is-info" v-if="showSignupSuccess">
        {{$t('home.signup_success')}}
      </div>
      <div class="notification is-info" v-if="showConfirmSuccess">
        {{$t('home.confirm_success')}}
      </div>
      <Login />
    </section>
  </div>
</template>

<script lang="ts">
  import {Vue} from "vue-property-decorator";
  import Component from 'vue-class-component';
  import Login from '@/components/login/Login.vue';

  @Component({
      components: {
          Login
      }
  })
  export default class Home extends Vue {
    private showSignupSuccess: boolean = false;
    private showConfirmSuccess: boolean = false;

    public mounted() {
      this.$store.dispatch('account/resetUser');
      console.log(this.$route.query);
      if (this.$route.query.signup === "true") {
        this.showSignupSuccess = true;
      }
      if (this.$route.query.confirm === "true") {
        this.showConfirmSuccess = true;
      }
    }
  }


  //
</script>
