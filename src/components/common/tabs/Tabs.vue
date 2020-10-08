<template>
  <div>
    <div class="tabs">
      <ul>
        <slot></slot>
      </ul>
    </div>
    <slot name="content"></slot>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';

@Component({
    components: {}
  })
  export default class Tabs extends Vue {

  }
</script>

<style scoped>

</style>

