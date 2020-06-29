<template>
  <div>
    <h1 class="title">{{getLocation().name}}</h1>
    <h2 class="subtitle">{{$t("guestlist.title")}}</h2>
    <Datelist />
  </div>
</template>

<script lang="ts">
  import {Component, Prop, Vue} from 'vue-property-decorator';
  import Datelist from '@/components/guestlist/Datelist.vue';
  @Component({
    components: {Datelist}
  })
  export default class Guestlist extends Vue {
    @Prop({default: ""})
    private shortname!: string;

    public mounted(): void {
      console.log(1);
      this.$store.dispatch("locations/getLocation", { shortname: this.getShortname() });
      this.$store.dispatch("locations/getDates", { shortname: this.getShortname() });
    }

    private getShortname() {
      return this.shortname;
    }

    private getLocation() {
      return this.$store.state.locations.location;
    }
  }
</script>

<style scoped>

</style>
