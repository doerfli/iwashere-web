<template>
  <div>
    <div class="field is-grouped is-pulled-right">
      <p class="control">
        <router-link :to="qrcodeUrl()" target='_blank'>
          <button class="button is-small is-link">
              <span class="icon is-small">
                <i class="fas fa-qrcode"></i>
              </span>
            <span class="icon is-small">
                <i class="fas fa-eye"></i>
              </span>
            <span>
                {{ $t('locations.actions.qr_code') }}
              </span>
          </button>
        </router-link>
      </p>
      <p class="control">
        <a :download="`qrcode_${this.shortname}.png`"
           ref="qrcodelink"
           target="_blank">
          <button class="button is-small is-link">
              <span class="icon is-small">
                <i class="fas fa-qrcode"></i>
              </span>
            <span class="icon is-small">
                <i class="fas fa-download"></i>
              </span>
            <span>
                {{ $t('locations.actions.qr_code_download') }}
              </span>
          </button>
        </a>
      </p>
      <p class="control">
        <a :href="getGuestListCsvUrl()">
          <button class="button is-link is-small">
                <span class="icon is-small">
                  <i class="fas fa-file-csv"></i>
                </span>
            <span>{{$t('guestlist.export_csv')}}</span>
          </button>
        </a>
      </p>
      <p class="control">
        <a :href="getGuestListXlsxUrl()">
          <button class="button is-link is-small">
                <span class="icon is-small">
                  <i class="fas fa-file-excel"></i>
                </span>
            <span>{{$t('guestlist.export_xls')}}</span>
          </button>
        </a>
      </p>
    </div>
    <h1 class="title">{{$t("guestlist.title")}}</h1>
    <h2 class="subtitle">{{getLocation().name}}</h2>
    <div class="columns">
      <div class="column is-one-fifth">
        <Datelist />
      </div>
      <div class="column">
        <Guests v-bind:visits="this.$store.state.locations.visits" v-bind:date="getDate()"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';
import Datelist from '@/components/guestlist/Datelist.vue';
import Guests from '@/components/guestlist/Guests.vue';
import {QRCodeToDataURLOptions, toDataURL} from 'qrcode';

@Component({
    components: {Guests, Datelist}
  })
  export default class Guestlist extends Vue {
    public $refs!: {
      qrcodelink: HTMLFormElement
    };

    @Prop({default: ""})
    private shortname!: string;

    public mounted(): void {
      this.$store.dispatch("locations/getLocation", { shortname: this.getShortname() });
      this.$store.dispatch("locations/getDates", { shortname: this.getShortname() });

      const opts = {
        scale: 10
      } as QRCodeToDataURLOptions;

      const refs = this.$refs;
      toDataURL(this.getVisitUrl(), opts, (err, url) => {
        refs.qrcodelink.href = url;
      });
    }

    private getShortname() {
      return this.shortname;
    }

    private getLocation() {
      return this.$store.state.locations.location;
    }

    private getDate() {
      return this.$store.state.locations.date;
    }

    private getGuestListCsvUrl() {
      return `/api/visits/${this.getShortname()}/${this.getDate()}/csv`;
    }

    private getGuestListXlsxUrl() {
      return `/api/visits/${this.getShortname()}/${this.getDate()}/xlsx`;
    }

    private qrcodeUrl() {
      return `/locations/${this.shortname}/qrcode`;
    }

    private getVisitUrl() {
      return `${process.env.VUE_APP_BASEURL}/#/visit/${this.shortname}`;
    }
  }
</script>

<style scoped>

</style>
