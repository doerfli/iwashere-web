<template>
  <footer class="footer">
    <div class="content has-text-centered">
      <p>
        <span class="icon has-text-primary">
          <i class="fas fa-copyright is-primary"></i>
        </span> Ich-war-da.net September 2020 / <router-link to="/feedback">Kontaktformular</router-link> /
        <a href="mailto:info@ich-war-da.net">info@ich-war-da.net</a>
      </p>
    </div>
  </footer>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';

@Component({
    components: {}
  })
  export default class Footer extends Vue {

  }
</script>

<style scoped>

</style>

