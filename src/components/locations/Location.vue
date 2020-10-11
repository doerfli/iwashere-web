<template>
  <tr v-on:click="this.console.log('1');">
    <td class="is-vcentered">
      {{ this.loc.name }}
    </td>
    <td class="is-vcentered">
      <div class="field is-grouped is-pulled-right">
        <p class="control">
          <router-link :to="detailsUrl()">
            <button class="button is-small is-link">
              <span class="icon is-small">
                <i class="fas fa-clipboard-list"></i>
              </span>
              <span>
                {{ $t('locations.actions.details') }}
              </span>
            </button>
          </router-link>
        </p>
      </div>
    </td>
  </tr>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';
import LocationEntity from '@/model/locationentity';

@Component
export default class Location extends Vue {
  @Prop()
  private loc!: LocationEntity;

  private detailsUrl() {
    return `/location/${this.loc.shortname}`;
  }

}
</script>

<style scoped>

</style>
