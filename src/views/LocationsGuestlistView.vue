<template>
  <section class="section locations">
    <div class="container">
      <Guestlist :shortname="locationShortname()" />
    </div>
  </section>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
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
