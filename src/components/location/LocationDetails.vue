<template>
  <div>
    <div class="field is-grouped is-pulled-right">
      <p class="control" v-if="!editMode">
        <button class="button is-small is-link"
                v-on:click="edit()"
                >
          <span class="icon is-small">
            <i class="fas fa-edit"></i>
          </span>
          <span>
            {{ $t('actions.edit') }}
          </span>
        </button>
      </p>
      <p class="control" v-if="editMode">
        <button class="button is-small is-link"
                v-on:click="save()"
                >
          <span class="icon is-small">
            <i class="fas fa-save"></i>
          </span>
          <span>
            {{ $t('actions.save') }}
          </span>
        </button>
      </p>
      <p class="control" v-if="editMode">
        <button class="button is-small is-link"
                v-on:click="cancel()"
                >
          <span class="icon is-small">
            <i class="fas fa-ban"></i>
          </span>
          <span>
            {{ $t('actions.cancel') }}
          </span>
        </button>
      </p>
    </div>
    <div class="content" v-if="!editMode">
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
    <!-- TODO validate and enable/disable buttons -->
    <LocationForm :location="getEditLocation()"
                  v-if="editMode"
                  ref="locationForm"
                  shortcode-read-only="true"
    />
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import LocationEntity from '@/model/locationentity';
import LocationForm from '@/components/locations/LocationForm.vue';
import {request} from '@/superagent';

@Component({
    components: {LocationForm}
  })
  export default class LocationDetails extends Vue {
    public $refs!: {
      locationForm: HTMLFormElement
    };

    private editMode: boolean = false;
    private editLocation!: LocationEntity;

    private getLocation(): LocationEntity {
      return this.$store.state.locations.location;
    }

    private getEditLocation(): LocationEntity {
      return this.editLocation;
    }

    private edit() {
      this.editLocation = { ...this.$store.state.locations.location } as LocationEntity;
      this.editMode = true;
    }

    private cancel() {
      this.editMode = false;
    }

    private async save() {
      this.editMode = false;
      const data = this.editLocation;
      const response = await request.put(
          "/api/locations"
      ).send({ entity: data });
      await this.$store.dispatch("locations/setLocation", { location: response.body.entity });
    }

  }
</script>

<style scoped>

</style>

