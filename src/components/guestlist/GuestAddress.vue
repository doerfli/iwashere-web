<template>
  <tr>
    <td>&nbsp;</td>
    <td colspan="2">
      {{ $t('guestlist.address')}}:
      {{getGuest().guest_street}},
      {{getGuest().guest_zip}},
      {{getGuest().guest_city}},
      {{getGuest().guest_country}}
    </td>
  </tr>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';
import VisitEntity from '@/model/visitentity';

@Component({
    components: {
    }
  })
  export default class Guest extends Vue {
    @Prop()
    private visit!: VisitEntity;

    private getGuest() {
      return this.visit;
    }

  }
</script>

<style scoped>

</style>
