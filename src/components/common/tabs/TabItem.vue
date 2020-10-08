<template>
  <li :class="{'is-active': isActive()}">
    <a v-on:click="$emit('tabSelected', getName())">
      {{ getTitle() }}
    </a>
  </li>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';

@Component({
    components: {}
  })
  export default class TabItem extends Vue {
    @Prop()
    private name!: string;
    @Prop({default: false})
    private active!: boolean;
    @Prop()
    private title!: string;

    private isActive() {
      return this.active;
    }

    private getTitle() {
      return this.title;
    }

    private getName() {
      return this.name;
    }
  }
</script>

<style scoped>

</style>

