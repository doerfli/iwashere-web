<template>
  <div class="field">
    <label class="label">{{this.getLabel()}}</label>
    <div v-bind:class="{ control: true, 'has-icons-left': hasIconLeft() }">
      <input :class="{input: true, 'is-danger': isShowErrorText()}"
             :type="getType()"
             v-bind:value="value"
             :placeholder="getHintText()"
             v-on:input="$emit('input', $event.target.value)"
             v-on:change="$emit('inputchanged', value)"
             v-on:keypress="submitOnEnter($event)"
      />
      <span class="icon is-small is-left" v-if="hasIconLeft()">
        <i :class="getIconLeftClasses()"></i>
      </span>
    </div>
    <p class="help is-danger" v-if="isShowErrorText()">{{getErrorText()}}</p>
    <p class="help is-info" v-if="hasInfoText()">{{getInfoText()}}</p>
  </div>
</template>

<script lang="ts">
import {Component, Prop} from 'vue-property-decorator';
import InputFieldBase from '@/components/form/InputFieldBase.vue';

@Component
  export default class TextInputField extends InputFieldBase {

    @Prop({default: "text"})
    private type!: string;

    private getType() {
      return this.type;
    }
  }
</script>

<style scoped>

</style>
