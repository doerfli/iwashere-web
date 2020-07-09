<template>
  <section class="section">
    <div class="container">
      <h1 class="title">{{ $t('title.profile')}}</h1>
    </div>
  </section>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';

  @Component
  export default class ProfileView extends Vue {

  }
</script>

<style scoped>

</style>
