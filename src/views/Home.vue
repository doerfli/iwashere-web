<template>
  <div>
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
    <section class="container">
      <Login />
    </section>
  </div>
</template>

<script>
  import Login from '@/components/Login';

  export default {
    name: 'Home',
    components: {
      Login,
    },
  };
</script>
