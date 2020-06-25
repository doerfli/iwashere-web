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
    <Button :title="$t('login.loginbutton')" v-on:click="login" />
  </div>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';
  import TextInputField from '@/components/form/TextInputField.vue';
  import PasswordInputField from '@/components/form/PasswordInputField.vue';
  import Button from '@/components/form/Button.vue';
  @Component({
    components: {Button, PasswordInputField, TextInputField}
  })
  export default class LoginForm extends Vue {
    private username: string = "";
    private password: string = "";

    private login() {
      // TODO validate input
      this.$store.dispatch('account/login', {username: this.username, password: this.password}).then((result) => {
        this.password = '';
      });
    }
  }
</script>

<style scoped>

</style>
