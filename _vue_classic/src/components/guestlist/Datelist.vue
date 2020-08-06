<template>
  <div>
    <Date
      v-for="x in dates()" v-bind:key="x.date" v-bind:content="x" />
  </div>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';
  import Date from '@/components/guestlist/Date.vue';
  @Component({
    components: {Date}
  })
  export default class Datelist extends Vue {

    private dates() {
      return this.$store.state.locations.dates;
    }
  }
</script>

<style scoped>

</style>
