<template>
  <fragment>
    <PasswordInputField :label="$t('signup.password.label')" :hint-text="$t('signup.password.hint')"
                        icon-left="key"
                        v-model="password"
                        :error-text="$t('signup.password_too_short', { length: MINPASSWORDLENGTH })"
                        v-bind:show-error-text="passwordTooShort"
    />
    <PasswordInputField :label="$t('signup.passwordConfirmation.label')"
                        :hint-text="$t('signup.passwordConfirmation.hint')"
                        icon-left="key"
                        v-model="passwordConfirmation"
                        :error-text="$t('signup.passwords_dontmatch')"
                        v-bind:show-error-text="passwordsDontMatch"
    />
  </fragment>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';
  import PasswordInputField from '@/components/form/PasswordInputField.vue';
  // @ts-ignore
  import {Fragment} from 'vue-fragment';

  @Component({
    components: {PasswordInputField, Fragment}
  })
  export default class PasswordFormFields extends Vue {
    private MINPASSWORDLENGTH = Number(process.env.VUE_APP_PASSWORD_MIN_LENGTH);
    private password: string = '';
    private passwordConfirmation: string = '';
    private passwordsDontMatch: boolean = false;
    private passwordTooShort: boolean = false;

    public getPassword() {
      return this.password;
    }

    public isValid() {
      this.passwordsDontMatch = this.password !== this.passwordConfirmation;
      this.passwordTooShort = this.password.length < this.MINPASSWORDLENGTH;
      return this.password !== '' && this.passwordConfirmation !== '' && !this.passwordTooShort
        && !this.passwordsDontMatch;
    }

    public resetFields() {
      this.password = '';
      this.passwordConfirmation = '';
    }
  }
</script>

<style scoped>

</style>
