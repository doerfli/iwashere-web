<template>
  <div class="field">
    <div class="control">
      <label class="checkbox">
        <input type="checkbox"
               v-bind:checked="isChecked"
               v-on:click="toggle($event)"
               :disabled="isReadOnly()"
        />
        {{ this.getLabel() }}
      </label>
    </div>
  </div>
</template>

<script lang="ts">
import {Component} from 'vue-property-decorator';
import InputFieldBase from '@/components/form/InputFieldBase.vue';

@Component({
    components: {}
  })
  export default class CheckboxField extends InputFieldBase {
    private isChecked: boolean = false;

    public get checked() {
      return this.isChecked;
    }

    private toggle(event: any) {
      this.isChecked = !this.isChecked;
      this.$emit('input', event.target.checked);
      this.$emit('inputchanged', this.checked);
    }
  }
</script>

<style scoped>

</style>

