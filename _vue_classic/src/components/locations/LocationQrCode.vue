<template>
  <div>
    <section class="hero">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            {{getLocation().name}}
          </h1>
          <h2 class="subtitle">
            {{getLocation().street}}, {{getLocation().zip}} {{getLocation().city}}
          </h2>
        </div>
      </div>
    </section>
    <section>
      <div class="container">
        <div class="content is-large">
          <p>
            Um Ihrem Besuch zu registrieren rufen Sie bitte die folgende Seite auf
          </p>
          <p>
            <a :href="getVisitUrl()">
              {{getVisitUrl()}}
            </a>
          </p>
          <p>
            Oder scannen Sie diesen QR-Code mit Ihrem Mobiltelefon
          </p>
          <p>
            <QRCodeImg v-bind:url="getVisitUrl()" />
          </p>

        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
  import {Component, Prop, Vue} from 'vue-property-decorator';
  import QRCodeImg from '@/components/locations/QRCodeImg.vue';
  @Component({
    components: {QRCodeImg}
  })
  export default class LocationQrCode extends Vue {
    @Prop({default: ""})
    private shortname!: string;

    public mounted(): void {
      this.$store.dispatch("locations/getLocation", { shortname: this.getShortname() });
    }

    private getShortname() {
      return this.shortname;
    }

    private getLocation() {
      return this.$store.state.locations.location;
    }

    private getVisitUrl() {
      return `${process.env.VUE_APP_BASEURL}/#/visit/${this.getShortname()}`;
    }
  }
</script>

<style scoped>

</style>
