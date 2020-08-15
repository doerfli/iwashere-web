<template>
  <section class="section">
    <div class="container">
      <LocationQrCode :shortname="locationShortname()" />
    </div>
  </section>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import LocationQrCode from '@/components/locations/LocationQrCode.vue';

@Component({
    components: {LocationQrCode}
  })
  export default class LocationQrcodeView extends Vue {

    private locationShortname() {
      return this.$route.params.shortname;
    }

  }
</script>

<style scoped>

</style>
