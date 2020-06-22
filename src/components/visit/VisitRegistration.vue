<template>
  <div>
    <h1 class="title">{{$t("visit.title.welcome", {name: this.$store.state.visit.location.name })}}</h1>
    <h2 class="subtitle">{{$t("visit.title.registration")}}</h2>
    <VisitorForm ref="form"/>
    <button class="button is-primary" v-on:click="saveVisit()">{{$t("actions.register")}}</button>
  </div>
</template>

<script lang="ts">
  import {Component, Prop, Vue} from 'vue-property-decorator';
  import VisitorForm from '@/components/visit/VisitorForm.vue';

  @Component({
    components: {
      VisitorForm
    }
  })
  export default class VisitRegistration extends Vue {

    public $refs!: {
      form: HTMLFormElement
    };

    @Prop()
    private shortname!: string;

    public mounted(): void {
      this.$store.dispatch("visit/getLocation", { shortname: this.shortname });
    }

  }
</script>

<style scoped>
  button {
    margin-top: 20px;
  }
</style>
