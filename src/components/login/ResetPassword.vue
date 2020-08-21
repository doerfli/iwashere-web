<template>
  <div>
    <PasswordFormFields ref="passwordFields"/>
    <div class="field">
      <Button :title="$t('reset_password.submit')" v-on:click="resetPassword" />
    </div>

    <div class="notification is-success" v-if="showResetSuccess">
      {{$t('reset_password.reset_success')}}
    </div>
    <div class="notification is-warning" v-if="showInvalidToken">
      {{$t('reset_password.invalid_token')}}
    </div>
    <div class="notification is-warning" v-if="showTokenExpired">
      {{$t('reset_password.token_expired')}}
    </div>
    <div class="notification is-danger" v-if="showError">
      {{$t('reset_password.error')}}
    </div>
    <div>
      <router-link to="/home">{{$t('actions.back')}}</router-link>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';
import PasswordFormFields from '@/components/login/PasswordFormFields.vue';
import Button from '@/components/form/Button.vue';
import superagent from 'superagent';

@Component({
    components: {Button, PasswordFormFields}
  })
  export default class ResetPassword extends Vue {
    public $refs!: {
      passwordFields: HTMLFormElement
    };

    @Prop()
    private token!: string;
    private showResetSuccess: boolean = false;
    private showInvalidToken: boolean = false;
    private showTokenExpired: boolean = false;
    private showError: boolean = false;

    private async resetPassword() {
      if ( ! this.$refs.passwordFields.isValid()) {
        return;
      }

      this.showResetSuccess = false;
      this.showInvalidToken = false;
      this.showTokenExpired = false;
      this.showError = false;

      try {
        await superagent.post('/api/accounts/resetPassword').send({
          token: this.token,
          password: this.$refs.passwordFields.getPassword()
        });
        console.log("password reset successful");
        this.showResetSuccess = true;
      } catch (e) {
        console.log(e.response);
        if (e.response.status === 400) {
          this.showInvalidToken = true;
        } else if (e.response.status === 409) {
          this.showInvalidToken = true;
        } else if (e.response.status === 401) {
          this.showTokenExpired = true;
        } else {
          this.showError = true;
        }
      }
    }
  }
</script>

<style scoped>

</style>
