<template>
  <section class="section">
    <div class="container">
      <VisitConfirmEmail :id="visitId()" />
    </div>
  </section>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';
import VisitConfirmEmail from '@/components/visit/VisitConfirmEmail.vue';

@Component({
  components: {VisitConfirmEmail}
})
export default class VisitConfirmEmailView extends Vue {

  @Prop({default: ""})
  private id!: string;

  private visitId() {
    return this.$route.params.id;
  }

}
</script>

<style scoped>

</style>

