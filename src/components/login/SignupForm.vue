<template>
  <div>
    <TextInputField :label="$t('signup.username.label')" :hint-text="$t('signup.username.hint')"
                    icon-left="user"
                    v-model="username"
                    v-on:enterPressed="signup"
                    :error-text="$t('signup.email_invalid')"
                    v-bind:show-error-text="emailInvalid"
    />
    <PasswordInputField :label="$t('signup.password.label')" :hint-text="$t('signup.password.hint')"
                        icon-left="key"
                        v-model="password"
                        v-on:enterPressed="signup"
                        :error-text="$t('signup.password_too_short', { length: MINPASSWORDLENGTH })"
                        v-bind:show-error-text="passwordTooShort"
    />
    <PasswordInputField :label="$t('signup.passwordConfirmation.label')" :hint-text="$t('signup.passwordConfirmation.hint')"
                        icon-left="key"
                        v-model="passwordConfirmation"
                        v-on:enterPressed="signup"
                        :error-text="$t('signup.passwords_dontmatch')"
                        v-bind:show-error-text="passwordsDontMatch"
    />
    <div class="notification is-warning" v-if="showFormIncomplete">
      {{$t('signup.form_incomplete')}}
    </div>
    <div class="notification is-danger" v-if="showSignupError">
      {{$t('signup.signup_error')}}
    </div>
    <Button :title="$t('signup.submitButton')" v-on:click="signup" />
  </div>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';
  import Button from '@/components/form/Button.vue';
  import PasswordInputField from '@/components/form/PasswordInputField.vue';
  import TextInputField from '@/components/form/TextInputField.vue';
  import superagent from 'superagent';
  import router from '@/router';
  import { EMAIL_REGEX } from '@/constants';

  @Component({
    components: {
      TextInputField, PasswordInputField, Button
    }
  })
  export default class SignupForm extends Vue {
    private MINPASSWORDLENGTH = Number(process.env.VUE_APP_PASSWORD_MIN_LENGTH);
    private username: string = "";
    private password: string = "";
    private passwordConfirmation: string = "";
    private passwordsDontMatch: boolean = false;
    private passwordTooShort: boolean = false;
    private showFormIncomplete: boolean = false;
    private showSignupError: boolean = false;
    private emailInvalid: boolean = false;

    private isValid() {
      this.emailInvalid = ! EMAIL_REGEX.test(this.username);
      this.passwordsDontMatch = this.password !== this.passwordConfirmation;
      this.passwordTooShort = this.password.length < this.MINPASSWORDLENGTH;
      return this.username !== "" && this.password !== "" && this.passwordConfirmation !== "" && ! this.passwordTooShort
        && ! this.passwordsDontMatch && ! this.emailInvalid;
    }

    private async signup() {
      this.showFormIncomplete = false;
      this.showSignupError = false;

      if (!this.isValid()) {
        this.showFormIncomplete = true;
        return;
      }

      await this.submitLoginData();
    }

    private async submitLoginData() {
      try {
        const response = await superagent.post('/api/accounts/signup').send({
          username: this.username,
          password: this.password
        });
        if (response.status === 200) {
          await router.push({name: 'Home', query: { signup: 'true' }});
        } else {
          this.showSignupError = true;
        }
      } catch (e) {
        // console.log(e);
        this.showSignupError = true;
      }
    }

  }
</script>

<style scoped>

</style>
