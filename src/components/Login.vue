<template>
    <div>
        <div class="columns">
            <div class="column is-half">
                <div class="loginform">
                    <div class="field">
                        <label class="label">{{$t('login.username.label')}}</label>
                        <div class="control has-icons-left has-icons-right">
                            <input class="input" type="text" :placeholder="$t('login.username.hint')"
                                   v-model="username">
                            <span class="icon is-small is-left">
                              <i class="fas fa-user"></i>
                            </span>
                        </div>
                    </div>
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
            </div>
        </div>
    </div>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';

  @Component
    export default class Login extends Vue {
        private username: string = "";
        private password: string = "";

        private login() {
          // TODO validate input
          this.$store.dispatch("account/login", {username: this.username, password: this.password}).then((result) => {
            this.password = '';
          });
        }
    }
</script>

<style scoped>

</style>
