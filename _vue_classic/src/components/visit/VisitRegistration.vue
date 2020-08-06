<template>
  <div>
    <h1 class="title">{{$t("visit.title.welcome", {name: this.$store.state.visit.location.name })}}</h1>
    <h2 class="subtitle">{{$t("visit.title.registration")}}</h2>
    <GuestForm ref="form"/>
    <div class="field is-grouped">
      <div class="control">
        <button class="button is-primary" v-on:click="saveVisit()" v-bind:disabled="!formValid()">{{$t("actions.register")}}</button>
      </div>
    </div>
    <div class="notification is-success" v-if="dataSubmitted">
      <div class="columns">
        <div class="column is-1">
          <span class="icon is-large">
            <i class="fas fa-3x fa-check-circle"></i>
          </span>
        </div>
        <div class="column">
          {{$t('visit.data_submitted')}}<br/>
          {{$t('visit.data_submitted_retention_policy')}}
        </div>
      </div>
    </div>
    <div class="notification is-danger" v-if="errorDuringSubmission">
      <div class="columns">
        <div class="column is-1">
          <span class="icon is-large">
            <i class="fas fa-3x fa-exclamation-circle"></i>
          </span>
        </div>
        <div class="column">
          {{$t('visit.data_submission_error')}}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import {Component, Prop, Vue} from 'vue-property-decorator';
  import GuestForm from '@/components/visit/GuestForm.vue';
  import {request} from '@/superagent';

  @Component({
    components: {
      GuestForm
    }
  })
  export default class VisitRegistration extends Vue {

    public $refs!: {
      form: HTMLFormElement
    };

    @Prop()
    private shortname!: string;
    private dataSubmitted: boolean = false;
    private errorDuringSubmission: boolean = false;

    public mounted(): void {
      this.$store.dispatch("visit/getLocation", { shortname: this.shortname });
    }

    private formValid(): boolean {
      // noinspection JSIncompatibleTypesComparison
      if (undefined === this.$refs.form) {
        return false;
      }
      return this.$refs.form.isValid() && ! this.dataSubmitted;
    }

    private async saveVisit() {
      this.errorDuringSubmission = false;
      const data = this.$refs.form.getFormData();
      data.locationShortname = this.shortname;
      try {
        const response = await request.post(
          "/api/visits"
        ).send(data);
        console.log(0);
        console.log(response);
        if (response.status === 200) {
          this.dataSubmitted = true;
        } else {
          this.errorDuringSubmission = true;
        }
      } catch (e) {
        console.log(1);
        console.log(e);
        this.errorDuringSubmission = true;
      }

    }

  }
</script>

<style scoped>
  button {
    margin-top: 20px;
  }
  .textWithIconLeft {
    margin-left: 48px;
  }
</style>
