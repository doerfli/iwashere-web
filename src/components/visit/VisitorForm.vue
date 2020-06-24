<template>
    <div>
        <TextInputField :label="$t('visit.firstname')" v-model="firstname" v-on:inputchanged="$emit('formchanged')"/>
        <TextInputField :label="$t('visit.lastname')" v-model="lastname" v-on:inputchanged="$emit('formchanged')"/>
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

  const EMAIL_REGEX = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

  @Component({
    components: {
      TextInputField
    }
  })
  export default class VisitorForm extends Vue {
    private firstname: string = "";
    private lastname: string = "";
    private phone: string = "";
    private email: string = "";
    private emailValid: boolean = true;


    public getFormData() {
      return {
        firstname: this.firstname,
        lastname: this.lastname,
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

  }
</script>

<style scoped>

</style>
