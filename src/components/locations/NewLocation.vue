<template>
    <div>
        <TextInputField :label="$t('locations.name')" v-model="location.name" v-on:inputchanged="validate()"/>
        <TextInputField :label="$t('locations.shortname')" v-model="location.shortname" v-on:inputchanged="checkShortname() && validate()"
                    :info-text="$t('locations.shortname_hint') + ' - http:\/\/bladiblubb.com\/#\/v\/' + this.location.shortname + '/'"
                    :error-text="$t('locations.shortname_not_available')" v-bind:show-error-text="!shortnameAvailable"
        />
        <TextInputField :label="$t('locations.street')" v-model="location.street" v-on:inputchanged="validate()"/>
        <TextInputField :label="$t('locations.zip')" v-model="location.zip" v-on:inputchanged="validate()"/>
        <TextInputField :label="$t('locations.city')" v-model="location.city" v-on:inputchanged="validate()"/>
        <TextInputField :label="$t('locations.country')" v-model="location.country" v-on:inputchanged="validate()"/>
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
  import TextInputField from '@/components/form/TextInputField.vue';
  import LocationEntity from '@/model/locationentity';

  @Component({
    components: {TextInputField}
  })
  export default class NewLocation extends Vue {
    private location: LocationEntity = { id: null, name: "", shortname: "", street: "", zip: "", city: "", country: ""};
    private shortnameAvailable: boolean = true;
    private formValid: boolean = false;

    private async checkShortname() {
      if (this.location.shortname.trim() === "") {
        this.shortnameAvailable = false;
        return;
      }
      try {
        await request.get("/api/locations/exists/" + this.location.shortname);
        this.shortnameAvailable = false;
      } catch (e) {
        this.shortnameAvailable = true;
      }
    }

    private async validate() {
      console.log("validate");
      this.formValid =
        this.location.name !== ""
        && this.shortnameAvailable
        && this.location.street !== ""
        && this.location.zip !== ""
        && this.location.city !== ""
        && this.location.country !== "";
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
      return this.location;
    }

    private cancel() {
      this.$router.push({name: "Locations"});
    }
  }
</script>

<style scoped>

</style>
