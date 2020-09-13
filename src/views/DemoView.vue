<template>
  <div>
    <section class="hero  is-hidden-mobile ">
      <div class="hero-body">
        <div class="container">
          <h1 class="title has-text-primary">
            Möchten Sie den Dienst ausprobieren?
          </h1>
          <h2 class="subtitle">
            Denn nutzen Sie den Demo Benutzer
          </h2>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column">
            <h3 class="title is-3">
              Als Besucher
            </h3>
            <div class="content is-medium">
              Probieren Sie aus wie Sie sich als Gast bei einem Besuch <i>Gasthaus Sonne</i> registrieren.
              Scannen Sie den QR-Code oder nutzen Sie den Link darunter um den Registriervorgang zu starten.
            </div>
            <div class="content is-medium has-text-centered">
              <img src="@/assets/qrcode_demo_gasthaus_sonne.png" width="250px"/>
              <br/>
              <a :href="getVisitUrl()">{{ getVisitUrl() }}</a>
            </div>
          </div>
          <div class="column">
            <h3 class="title is-3">
              Als Besitzer
            </h3>
            <div class="content is-medium">
              Wenn Sie wissen wollen wie <IchWarDaTitle /> für Sie als Lokalbesitzer funktioniert, dann melden Sie sich
              doch einmal mit dem Demo Benutzer im Backend an.<p/>
              Benutzername: <span class="has-text-primary">demo@ich-war-da.net</span><br/>
              Passwort: <span class="has-text-primary">ichwarda</span>
            </div>
            <Login />
          </div>
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
  export default class DemoView extends Vue {

    private getVisitUrl() {
      return `${process.env.VUE_APP_BASEURL}/#/visit/demo_gasthaus_sonne`;
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
