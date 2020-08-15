<template>
  <fragment>
    <section class="hero">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            {{ $t("title.home")}}
          </h1>
          <h2 class="subtitle">
            {{ $t("title.home_sub")}}
          </h2>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <Signup />
      </div>
    </section>
  </fragment>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import Signup from '@/components/login/Signup.vue';

@Component({
    components: {Signup}
  })
  export default class SignupView extends Vue {

  }
</script>

<style scoped>

</style>
