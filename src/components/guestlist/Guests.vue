<template>
  <table class="table is-striped is-hoverable is-fullwidth">
    <thead>
      <tr>
        <th colspan="3" v-if="getGuests().length > 0">Gaeste am {{getDate()}}</th>
      </tr>
      <tr>
        <th>{{$t('guestlist.name')}}</th>
        <th>{{$t('guestlist.email')}}</th>
        <th>{{$t('guestlist.phone')}}</th>
      </tr>
    </thead>
    <tbody>
      <td v-if="getGuests().length === 0" colspan="3">{{$t('guestlist.empty')}}</td>
      <Guest v-for="guest in getGuests()" v-bind:key="guest.id" v-bind:guest="guest" />
    </tbody>
  </table>
</template>

<script lang="ts">
  import {Component, Prop, Vue} from 'vue-property-decorator';
  import VisitEntity from '@/model/visitentity';
  import Guest from '@/components/guestlist/Guest.vue';
  import moment from 'moment';
  @Component({
    components: {Guest}
  })
  export default class Guests extends Vue {
    @Prop()
    private guests!: VisitEntity[];
    @Prop()
    private date!: string;

    private getDate() {
      return moment(this.date).format("DD.MM.YYYY");
    }

    private getGuests() {
      return this.guests;
    }
  }
</script>

<style scoped>

</style>
