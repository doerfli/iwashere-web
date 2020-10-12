<template>
  <div>
    <div class="columns">
      <div class="column">
        <h2 class="title is-2">{{ getLocation().name }}</h2>
      </div>
      <div class="column is-one-fifth">
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
        </div>
      </div>
    </div>
    <Tabs>
      <TabItem
          name="guestlist"
          :active="isTabGuestlistActive()"
          :title="$t('location.tabs.guestlist')"
          v-on:tabSelected="setActiveTab($event)"
      />
      <TabItem
          name="details"
          :active="isTabDetailsActive()"
          :title="$t('location.tabs.details')"
          v-on:tabSelected="setActiveTab($event)"
      />
      <template v-slot:content>
        <Guestlist :shortname="getShortname()" v-if="isTabGuestlistActive()"/>
        <LocationDetails :shortname="getShortname()" v-if="isTabDetailsActive()"/>
      </template>
    </Tabs>
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';
import Guestlist from '@/components/guestlist/Guestlist.vue';
import LocationDetails from '@/components/location/LocationDetails.vue';
import Tabs from '@/components/common/tabs/Tabs.vue';
import TabItem from '@/components/common/tabs/TabItem.vue';

@Component({
    components: {TabItem, Tabs, LocationDetails, Guestlist}
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
      // console.log(tab);
      this.activeTab = tab;
    }

    private isTabDetailsActive() {
      return this.activeTab === "details";
    }

    private isTabGuestlistActive() {
      return this.activeTab === "guestlist";
    }
  }
</script>

<style scoped>

</style>

