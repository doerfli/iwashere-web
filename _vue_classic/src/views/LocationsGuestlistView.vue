<template>
  <section class="locations">
    <div class="container">
      <Guestlist :shortname="locationShortname()" />
    </div>
  </section>
</template>

<script lang="ts">
  import {Component, Prop, Vue} from 'vue-property-decorator';
  import Datelist from '@/components/guestlist/Datelist.vue';
  import Guestlist from '@/components/guestlist/Guestlist.vue';
  @Component({
    components: {Guestlist, Datelist}
  })
  export default class LocationsGuestlistView extends Vue {

    private locationShortname() {
      return this.$route.params.shortname;
    }

  }
</script>

<style scoped>

</style>
