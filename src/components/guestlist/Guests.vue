<template>
  <table class="table is-striped is-hoverable is-fullwidth">
    <thead>
      <tr>
        <th colspan="3" v-if="getVisits().length > 0">{{$t('guestlist.table_title', { date: getDate()})}}</th>
      </tr>
      <tr>
        <th>{{$t('guestlist.name')}}</th>
        <th>{{$t('guestlist.email')}}</th>
        <th>{{$t('guestlist.phone')}}</th>
      </tr>
    </thead>
    <tbody>
      <td v-if="getVisits().length === 0" colspan="3">{{$t('guestlist.empty')}}</td>
      <Guest v-for="visit in getVisits()" v-bind:key="visit.id" v-bind:visit="visit" />
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
    private visits!: VisitEntity[];
    @Prop()
    private date!: string;

    private getDate() {
      return moment(this.date).format("DD.MM.YYYY");
    }

    private getVisits() {
      return this.visits;
    }
  }
</script>

<style scoped>

</style>
