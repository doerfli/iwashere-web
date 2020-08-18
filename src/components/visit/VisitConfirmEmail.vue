<template>
  <section class="section">
    <div class="container">
      <article class="message is-info" v-if="confirming">
        <div class="message-header">
          <p>{{$t('visitConfirm.confirming')}}</p>
        </div>
        <div class="message-body">
          <span class="icon has-text-primary">
            <i class="fas fa-spinner fa-spin fa-3x"></i>
          </span>
        </div>
      </article>
      <article class="message is-success" v-if="confirmed">
        <div class="message-header">
          <p>{{$t('visitConfirm.confirmedTitle')}}</p>
        </div>
        <div class="message-body">
          {{$t('visitConfirm.confirmedText')}}
        </div>
      </article>
    </div>
  </section>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';
import superagent from 'superagent';

@Component({
    components: {}
  })
  export default class VisitConfirmEmail extends Vue {
    @Prop({default: ""})
    private id!: string;

    private confirming: boolean = true;
    private confirmed: boolean = false;

    public async mounted() {
      try {
        const response = await superagent.put(`/api/visits/${this.id}/verify/email`).send();
        if (response.status === 200) {
          this.confirmed = true;
        }
      } catch (e) {
        console.log(e);
      } finally {
        this.confirming = false;
      }
    }
  }
</script>

<style scoped>

</style>

