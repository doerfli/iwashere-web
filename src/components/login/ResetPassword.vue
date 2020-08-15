<template>
  <div>
    <PasswordFormFields ref="passwordFields"/>
    <div class="field">
      <Button :title="$t('reset_password.submit')" v-on:click="resetPassword" />
    </div>

    <div class="notification is-danger" v-if="showPasswordResetError">
      {{$t('reset_password.error')}}
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';
import PasswordFormFields from '@/components/login/PasswordFormFields.vue';
import Button from '@/components/form/Button.vue';
import {request} from '@/superagent';
import router from '@/router';

@Component({
    components: {Button, PasswordFormFields}
  })
  export default class ResetPassword extends Vue {
    public $refs!: {
      passwordFields: HTMLFormElement
    };

    @Prop()
    private token!: string;
    private showPasswordResetError: boolean = false;

    private async resetPassword() {
      if ( ! this.$refs.passwordFields.isValid()) {
        return;
      }

      try {
        await request.post('/api/accounts/resetPassword').send({
          token: this.token,
          password: this.$refs.passwordFields.getPassword()
        });
        console.log("password reset successful");
        await router.push({name: 'Home', query: { resetPassword: 'true' }});
      } catch (e) {
        console.log(e.response);
        this.showPasswordResetError = true;
      }
    }
  }
</script>

<style scoped>

</style>
