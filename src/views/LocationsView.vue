<template>
    <section class="section locations">
        <div class="container">
            <h1 class="title">{{$t("locations.title.list")}}</h1>
            <Locations />
            <router-link to="/locations/new">
                <button class="button is-primary">{{$t("locations.actions.new")}}</button>
            </router-link>
        </div>
    </section>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import Locations from '@/components/locations/Locations.vue';

@Component({
    components: {
      Locations
    },
  })
  export default class LocationsView extends Vue {

    // public $refs!: {
    // };

    private navNewLocations() {
      this.$router.push({name: 'NewLocation'});
    }

  }
</script>

<style scoped>
    button {
        margin-top: 20px;
    }
</style>
