<template>
  <LocationQrCode :shortname="locationShortname()" />
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
