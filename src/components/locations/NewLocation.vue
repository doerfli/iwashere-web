<template>
    <div>
        <TextInputField :label="$t('locations.name')" v-model="name" v-on:inputchanged="validate()"/>
        <TextInputField :label="$t('locations.shortname')" v-model="shortname" v-on:inputchanged="checkShortname() && validate()"
                    :info-text="$t('locations.shortname_hint') + ' - http:\/\/bladiblubb.com\/#\/v\/' + this.shortname + '/'"
                    :error-text="$t('locations.shortname_not_available')" v-bind:show-error-text="!shortnameAvailable"
        />
        <TextInputField :label="$t('locations.street')" v-model="street" v-on:inputchanged="validate()"/>
        <TextInputField :label="$t('locations.zip')" v-model="zip" v-on:inputchanged="validate()"/>
        <TextInputField :label="$t('locations.city')" v-model="city" v-on:inputchanged="validate()"/>
        <TextInputField :label="$t('locations.country')" v-model="country" v-on:inputchanged="validate()"/>
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
  import TextInputField from '@/components/form/TextInputField.vue';
  @Component({
    components: {TextInputField}
  })
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
      console.log("validate");
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
