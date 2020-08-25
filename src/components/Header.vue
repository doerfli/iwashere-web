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
          <h1 class="title is-2 has-text-primary">{{ $t("title.application") }}
            <span class="tag is-danger is-light is-medium">&beta;eta</span>
          </h1>
        </a>
        <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false"
           v-on:click="toggleMenu()" ref="navBurger">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div class="navbar-menu" ref="navMenu">
        <div class="navbar-start">
          <router-link to="/locations" class="navbar-item" v-if="hasUser()" @click.native="toggleMenu">
            {{ $t('locations.title.list') }}
          </router-link>
          <router-link to="/faq" class="navbar-item" @click.native="toggleMenu">
            {{ $t('title.faq') }}
          </router-link>
          <router-link to="/feedback" class="navbar-item" @click.native="toggleMenu">
            {{ $t('title.feedback') }}
          </router-link>
        </div>

        <div class="navbar-end" v-if="hasUser()">
          <div class="navbar-item has-dropdown is-hoverable">
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

@Component
export default class Header extends Vue {

  public $refs!: {
    navMenu: HTMLFormElement,
    navBurger: HTMLFormElement
  };

  public mounted() {
    if (!this.isPublicPage()) {
      this.$store.dispatch('account/fetchUser');
    }
  }

  private isPublicPage() {
    return [
      'Home', 'Signup', 'SignupConfirm', 'ResetPassword', 'RegisterVisit', 'ConfirmVisitEmail', 'Faq', 'Feedback'
    ].indexOf(this.$route.name as string) > -1;
  }

  private getBaseUrl() {
    return process.env.VUE_APP_BASEURL;
  }

  private hasUser() {
    return this.$store.state.account.user !== null;
  }

  private getUsername() {
    return this.$store.state.account.user.username;
  }

  private toggleMenu() {
    this.$refs.navMenu.classList.toggle("is-active");
    this.$refs.navBurger.classList.toggle("is-active");
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
