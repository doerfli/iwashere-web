<template>
    <div class="container">
        <nav class="navbar" role="navigation" aria-label="main navigation">
            <div class="navbar-brand">
                <a class="navbar-item" :href="getBaseUrl()">
                    <span class="icon has-text-primary">
                        <i class="fas fa-2x fa-file-contract is-primary"></i>
                    </span>
                    <h1 class="title is-2 has-text-primary">{{ $t("title.application") }}</h1>
                </a>

                <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>
        </nav>
    </div>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';

  @Component
  export default class Header extends Vue {

      private getBaseUrl() {
          return process.env.VUE_APP_BASEURL;
      }
  }
</script>

<style scoped>
    h1 {
        margin-left: 32px;
    }
    .container {
        margin-bottom: 24px;
    }
</style>
