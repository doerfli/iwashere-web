<template>
  <div>
      <h1 class="title">
        Anmeldung
      </h1>
      <LoginForm/>
  </div>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';
  import LoginForm from '@/components/login/LoginForm.vue';

  @Component({
      components: {
          LoginForm
      }
  })
  export default class Login extends Vue {

  }
</script>

<style scoped>

</style>
