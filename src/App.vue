<template>
  <div id="app">
    <Header />
    <router-view/>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import Header from './components/Header.vue';

@Component({
    components: {
      Header
    },
  })
  export default class App extends Vue {}
</script>

<style lang="scss">
  @import "./assets/main.scss";
  @import './../node_modules/bulma/bulma.sass';
  @import './../node_modules/@fortawesome/fontawesome-free/css/all.css';
  @import './../node_modules/@creativebulma/bulma-tooltip/dist/bulma-tooltip.css';

  #app {
  }
</style>
