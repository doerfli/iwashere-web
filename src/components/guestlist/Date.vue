<template>
  <div
    @mouseover="hover = true"
    @mouseleave="hover = false"
    :class="{
        spacebelow: true,
        active: hover,
        'has-text-grey-light': hover,
        'has-text-info': isSelected()
    }"
    v-on:click="selectDate()" >
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
    private content!: any;

    public data() {
      return {
        hover: false,
      };
    }

    private getDate() {
      return moment(this.content.date).format("DD.MM.YYYY");
    }

    private getCount() {
      return this.content.guestcount;
    }

    private selectDate() {
      const date = this.content.date;
      this.$store.dispatch("locations/setDate", { date, shortname: this.$store.state.locations.location.shortname });
    }

    private isSelected() {
      return this.$store.state.locations.date === this.content.date;
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
  .active {
    cursor: pointer;
  }
</style>
