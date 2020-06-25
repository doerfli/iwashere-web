<template>
  <div>
    <div class="columns">
      <div class="column is-half">
        <LoginForm/>
      </div>
    </div>
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
