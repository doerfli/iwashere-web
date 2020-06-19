<template>
    <section class="locations">
        <div class="container">
            <h1 class="title">{{$t("locations.title.new")}}</h1>
            <NewLocation />
        </div>
    </section>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';
  import NewLocation from '@/components/locations/NewLocation.vue';

  @Component({
    components: {
      NewLocation
    }
  })
  export default class NewLocationView extends Vue {

  }
</script>

<style scoped>

</style>
