<template>
  <div>
    <div v-if="!sent">
      <TextInputField :label="$t('feedback.name')" v-model="name"/>
      <TextInputField :label="$t('feedback.email')" v-model="email"/>
      <TextAreaField :label="$t('feedback.message')" v-model="message"/>
      <Button :title="$t('feedback.submit')"
              v-on:click="submit()" v-if="!sending"/>
      <span class="icon has-text-info" v-if="sending">
        <i class="fas fa-3x fa-spinner fa-spin"></i>
      </span>
    </div>
    <div v-if="sent">
      <div class="notification is-success">
        {{ $t('feedback.success' )}}
      </div>
      <Button :title="$t('actions.back')"
              v-on:click="back()"/>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';
import Button from '@/components/form/Button.vue';
import TextInputField from '@/components/form/TextInputField.vue';
import TextAreaField from '@/components/form/TextAreaField.vue';
import request from 'superagent';

@Component({
  components: {TextAreaField, TextInputField, Button}
})
export default class FeedbackForm extends Vue {

  @Prop()
  private name!: string;
  @Prop()
  private email!: string;
  @Prop()
  private message!: string;
  private sending: boolean = false;
  private sent: boolean = false;

  private async submit() {
    const data = { name: this.name, email: this.email, message: this.message };
    this.sending = true;
    const response = await request.post(
        "/api/feedback"
    ).send(data);
    this.sending = false;
    this.sent = true;
  }

  private back() {
    this.name = "";
    this.email = "";
    this.message = "";
    this.sending = false;
    this.sent = false;
  }
}
</script>

<style scoped>

</style>

