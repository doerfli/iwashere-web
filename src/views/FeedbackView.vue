<template>
  <section class="section">
    <div class="container">
      <h1 class="title is-1">{{ $t('feedback.title')}}</h1>
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

