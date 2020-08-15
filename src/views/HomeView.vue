<template>
  <div>
    <section class="hero">
      <div class="hero-body">
        <div class="container">
          <h1 class="title has-text-primary">
            Schluss mit der Zettelwirtschaft
          </h1>
          <h2 class="subtitle">
            Ab sofort führen Sie Ihre Gästeliste online!
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
      <h1 class="title">
        Was ist <IchWarDaTitle/>?
      </h1>
      <div class="columns">
        <div class="column">
          <div class="content is-medium">
            Mit <IchWarDaTitle/> verwalten Sie ab sofort Ihre
            <span class="has-text-weight-semibold has-text-primary">Gästeliste online</span>.
            Nachdem Sie Ihr Lokal aufgeschaltet haben können Ihre Kunden den
            <span class="has-text-weight-semibold has-text-primary">Besuch</span>
            in Ihrem Lokal <span class="has-text-weight-semibold has-text-primary">selbstständig registrieren</span>.
            Dafür brauchen sie nur ein Smartphone mit einem Web-Browser mit Internetzugriff.
          </div>
          <div class="content is-medium">
            Natürlichen können Sie die Gästeliste jederzeit online einsehen und bei Bedarf exportieren.
            Die Daten werden auf unserem Server (Serverstandort in der EU) gespeichert und
            <span class="has-text-weight-semibold has-text-primary">nach 14 Tagen automatisch gelöscht</span>.
          </div>
        </div>
        <div class="column">
          <Login />
        </div>
      </div>
    </section>
    <section class="container spacetop">
      <h1 class="title has-text-centered">
        <span class="has-text-weight-semibold has-text-primary">3 Schritte</span> und Ihre Gäste können <IchWarDaTitle /> benutzen
      </h1>
      <div class="columns">
        <div class="column has-text-centered">
          <p>
            <span class="icon has-text-info">
              <i class="fas fa-2x fa-dice-one"></i>
            </span>
          </p>
          <p class="content is-medium">
            <i class="fas fa-user-edit"></i>
            <router-link to="/signup">
              Konto erstellen
            </router-link>
          </p>
        </div>
        <div class="column has-text-centered">
          <p>
            <span class="icon has-text-info">
              <i class="fas fa-2x fa-dice-two"></i>
            </span>
          </p>
          <p class="content is-medium">
            <i class="fas fa-home"></i>
            Lokal mit Namen und Adresse erfassen
          </p>
        </div>
        <div class="column has-text-centered">
          <p>
            <span class="icon has-text-info">
              <i class="fas fa-2x fa-dice-three"></i>
            </span>
          </p>
          <p class="content is-medium">
            <i class="fas fa-qrcode"></i>
            QR-Code ausdrucken und am Eingang (oder am Tisch, an der Wand oder wo auch immer die Kunden ihn sehen koennen) aufhaengen.
          </p>
        </div>
      </div>
      <div class="columns">
        <div class="column">
          &nbsp;
        </div>
        <div class="column has-text-centered">
          <p>
            <span class="icon has-text-info">
              <i class="fas fa-2x fa-dice-d6 fa-spin"></i>
            </span>
          </p>
          <p>
            <i class="fas fa-mobile-alt"></i>
            Nun können sich Ihre Kunden durch Scannen des QR Codes selbstständig registrieren.
          </p>
        </div>
        <div class="column">
          &nbsp;
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import {Vue} from 'vue-property-decorator';
import Component from 'vue-class-component';
import Login from '@/components/login/Login.vue';
import IchWarDaTitle from '@/components/IchWarDaTitle.vue';

@Component({
      components: {
        IchWarDaTitle,
          Login
      }
  })
  export default class HomeView extends Vue {
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

  .spacetop {
    margin-top: 4em;
  }

  .column {
    padding: 2em;
  }

  .column p .icon {
    margin-bottom: 1.5em;
  }
</style>
