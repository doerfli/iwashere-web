<template>
  <div>
    <TextInputField :label="$t('visit.name')" v-model="name"
                    v-on:inputchanged="checkNameValid() && $emit('formchanged')"
                    :error-text="$t('visit.name_not_valid')"
                    v-bind:show-error-text="!nameValid"
    />
    <TextInputField :label="$t('visit.email')" v-model="email"
                    v-on:inputchanged="checkEmailValid() && $emit('formchanged')"
                    :error-text="$t('visit.email_not_valid')"
                    v-bind:show-error-text="!emailValid"
    />
    <TextInputField :label="$t('visit.phone')" v-model="phone"
                    v-on:inputchanged="checkPhoneValid() && $emit('formchanged')"
                    :error-text="$t('visit.phone_not_valid')"
                    v-bind:show-error-text="!phoneValid"
    />
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import TextInputField from '@/components/form/TextInputField.vue';
import {EMAIL_REGEX} from '@/constants';

@Component({
  components: {
    TextInputField
  }
})
export default class GuestForm extends Vue {
  private name: string = '';
  private nameValid: boolean = true;
  private phone: string = '';
  private phoneValid: boolean = true;
  private email: string = '';
  private emailValid: boolean = true;


  public getFormData() {
    return {
      name: this.name,
      phone: this.phone,
      email: this.email
    };
  }

  public isValid(): boolean {
    return this.name !== "" && this.emailValid && this.phoneValid && this.nameValid;

  }

  public reset() {
    this.name = '';
    this.nameValid = true;
    this.phone = '';
    this.phoneValid = true;
    this.email = '';
    this.emailValid = true;
  }

  private checkEmailValid() {
    this.emailValid = this.email !== "" && EMAIL_REGEX.test(this.email);
  }

  private checkNameValid() {
    this.nameValid = this.name !== "";
  }

  private checkPhoneValid() {
    this.phoneValid = this.phone !== "";
  }

}
</script>

<style scoped>

</style>
