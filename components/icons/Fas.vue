<template>
  <font-awesome-icon :icon="['fas', icon()]" :class="classes()"/>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';
  @Component
  export default class Fas extends Vue {
    @Prop({default: 'thumbs-up'})
    private i!: String;
    @Prop({default: ""})
    private cls!: String;

    private icon(): String {
      return this.i;
    }

    private classes(): String {
      return this.cls;
    }
  }
</script>

<style scoped>
</style>

