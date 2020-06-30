<template>
  <div class="spacebelow" v-on:click="selectDate()">
    <b class="date">{{getDate()}}</b>
    <span class="count has-text-right">
      {{getCount()}}
    </span>
    {{$t('guestlist.guests')}}
  </div>
</template>

<script lang="ts">
  import {Component, Prop, Vue} from 'vue-property-decorator';
  import moment from 'moment';

  @Component
  export default class Date extends Vue {
    @Prop()
    private data!: any;

    private getDate() {
      return moment(this.data.date).format("DD.MM.YYYY");
    }

    private getCount() {
      return this.data.guestcount;
    }

    private selectDate() {
      const date = this.data.date;
      this.$store.dispatch("locations/setDate", { date, shortname: this.$store.state.locations.location.shortname });
    }
  }
</script>

<style scoped>
  .spacebelow {
    padding-bottom: 4px;
  }
  .date {
    display: inline-block;
    width: 100px;
  }
  .count {
    display: inline-block;
    width: 30px;
  }
</style>
