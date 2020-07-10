<template>
  <div>
    <ChangePassword />
  </div>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';
  import ChangePassword from '@/components/profile/ChangePassword.vue';
  @Component({
    components: {ChangePassword}
  })
  export default class Profile extends Vue {

  }
</script>

<style scoped>

</style>
