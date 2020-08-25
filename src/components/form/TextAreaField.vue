<template>
  <div class="field">
    <label class="label">{{this.getLabel()}}</label>
    <div v-bind:class="{ control: true }">
      <textarea :class="{textarea: true, 'is-danger': isShowErrorText()}"
                v-bind:value="value"
                :placeholder="getHintText()"
                :rows="getRows()"
                v-on:input="$emit('input', $event.target.value)"
                v-on:change="$emit('inputchanged', value)"
                v-on:keypress="submitOnEnter($event)"
      />
    </div>
    <p class="help is-danger" v-if="isShowErrorText()">{{getErrorText()}}</p>
    <p class="help is-info" v-if="hasInfoText()">{{getInfoText()}}</p>
  </div>
</template>

<script lang="ts">
import {Component, Prop} from 'vue-property-decorator';
import InputFieldBase from '@/components/form/InputFieldBase.vue';

@Component({
    components: {}
  })
  export default class TextAreaField extends InputFieldBase {
    @Prop({default: 10})
    private rows!: number;

    private getRows() {
      return this.rows;
    }
  }
</script>

<style scoped>

</style>

