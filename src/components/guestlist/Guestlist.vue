<template>
  <div>
    <div class="columns">
      <div class="column is-two-thirds">
        <h1 class="title">{{$t("guestlist.title")}}</h1>
        <h2 class="subtitle">{{getLocation().name}}</h2>
      </div>
      <div class="column">
        <div class="field is-grouped is-pulled-right">
          <p class="control">
            <router-link to="/locations" >
              <button class="button is-link is-small">
            <span class="icon is-small">
              <i class="fas fa-arrow-left"></i>
            </span>
                <span>{{$t('actions.back')}}</span>
              </button>
            </router-link>
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

      </div>
    </div>
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

@Component({
    components: {Guests, Datelist}
  })
  export default class Guestlist extends Vue {
    @Prop({default: ""})
    private shortname!: string;

    public mounted(): void {
      this.$store.dispatch("locations/getLocation", { shortname: this.getShortname() });
      this.$store.dispatch("locations/getDates", { shortname: this.getShortname() });
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
  }
</script>

<style scoped>

</style>
