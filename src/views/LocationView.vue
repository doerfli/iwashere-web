<template>
  <section class="section">
    <div class="container">
      <Location :shortname="locationShortname()" />
    </div>
  </section>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import Location from '@/components/location/Location.vue';

@Component({
    components: {Location}
  })
  export default class LocationView extends Vue {

    private locationShortname() {
      return this.$route.params.shortname;
    }

  }
</script>

<style scoped>

</style>

