<template>
    <div>
        <TextInputField :label="$t('visit.firstname')" v-model="firstname" v-on:inputchanged="$emit('formchanged')"/>
        <TextInputField :label="$t('visit.lastname')" v-model="lastname" v-on:inputchanged="$emit('formchanged')"/>
        <TextInputField :label="$t('visit.email')" v-model="email" v-on:inputchanged="$emit('formchanged')"/>
        <TextInputField :label="$t('visit.phone')" v-model="phone" v-on:inputchanged="$emit('formchanged')"/>
    </div>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';
  import TextInputField from '@/components/form/TextInputField.vue';

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

    public getFormData() {
      return {
        firstname: this.firstname,
        lastname: this.lastname,
        phone: this.phone,
        email: this.email
      };
    }
  }
</script>

<style scoped>

</style>
