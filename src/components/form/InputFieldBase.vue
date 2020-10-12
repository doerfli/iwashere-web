

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';

@Component
  export default class InputFieldBase extends Vue {
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
    @Prop({default: false})
    private readOnly!: boolean;

    protected getLabel() {
      return this.label;
    }

    protected getErrorText() {
      return this.errorText;
    }

    protected isShowErrorText() {

      return this.showErrorText == null || this.showErrorText;
    }

    protected getInfoText() {
      return this.infoText;
    }

    protected hasInfoText(): boolean {
      return this.infoText != null && this.infoText.trim() !== "";
    }

    protected getHintText() {
      return this.hintText;
    }

    protected hasIconLeft() {
      return this.iconLeft != null;
    }

    protected getIconLeft() {
      return this.iconLeft;
    }

    protected getIconLeftClasses() {
      return `fas fa-${this.iconLeft}`;
    }

    protected submitOnEnter(event: KeyboardEvent) {
      if (event.key === 'Enter') {
        this.$emit('enterPressed');
      }
    }

    protected isReadOnly(): boolean {
      return this.readOnly;
    }
  }
</script>
