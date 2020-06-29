<template>
    <tr>
        <td>
            {{this.loc.name}}
        </td>
        <td>
            <p class="buttons">
                <router-link :to="guestListUrl()">
                    <button class="button is-small is-link">
                        <span class="icon is-small">
                          <i class="fas fa-clipboard-list"></i>
                        </span>
                        <span>
                            {{$t('locations.actions.guest_list')}}
                        </span>
                    </button>
                </router-link>
            </p>
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

    private guestListUrl() {
        return `/locations/${this.loc.shortname}/guestlist`;
    }
  }
</script>

<style scoped>

</style>
