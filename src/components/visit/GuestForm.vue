<template>
    <div>
        <TextInputField :label="$t('visit.name')" v-model="name" v-on:inputchanged="$emit('formchanged')"/>
        <TextInputField :label="$t('visit.email')" v-model="email" v-on:inputchanged="checkEmailValid() && $emit('formchanged')"
            :error-text="$t('visit.email_not_valid')"
            v-bind:show-error-text="!emailValid"
        />
        <TextInputField :label="$t('visit.phone')" v-model="phone" v-on:inputchanged="$emit('formchanged')"/>
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
    private name: string = "";
    private phone: string = "";
    private email: string = "";
    private emailValid: boolean = true;


    public getFormData() {
      return {
        name: this.name,
        phone: this.phone,
        email: this.email
      };
    }

    public isValid(): boolean {
        return !(this.email.trim() === "" || !this.emailValid);

    }

    private checkEmailValid() {
        this.emailValid = EMAIL_REGEX.test(this.email);
    }

    public reset() {
      this.name = "";
      this.phone = "";
      this.email = "";
      this.emailValid = true;
    }

  }
</script>

<style scoped>

</style>
