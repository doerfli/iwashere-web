<template>
  <div>
    <router-link to="/locations" >{{$t('actions.back')}}</router-link>
    <h1 class="title">{{$t("guestlist.title")}}</h1>
    <h2 class="subtitle">{{getLocation().name}}</h2>
    <div class="columns">
      <div class="column is-one-fifth">
        <Datelist />
      </div>
      <div class="column">
        <Guests v-bind:guests="this.$store.state.locations.visits" v-bind:date="getDate()"/>
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
  }
</script>

<style scoped>

</style>
