<template>
  <div>
    <PasswordInputField :label="$t('profile.change_password.old_password')" :hint-text="$t('profile.change_password.old_password_hint')"
                        icon-left="key"
                        v-model="oldPassword"
                        v-on:enterPressed="changePassword"
    />
    <PasswordInputField :label="$t('profile.change_password.password')" :hint-text="$t('profile.change_password.password_hint')"
                        icon-left="key"
                        v-model="password"
                        v-on:enterPressed="changePassword"
                        :error-text="$t('profile.change_password.password_too_short', { length: MINPASSWORDLENGTH })"
                        v-bind:show-error-text="passwordTooShort"
    />
    <PasswordInputField :label="$t('profile.change_password.passwordConfirmation')" :hint-text="$t('profile.change_password.passwordConfirmation_hint')"
                        icon-left="key"
                        v-model="passwordConfirmation"
                        v-on:enterPressed="changePassword"
                        :error-text="$t('profile.change_password.passwords_dontmatch')"
                        v-bind:show-error-text="passwordsDontMatch"
    />
    <div class="notification is-warning" v-if="showFormIncomplete">
      {{$t('profile.change_password.form_incomplete')}}
    </div>
    <div class="notification is-danger" v-if="showChangeError">
      {{$t('profile.change_password.change_error')}}
    </div>
    <div class="notification is-danger" v-if="showChangeFailedError">
      {{$t('profile.change_password.password_change_failed')}}
    </div>
    <Button :title="$t('profile.change_password.submitButton')" v-on:click="changePassword" />
    <div class="notification is-success" v-if="showPasswordChanged">
      {{$t('profile.change_password.password_changed')}}
    </div>
  </div>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';
  import router from '@/router';
  import PasswordInputField from '@/components/form/PasswordInputField.vue';
  import Button from '@/components/form/Button.vue';
  import {request} from '@/superagent';

  @Component({
    components: {Button, PasswordInputField}
  })
  export default class ChangePasswordForm extends Vue {
    private MINPASSWORDLENGTH = Number(process.env.VUE_APP_PASSWORD_MIN_LENGTH);
    private oldPassword: string = "";
    private password: string = "";
    private passwordConfirmation: string = "";
    private passwordsDontMatch: boolean = false;
    private passwordTooShort: boolean = false;
    private showFormIncomplete: boolean = false;
    private showChangeError: boolean = false;
    private showChangeFailedError: boolean = false;
    private showPasswordChanged: boolean = false;

    private isValid() {
      this.passwordsDontMatch = this.password !== this.passwordConfirmation;
      this.passwordTooShort = this.password.length < this.MINPASSWORDLENGTH;
      return this.oldPassword !== "" && this.password !== "" && this.passwordConfirmation !== ""
        && ! this.passwordTooShort && ! this.passwordsDontMatch;
    }

    private async changePassword() {
      this.showFormIncomplete = false;
      this.showChangeError = false;
      this.showChangeFailedError = false;
      this.showPasswordChanged = false;

      if (!this.isValid()) {
        this.showFormIncomplete = true;
        return;
      }

      await this.submitLoginData();
    }

    private async submitLoginData() {
      try {
        const response = await request.post('/api/accounts/changePassword').send({
          oldPassword: this.oldPassword,
          newPassword: this.password
        });
        if (response.status === 200) {
          this.showPasswordChanged = true;
          this.password = "";
          this.oldPassword = "";
          this.passwordConfirmation = "";
        }
      } catch (e) {
        // console.log(e);
        if (e.response.status === 400) {
          this.showChangeFailedError = true;
        } else {
          this.showChangeError = true;
        }
      }
    }
  }
</script>

<style scoped>

</style>
