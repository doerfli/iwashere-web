<template>
  <section class="section">
    <div class="container">
      <VisitRegistration :shortname="locationShortname()" />
    </div>
  </section>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';
import VisitRegistration from '@/components/visit/VisitRegistration.vue';

@Component({
    components: {
      VisitRegistration,
    }
  })
  export default class VisitRegistrationView extends Vue {
    @Prop({default: ""})
    private shortname!: string;

    // public mounted(): void {
    //   console.log(this.$route.params.shortname);
    // }

    private locationShortname() {
      // console.log(this.$route.params.shortname);
      return this.$route.params.shortname;
    }
  }
</script>

<style scoped>
</style>
