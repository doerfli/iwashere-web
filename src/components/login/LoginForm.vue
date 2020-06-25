<template>
  <div class="loginform">
    <TextInputField :label="$t('login.username.label')" :hint-text="$t('login.username.hint')"
                    icon-left="user"
                    v-model="username" />
    <div class="field">
      <label class="label">{{$t('login.password.label')}}</label>
      <div class="control has-icons-left has-icons-right">
        <input class="input" type="text" :placeholder="$t('login.password.hint')"
               v-model="password">
        <span class="icon is-small is-left">
                              <i class="fas fa-key"></i>
                            </span>
      </div>
    </div>
    <div class="field">
      <p class="control">
        <button class="button is-primary" v-on:click="login">
          {{ $t("login.loginbutton")}}
        </button>
      </p>
    </div>
  </div>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';
  import TextInputField from '@/components/form/TextInputField.vue';
  @Component({
    components: {TextInputField}
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
