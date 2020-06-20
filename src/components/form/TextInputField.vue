<template>
    <div class="field">
        <label class="label">{{this.getLabel()}}</label>
        <div class="control">
            <input class="input" type="text"
                   v-bind:value="value"
                   v-on:input="$emit('input', $event.target.value)"
                   v-on:change="$emit('inputchanged', value)"
            />
        </div>
        <p class="help is-danger" v-if="isShowErrorText()">{{getErrorText()}}</p>
        <p class="help is-info" v-if="hasInfoText()">{{getInfoText()}}</p>
    </div>
</template>

<script lang="ts">
  import {Component, Prop, Vue} from 'vue-property-decorator';

  @Component
  export default class TextInputField extends Vue {
    @Prop()
    private label!: string;
    @Prop({default: ""})
    private value!: string;
    @Prop()
    private errorText!: string;
    @Prop({default: false})
    private showErrorText!: boolean;
    @Prop()
    private infoText!: string;

    private getLabel() {
      return this.label;
    }

    private getErrorText() {
      return this.errorText;
    }

    private isShowErrorText() {

      return this.showErrorText == null || this.showErrorText;
    }

    private getInfoText() {
      return this.infoText;
    }

    private hasInfoText(): boolean {
      return this.infoText != null && this.infoText.trim() !== "";
    }
  }
</script>

<style scoped>

</style>
