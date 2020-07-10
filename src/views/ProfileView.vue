<template>
  <section class="section">
    <div class="container">
      <h1 class="title">{{ $t('title.profile')}}</h1>
      <Profile />
    </div>
  </section>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';
  import Profile from '@/components/profile/Profile.vue';
  @Component({
    components: {Profile}
  })
  export default class ProfileView extends Vue {

  }
</script>

<style scoped>

</style>
