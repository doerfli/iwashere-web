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
    </div>
  </section>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';
  import superagent from 'superagent';
  import router from '@/router';

  @Component
  export default class SignupConfirmView extends Vue {
    private confirming: boolean = true;

    public async mounted() {
      const token = this.$route.params.token;
      try {
        const response = await superagent.post(`/api/accounts/confirm/${token}`).send();
        if (response.status === 200) {
          await router.push({name: 'Home', query: { confirm: 'true' }});
        }
      } catch (e) {
        // console.log(e);
      } finally {
        this.confirming = false;
      }

    }
  }
</script>

<style scoped>

</style>
