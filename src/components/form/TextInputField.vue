<template>
    <div class="field">
        <label class="label">{{this.getLabel()}}</label>
        <div v-bind:class="{ control: true, 'has-icons-left': hasIconLeft() }">
            <input class="input" type="text"
                   v-bind:value="value"
                   :placeholder="getHintText()"
                   v-on:input="$emit('input', $event.target.value)"
                   v-on:change="$emit('inputchanged', value)"
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
    @Prop()
    private hintText!: string;
    @Prop()
    private iconLeft!: string;

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

    private getHintText() {
        return this.hintText;
    }

    private hasIconLeft() {
        return this.iconLeft != null;
    }

    private getIconLeft() {
        return this.iconLeft;
    }

      private getIconLeftClasses() {
          return `fas fa-${this.iconLeft}`;
      }
  }
</script>

<style scoped>

</style>
