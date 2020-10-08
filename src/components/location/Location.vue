<template>
  <div>
    <h2 class="title is-2">{{ getLocation().name }}</h2>
    <div class="tabs">
      <ul>
        <li :class="{'is-active': getActiveTab() === 'guestlist'}"><a v-on:click="setActiveTab('guestlist')">{{ $t("location.tabs.guestlist") }}</a></li>
        <li :class="{'is-active': getActiveTab() === 'details'}"><a v-on:click="setActiveTab('details')">{{ $t("location.tabs.details") }}</a></li>
      </ul>
    </div>
    <Guestlist :shortname="getShortname()" v-if="getActiveTab() === 'guestlist'"/>
    <LocationDetails :shortname="getShortname()" v-if="getActiveTab() === 'details'"/>
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';
import Guestlist from '@/components/guestlist/Guestlist.vue';
import LocationDetails from '@/components/location/LocationDetails.vue';

@Component({
    components: {LocationDetails, Guestlist}
  })
  export default class Location extends Vue {
    @Prop({default: ""})
    private shortname!: string;
    private activeTab = "guestlist";

    public mounted(): void {
      this.$store.dispatch("locations/getLocation", { shortname: this.getShortname() });
    }

    private getShortname() {
      return this.shortname;
    }

    private getLocation() {
      return this.$store.state.locations.location;
    }

    private setActiveTab(tab: string) {
      this.activeTab = tab;
    }

    private getActiveTab() {
      return this.activeTab;
    }
  }
</script>

<style scoped>

</style>

