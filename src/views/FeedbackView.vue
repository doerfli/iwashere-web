<template>
  <section class="section">
    <div class="container">
      <h1 class="title is-1">{{ $t('feedback.title')}}</h1>

      <div class="content">
        Sie können uns Fragen, Ideen, Kritik und natürlich auch Lob mit unserem Kontaktformular übermitteln.
        Alternativ können Sie und gerne auch eine E-Mail an <a href="mailto:info@ich-war-da.net">info@ich-war-da.net</a>
        schicken.
      </div>

      <FeedbackForm />
    </div>
  </section>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import FeedbackForm from '@/components/common/FeedbackForm.vue';

@Component({
    components: {FeedbackForm}
  })
  export default class FeedbackView extends Vue {

  }
</script>

<style scoped>

</style>

