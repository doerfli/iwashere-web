<template>
  <div>
    <TextInputField :label="$t('visit.name')" v-model="name"
                    icon-left="user-edit"
                    v-on:inputchanged="checkNameValid() && $emit('formchanged')"
                    :error-text="$t('visit.name_not_valid')"
                    v-bind:show-error-text="!nameValid"
    />
    <TextInputField :label="$t('visit.email')" v-model="email"
                    type="email"
                    icon-left="envelope"
                    v-on:inputchanged="checkEmailValid() && $emit('formchanged')"
                    :error-text="$t('visit.email_not_valid')"
                    v-bind:show-error-text="!emailValid"
    />
    <TextInputField :label="$t('visit.phone')" v-model="phone"
                    type="tel"
                    icon-left="phone"
                    v-on:inputchanged="checkPhoneValid() && $emit('formchanged')"
                    :error-text="$t('visit.phone_not_valid')"
                    v-bind:show-error-text="!phoneValid"
    />
    <TextInputField :label="$t('visit.tableNumber')" v-model="tableNumber"
                    type="text"
                    icon-left="sign"
                    v-on:inputchanged="$emit('formchanged')"
                    v-if="isShowTableNumber()"
    />
    <TextInputField :label="$t('visit.sector')" v-model="sector"
                    type="text"
                    icon-left="sign"
                    v-on:inputchanged="$emit('formchanged')"
                    v-if="isShowSector()"
    />
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';
import TextInputField from '@/components/form/TextInputField.vue';
import {EMAIL_REGEX} from '@/constants';

@Component({
  components: {
    TextInputField
  }
})
export default class GuestForm extends Vue {
  @Prop({default: false})
  private showTableNumber!: boolean;
  @Prop({default: false})
  private showSector!: boolean;
  private name: string = '';
  private nameValid: boolean = true;
  private phone: string = '';
  private phoneValid: boolean = true;
  private email: string = '';
  private emailValid: boolean = true;
  private tableNumber: string|null = null;
  private sector: string|null = null;


  public getFormData() {
    return {
      name: this.name,
      phone: this.phone,
      email: this.email,
      tableNumber: this.tableNumber,
      sector: this.sector,
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
    this.tableNumber = null;
    this.sector = null;
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

  private isShowTableNumber() {
    return this.showTableNumber;
  }

  private isShowSector() {
    return this.showSector;
  }
}
</script>

<style scoped>

</style>
