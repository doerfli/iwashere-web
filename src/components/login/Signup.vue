<template>
  <div class="columns">
    <div class="column is-half">
      <h1 class="title">{{$t('title.signup')}}</h1>
      <SignupForm />
    </div>
  </div>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';
  import SignupForm from '@/components/login/SignupForm.vue';
  @Component({
    components: {SignupForm}
  })
  export default class Signup extends Vue {

  }
</script>

<style scoped>

</style>
