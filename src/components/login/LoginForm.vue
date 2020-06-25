<template>
  <div class="loginform">
    <TextInputField :label="$t('login.username.label')" :hint-text="$t('login.username.hint')"
                    icon-left="user"
                    v-model="username"
                    v-on:enterPressed="login"
    />
    <PasswordInputField :label="$t('login.password.label')" :hint-text="$t('login.password.hint')"
                        icon-left="key"
                        v-model="password"
                        v-on:enterPressed="login"
    />
    <div class="notification is-warning" v-if="showFormIncomplete">
      {{$t('login.form_incomplete')}}
    </div>
    <div class="notification is-danger" v-if="showLoginError">
      {{$t('login.login_error')}}
    </div>
    <Button :title="$t('login.loginbutton')" v-on:click="login" />
  </div>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';
  import TextInputField from '@/components/form/TextInputField.vue';
  import PasswordInputField from '@/components/form/PasswordInputField.vue';
  import Button from '@/components/form/Button.vue';
  import router from '@/router';
  import superagent from 'superagent';

  @Component({
    components: {Button, PasswordInputField, TextInputField}
  })
  export default class LoginForm extends Vue {
    private username: string = "";
    private password: string = "";
    private showFormIncomplete: boolean = false;
    private showLoginError: boolean = false;

    private isValid() {
      return this.username !== "" && this.password !== "";
    }

    private async login() {
      this.showFormIncomplete = false;
      this.showLoginError = false;

      if (!this.isValid()) {
        this.showFormIncomplete = true;
        return;
      }

      await this.submitLoginData();
    }

    private async submitLoginData() {
      const form = new FormData();
      form.append('username', this.username);
      form.append('password', this.password);
      try {
        const response = await superagent.post('/api/login').send(form);
        console.log(response);
        if (response.status === 200) {
          router.push({name: 'Locations'});
        } else {
          this.showLoginError = true;
        }
      } catch (e) {
        console.log(e);
        this.showLoginError = true;
      }
    }
  }
</script>

<style scoped>

</style>
