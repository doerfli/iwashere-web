<template>
    <div>
        <LocationForm v-bind:location="location" v-on:formchanged="validate()" ref="locationForm"/>
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
import LocationEntity from '@/model/locationentity';
import LocationForm from '@/components/locations/LocationForm.vue';

@Component({
    components: {LocationForm}
  })
  export default class NewLocation extends Vue {
    public $refs!: {
      locationForm: HTMLFormElement
    };

    private location: LocationEntity = {
      id: null, name: "", shortname: "", street: "", zip: "", city: "", country: "",
      useTableNumber: false, useSector: false
    };
    private formValid: boolean = false;

    private async save() {
      const data = this.getFormData();
      const response = await request.post(
        "/api/locations"
      ).send(data);
      if (response.status === 200) {
        await this.$router.push({name: "Locations"});
      }
    }

    private validate() {
        this.formValid = this.$refs.locationForm.isFormValid();
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
    button {
        margin-top: 12px;
    }
</style>
