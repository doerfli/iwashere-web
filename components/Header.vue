<template>
    <div class="container">
        <nav class="navbar" role="navigation" aria-label="main navigation">
            <div class="navbar-brand">
                <a class="navbar-item" :href="getBaseUrl()">
                  <span class="icon has-text-primary icon-space">
                      <i class="fas fa-2x fa-clipboard-list is-primary"></i>
                  </span>
                  <span class="icon has-text-primary">
                      <i class="fas fa-2x fa-user-check is-primary"></i>
                  </span>
                  <h1 class="title is-2 has-text-primary">{{ $t("title.application") }}</h1>
                </a>

                <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>
            <div class="navbar-menu">
                <div class="navbar-start">
                    <a class="navbar-item">
                        &nbsp;
                    </a>
                    <router-link to="/locations" class="navbar-item"  v-if="hasUser()">
                        {{ $t('locations.title.list') }}
                    </router-link>
                </div>

                <div class="navbar-end" v-if="hasUser()">
                    <div class="navbar-item has-dropdown  is-hoverable">
                        <span class="navbar-link">
                            {{ getUsername() }}
                        </span>

                        <div class="navbar-dropdown">
                            <router-link to="/profile" class="navbar-item">
                                {{ $t('header.profile') }}
                            </router-link>
                            <router-link to="/home" class="navbar-item">
                                Logout
                            </router-link>
                        </div>
                    </div>
                    <div class="navbar-item">

                    </div>
                </div>
            </div>
        </nav>
    </div>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';
  import { fas } from '@fortawesome/free-solid-svg-icons'

  @Component
  export default class Header extends Vue {

      public mounted() {
          if ( ! this.isPublicPage()) {
              // TODO this.$store.dispatch('account/fetchUser');
          }
      }

      private fas() {
        return fas;
      }

      private isPublicPage() {
        // TODO how does this work?
          return ["Home", "Signup", "SignupConfirm", "ResetPassword"].indexOf(this.$route.name as string) > -1;
      }

      private getBaseUrl() {
          // TODO is this correct?
          return process.env.VUE_APP_BASEURL;
      }

      private hasUser() {
        // TODO return this.$store.state.account.user !== null;
        return false;
      }

      private getUsername() {
          return this.$store.state.account.user.username;
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
    .icon-space {
      margin-right: 12px;
    }
</style>
