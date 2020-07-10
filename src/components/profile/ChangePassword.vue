<template>
  <div>
    <h2 class="subtitle">{{ $t('profile.change_password.title')}}</h2>
    <ChangePasswordForm />
  </div>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';
  import ChangePasswordForm from '@/components/profile/ChangePasswordForm.vue';
  @Component({
    components: {ChangePasswordForm}
  })
  export default class ChangePassword extends Vue {

  }
</script>

<style scoped>

</style>
