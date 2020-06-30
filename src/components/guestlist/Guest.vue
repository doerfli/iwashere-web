<template>
  <tr>
    <td>
      {{getGuest().guest_name}}
    </td>
    <td>
      {{getGuest().guest_email}}
    </td>
    <td>
      {{getGuest().guest_phone}}
    </td>
  </tr>
</template>

<script lang="ts">
  import {Component, Prop, Vue} from 'vue-property-decorator';
  import VisitEntity from '@/model/visitentity';

  @Component
  export default class Guest extends Vue {
    @Prop()
    private guest!: VisitEntity;

    private getGuest() {
      return this.guest;
    }
  }
</script>

<style scoped>

</style>
