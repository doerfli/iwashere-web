<template>
    <div>
        <table class="table is-striped is-hoverable is-fullwidth">
            <tbody>
                <LocationLine
                    v-for="location in locations()" v-bind:key="location.id" v-bind:loc="location" />
            </tbody>
        </table>
    </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import LocationLine from '@/components/locations/LocationLine.vue';

@Component({
    components: {
      LocationLine
    },
  })
  export default class Locations extends Vue {
    public mounted(): void {
      this.$store.dispatch("locations/getAll");
    }

    private locations() {
      return this.$store.state.locations.all;
    }
  }
</script>

<style scoped>
    .actions {
        width: 200px;
    }
</style>
