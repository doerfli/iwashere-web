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
      <div class="notification is-info" v-if="showPasswortResetSuccess">
        {{$t('home.password_reset_success')}}
      </div>
      <div class="columns">
        <div class="column has-text-centered firstcol">
          <h1 class="title">
            In drei einfachen Schritten einsatzbereit
          </h1>
          <h2 class="subtitle listel">
            1.
          </h2>
          <div>
            Account erstellen
          </div>
          <h2 class="subtitle listel">
            2.
          </h2>
          <div>
            Lokal mit Namen und Adresse erfassen
          </div>
          <h2 class="subtitle listel">
            3.
          </h2>
          <div>
            QR-Code ausdrucken und am Eingang (oder am Tisch, an der Wand oder wo auch immer die Kunden ihn sehen koennen) aufhaengen.
          </div>
          <div class="listel">
            <p>
            Ab sofort koennen deine Gaeste ihren Aufenthalt im Lokal selbst via Smartphone registrieren.
            </p>
            <p>
              <small>Technische Voraussetzung: Smartphone mit Browser und Internetzugriff.</small>
            </p>
          </div>
        </div>
        <div class="column">
          <Login />
        </div>
      </div>
    </section>
    <section class="container">
      <h1 class="title">
        Was kann Ich war hier?
      </h1>
      <h1 class="title">
        Haeufige Fragen
      </h1>
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
    private showPasswortResetSuccess: boolean = false;

    public mounted() {
      this.$store.dispatch('account/resetUser');
      console.log(this.$route.query);
      if (this.$route.query.signup === "true") {
        this.showSignupSuccess = true;
      }
      if (this.$route.query.confirm === "true") {
        this.showConfirmSuccess = true;
      }
      if (this.$route.query.resetPassword === "true") {
        this.showPasswortResetSuccess = true;
      }
    }
  }


  //
</script>

<style scoped lang="scss">
  @import './../../node_modules/bulma/sass/utilities/_all';

  .listel {
    margin-top: 1.5em !important;
    margin-bottom: 0.2em;
  }

  .firstcol {
    background-color: $primary;

  }
  .column {
    padding: 2em;
  }
</style>
