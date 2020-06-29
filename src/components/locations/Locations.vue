<template>
    <div>
        <table class="table is-striped is-hoverable is-fullwidth">
            <thead>
            <tr>
                <th>Name</th>
                <th class="actions">Actions</th>
            </tr>
            </thead>
            <tbody>
                <Location
                    v-for="location in locations()" v-bind:key="location.id" v-bind:loc="location" />
            </tbody>
        </table>
    </div>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';
  import Location from '@/components/locations/Location.vue';

  @Component({
    components: {
      Location
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
