<template>
  <section class="section">
    <div class="container">
      <article class="message is-info" v-if="confirming">
        <div class="message-header">
          <p>{{$t('signupConfirm.confirming')}}</p>
        </div>
        <div class="message-body">
          <span class="icon has-text-primary">
            <i class="fas fa-spinner fa-spin fa-3x"></i>
          </span>
        </div>
      </article>
      <div class="notification is-success" v-if="showConfirmationSuccess">
        {{$t('signupConfirm.confirm_success')}}
      </div>
      <div class="notification is-warning" v-if="showInvalidToken">
        {{$t('signupConfirm.invalid_token')}}
      </div>
      <div class="notification is-warning" v-if="showTokenExpired">
        {{$t('signupConfirm.token_expired')}}
      </div>
      <div class="notification is-danger" v-if="showError">
        {{$t('signupConfirm.error')}}
      </div>
      <div>
        <router-link to="/login">{{$t('actions.back')}}</router-link>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import superagent from 'superagent';

@Component
  export default class SignupConfirmView extends Vue {
    private confirming: boolean = true;
    private showConfirmationSuccess: boolean = false;
    private showInvalidToken: boolean = false;
    private showError: boolean = false;
    private showTokenExpired: boolean = false;

    public async mounted() {
      const token = this.$route.params.token;
      try {
        const response = await superagent.post(`/api/accounts/confirm/${token}`).send();
        if (response.status === 200) {
          this.showConfirmationSuccess = true;
        }
      } catch (e) {
        if (e.response.status === 400) {
          this.showInvalidToken = true;
        } else if (e.response.status === 409) {
          this.showInvalidToken = true;
        } else if (e.response.status === 401) {
          this.showTokenExpired = true;
        } else {
          this.showError = true;
        }
      } finally {
        this.confirming = false;
      }
    }
  }
</script>

<style scoped>

</style>
