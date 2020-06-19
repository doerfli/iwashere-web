<template>
    <div>
        <div class="field">
            <label class="label">{{$t("locations.name")}}</label>
            <div class="control">
                <input class="input" type="text"
                       v-model="name"
                       v-on:change="validate()">
            </div>
        </div>
        <div class="field">
            <label class="label">{{$t("locations.shortname")}}</label>
            <div class="control">
                <input v-bind:class="{input:true,'is-danger':!shortnameAvailable}" type="text"
                       v-model="shortname"
                       v-on:change="checkShortname() && validate()">
            </div>
            <p class="help is-danger" v-if="!shortnameAvailable">{{$t("locations.shortname_not_available")}}</p>
            <p class="help is-info">{{$t("locations.shortname_hint")}} - http://bladiblubb.com/#/v/{{this.shortname}}/</p>
        </div>
        <div class="field">
            <label class="label">{{$t("locations.street")}}</label>
            <div class="control">
                <input class="input" type="text"
                       v-model="street"
                       v-on:change="validate()">
            </div>
        </div>
        <div class="field">
            <label class="label">{{$t("locations.zip")}}</label>
            <div class="control">
                <input class="input" type="text"
                       v-model="zip"
                       v-on:change="validate()">
            </div>
        </div>
        <div class="field">
            <label class="label">{{$t("locations.city")}}</label>
            <div class="control">
                <input class="input" type="text"
                       v-model="city"
                       v-on:change="validate()">
            </div>
        </div>
        <div class="field">
            <label class="label">{{$t("locations.country")}}</label>
            <div class="control">
                <input class="input" type="text"
                       v-model="country"
                       v-on:change="validate()">
            </div>
        </div>
        <div class="field is-grouped">
            <div class="control">
                <button class="button is-link" v-on:click="save()" v-bind:disabled="!formValid">{{$t("actions.save")}}</button>
            </div>
            <div class="control">
                <button class="button is-link is-light" v-on:click="cancel()">{{$t("actions.cancel")}}</button>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';
  import {request} from '@/superagent';
  import router from '@/router';

  @Component
  export default class NewLocation extends Vue {
    private name: string = "";
    private shortname: string = "";
    private shortnameAvailable: boolean = true;
    private street: string = "";
    private zip: string = "";
    private city: string = "";
    private country: string = "";
    private formValid: boolean = false;

    private async checkShortname() {
      if (this.shortname.trim() === "") {
        this.shortnameAvailable = false;
        return;
      }
      try {
        await request.get("/api/locations/exists/" + this.shortname);
        this.shortnameAvailable = false;
      } catch (e) {
        this.shortnameAvailable = true;
      }
    }

    private async validate() {
      this.formValid =
        this.name !== ""
        && this.shortnameAvailable
        && this.street !== ""
        && this.zip !== ""
        && this.city !== ""
        && this.country !== "";
    }

    private async save() {
      const data = this.getFormData();
      const response = await request.post(
        "/api/locations"
      ).send(data);
      if (response.status === 200) {
        await this.$router.push({name: "Locations"});
      }
    }

    private getFormData() {
      return {
        name: this.name,
        shortname: this.shortname,
        street: this.street,
        zip: this.zip,
        city: this.city,
        country: this.country
      };
    }

    private cancel() {
      this.$router.push({name: "Locations"});
    }
  }
</script>

<style scoped>

</style>
