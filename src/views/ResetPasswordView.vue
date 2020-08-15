<template>
  <section class="section">
    <div class="container">
      <h1 class="title">{{ $t('title.reset_password')}}</h1>
      <ResetPassword :token="this.$route.params.token"/>
    </div>
  </section>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import ResetPassword from '@/components/login/ResetPassword.vue';

@Component({
    components: {ResetPassword}
  })
  export default class ResetPasswordView extends Vue {

  }
</script>

<style scoped>

</style>
