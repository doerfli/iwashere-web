<template>
  <div>
    <TextInputField :label="$t('locations.name')" v-model="location.name" v-on:inputchanged="$emit('formchanged')"/>
    <TextInputField :label="$t('locations.shortname')" v-model="location.shortname"
                    v-on:inputchanged="checkShortname() && $emit('formchanged')"
                    :info-text="$t('locations.shortname_hint') + ' - http:\/\/bladiblubb.com\/#\/v\/' + this.location.shortname + '/'"
                    :error-text="$t('locations.shortname_not_available')"
                    v-bind:show-error-text="!shortnameAvailable"
                    :read-only="isShortcodeReadOnly()"
    />
    <TextInputField :label="$t('locations.street')" v-model="location.street" v-on:inputchanged="$emit('formchanged')"/>
    <TextInputField :label="$t('locations.zip')" v-model="location.zip" v-on:inputchanged="$emit('formchanged')"/>
    <TextInputField :label="$t('locations.city')" v-model="location.city" v-on:inputchanged="$emit('formchanged')"/>
    <TextInputField :label="$t('locations.country')" v-model="location.country"
                    v-on:inputchanged="$emit('formchanged')"/>
    <CheckboxField :label="$t('locations.useTableNumber')" v-model="location.useTableNumber" v-on:inputchanged="$emit('formchanged')" />
    <CheckboxField :label="$t('locations.useSector')" v-model="location.useSector" v-on:inputchanged="$emit('formchanged')" />
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';
import TextInputField from '@/components/form/TextInputField.vue';
import CheckboxField from '@/components/form/CheckboxField.vue';
import LocationEntity from '@/model/locationentity';
import {request} from '@/superagent';

@Component({
  components: {
    TextInputField,
    CheckboxField,
  }
})
export default class LocationForm extends Vue {
  @Prop()
  private location!: LocationEntity;
  @Prop({default: false})
  private shortcodeReadOnly!: boolean;
  private shortnameAvailable: boolean = true;

  public isFormValid() {
    return this.location.name !== ''
        && this.shortnameAvailable
        && this.location.street !== ''
        && this.location.zip !== ''
        && this.location.city !== ''
        && this.location.country !== '';
  }

  private async checkShortname() {
    if (this.location.shortname.trim() === '') {
      this.shortnameAvailable = false;
      return;
    }
    try {
      await request.get('/api/locations/exists/' + this.location.shortname);
      this.shortnameAvailable = false;
    } catch (e) {
      this.shortnameAvailable = true;
    }
  }

  private isShortcodeReadOnly() {
    return this.shortcodeReadOnly;
  }

}
</script>

<style scoped>

</style>
