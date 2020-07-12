<template>
  <div>
    <TextInputField :label="$t('signup.username.label')" :hint-text="$t('signup.username.hint')"
                    icon-left="user"
                    v-model="username"
                    v-on:enterPressed="signup"
                    :error-text="$t('signup.email_invalid')"
                    v-bind:show-error-text="emailInvalid"
    />
    <PasswordFormFields ref="passwordFields"/>
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
  import PasswordFormFields from '@/components/login/PasswordFormFields.vue';

  @Component({
    components: {
      PasswordFormFields,
      TextInputField, PasswordInputField, Button
    }
  })
  export default class SignupForm extends Vue {
    public $refs!: {
      passwordFields: HTMLFormElement
    };

    private username: string = "";
    private showFormIncomplete: boolean = false;
    private showSignupError: boolean = false;
    private emailInvalid: boolean = false;

    private isValid() {
      this.emailInvalid = ! EMAIL_REGEX.test(this.username);
      return this.username !== "" && this.$refs.passwordFields.isValid();
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
          password: this.$refs.passwordFields.getPassword()
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
