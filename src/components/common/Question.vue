<template>
  <article class="message">
    <div class="message-header">
      <p>{{ this.getQuestion() }}</p>
    </div>
    <div class="message-body">
      {{ this.getAnswer() }}
    </div>
  </article>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';

@Component({
    components: {}
  })
  export default class Question extends Vue {
    @Prop()
    private question!: string;
    @Prop()
    private answer!: string;

    private getQuestion(): string {
      return this.question;
    }

    private getAnswer(): string {
      return this.answer;
    }
  }
</script>

<style scoped>

</style>

