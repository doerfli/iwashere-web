<template>
  <table class="table is-striped is-hoverable is-fullwidth">
    <thead>
      <tr>
        <th colspan="3" v-if="getVisits().length > 0">{{$t('guestlist.table_title', { date: getDate()})}}</th>
      </tr>
      <tr>
        <th>{{$t('guestlist.name')}}</th>
        <th>{{$t('guestlist.contact_data')}}</th>
        <th>&nbsp;</th>
      </tr>
    </thead>
    <tbody>
      <td v-if="getVisits().length === 0" colspan="3">{{$t('guestlist.empty')}}</td>
      <template v-for="visit in getVisits()" >
        <Guest v-bind:visit="visit" />
        <GuestAddress v-bind:visit="visit" v-if="hasAddress(visit)"/>
      </template>
    </tbody>
  </table>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';
import VisitEntity from '@/model/visitentity';
import Guest from '@/components/guestlist/Guest.vue';
import moment from 'moment';
import GuestAddress from '@/components/guestlist/GuestAddress.vue';

@Component({
    components: {GuestAddress, Guest}
  })
  export default class Guests extends Vue {
    private static isEmpty(str: string|null) {
      return (!str || 0 === str.length);
    }

    @Prop()
    private visits!: VisitEntity[];
    @Prop()
    private date!: string;

    private getDate() {
      return moment(this.date).format("DD.MM.YYYY");
    }

    private getVisits() {
      return this.visits;
    }

    private hasAddress(guest: VisitEntity): boolean {
      return ! Guests.isEmpty(guest.guest_street)
          || ! Guests.isEmpty(guest.guest_zip)
          || ! Guests.isEmpty(guest.guest_city)
          || ! Guests.isEmpty(guest.guest_country);
    }

}
</script>

<style scoped>

</style>
