<template>
    <tr>
        <td>
            {{this.loc.name}}
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
  }
</script>

<style scoped>

</style>
