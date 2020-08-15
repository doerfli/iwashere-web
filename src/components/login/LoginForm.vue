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
    <div class="notification is-danger" v-if="showAccountNotConfirmed">
      {{$t('login.account_not_confirmed')}}
    </div>
    <div class="field">
      <Button :title="$t('login.loginbutton')" v-on:click="login" />
    </div>

    <div class="links">
      <router-link to="/signup">
        {{$t('login.signup_link')}}
      </router-link>
      |
      <a v-on:click="passwordForgotten()">
        {{$t('login.forgotten_password.link')}}
      </a>
    </div>

    <div class="notification is-danger" v-if="showUsernameEmptyError">
      {{$t('login.forgotten_password.username_empty')}}
    </div>
    <div class="notification is-success" v-if="showPasswordResetSent">
      {{$t('login.forgotten_password.reset_sent')}}
    </div>
    <div class="notification is-danger" v-if="showPasswordResetError">
      {{$t('login.forgotten_password.error')}}
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import TextInputField from '@/components/form/TextInputField.vue';
import PasswordInputField from '@/components/form/PasswordInputField.vue';
import Button from '@/components/form/Button.vue';
import router from '@/router';
import superagent from 'superagent';
import {request} from '@/superagent';

@Component({
    components: {Button, PasswordInputField, TextInputField}
  })
  export default class LoginForm extends Vue {
    private username: string = "";
    private password: string = "";
    private showFormIncomplete: boolean = false;
    private showLoginError: boolean = false;
    private showAccountNotConfirmed: boolean = false;
    private showUsernameEmptyError: boolean = false;
    private showPasswordResetSent: boolean = false;
    private showPasswordResetError: boolean = false;

    private isValid() {
      return this.username !== "" && this.password !== "";
    }

    private async login() {
      this.showFormIncomplete = false;
      this.showLoginError = false;
      this.showAccountNotConfirmed = false;

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
        console.log("login successful");
        await this.$store.dispatch("account/fetchUser");
        await router.push({name: 'Locations'});
      } catch (e) {
        // console.log(e.message);
        console.log(e.response);
        if (e.response.status === 425) {
          this.showAccountNotConfirmed = true;
        } else {
          this.showLoginError = true;
        }
      }
    }

    private async passwordForgotten() {
      this.showUsernameEmptyError = false;
      this.showPasswordResetSent = false;
      this.showPasswordResetError = false;

      if (this.username === "") {
        this.showUsernameEmptyError = true;
        return;
      }

      try {
        await request.post('/api/accounts/forgotPassword').send({
          username: this.username
        });
        console.log("password reset successful");
        this.showPasswordResetSent = true;
      } catch (e) {
        console.log(e.response);
        this.showPasswordResetError = true;
      }
    }
  }
</script>

<style scoped>
  .links {
    padding-bottom: 1em;
  }
</style>
