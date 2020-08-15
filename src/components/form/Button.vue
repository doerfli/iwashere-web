<template>
  <p class="control">
    <button class="button is-primary" v-on:click="$emit('click')" >
      {{ getTitle() }}
    </button>
  </p>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';

@Component
  export default class Button extends Vue {
    @Prop()
    private title!: string;

    private getTitle() {
      return this.title;
    }
  }
</script>

<style scoped>

</style>
