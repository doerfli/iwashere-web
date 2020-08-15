<template>
  <div>
    <PasswordInputField :label="$t('profile.change_password.old_password')" :hint-text="$t('profile.change_password.old_password_hint')"
                        icon-left="key"
                        v-model="oldPassword"
                        v-on:enterPressed="changePassword"
    />
    <PasswordFormFields ref="passwordFields"/>
    <div class="notification is-warning" v-if="showFormIncomplete">
      {{$t('profile.change_password.form_incomplete')}}
    </div>
    <div class="notification is-danger" v-if="showChangeError">
      {{$t('profile.change_password.change_error')}}
    </div>
    <div class="notification is-danger" v-if="showChangeFailedError">
      {{$t('profile.change_password.password_change_failed')}}
    </div>
    <div class="field">
      <Button :title="$t('profile.change_password.submitButton')" v-on:click="changePassword" />
    </div>
    <div class="notification is-success" v-if="showPasswordChanged">
      {{$t('profile.change_password.password_changed')}}
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import PasswordInputField from '@/components/form/PasswordInputField.vue';
import Button from '@/components/form/Button.vue';
import {request} from '@/superagent';
import PasswordFormFields from '@/components/login/PasswordFormFields.vue';

@Component({
    components: {PasswordFormFields, Button, PasswordInputField}
  })
  export default class ChangePasswordForm extends Vue {
    public $refs!: {
      passwordFields: HTMLFormElement
    };

    private oldPassword: string = "";
    private showFormIncomplete: boolean = false;
    private showChangeError: boolean = false;
    private showChangeFailedError: boolean = false;
    private showPasswordChanged: boolean = false;

    private isValid() {
      return this.oldPassword !== "" && this.$refs.passwordFields.isValid();
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
          newPassword: this.$refs.passwordFields.getPassword()
        });
        if (response.status === 200) {
          this.showPasswordChanged = true;
          this.oldPassword = "";
          this.$refs.passwordFields.resetFields();
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
