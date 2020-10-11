<template>
  <div class="content">
    <dl>
      <dt class="has-text-weight-semibold">{{ $t('locations.name')}}</dt>
      <dd class="mb-2">{{this.getLocation().name}}</dd>
      <dt class="has-text-weight-semibold">{{ $t('locations.shortname')}}</dt>
      <dd class="mb-2">{{this.getLocation().shortname}}</dd>
      <dt class="has-text-weight-semibold">{{ $t('locations.street')}}</dt>
      <dd class="mb-2">{{this.getLocation().street}}</dd>
      <dt class="has-text-weight-semibold">{{ $t('locations.zip')}}</dt>
      <dd class="mb-2">{{this.getLocation().zip}}</dd>
      <dt class="has-text-weight-semibold">{{ $t('locations.city')}}</dt>
      <dd class="mb-2">{{this.getLocation().city}}</dd>
      <dt class="has-text-weight-semibold">{{ $t('locations.country')}}</dt>
      <dd class="mb-2">{{this.getLocation().country}}</dd>
    </dl>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import LocationEntity from '@/model/locationentity';

@Component({
    components: {}
  })
  export default class LocationDetails extends Vue {

    private getLocation(): LocationEntity {
      return this.$store.state.locations.location;
    }

  }
</script>

<style scoped>
  dt {

  }
  dd {

  }
</style>

