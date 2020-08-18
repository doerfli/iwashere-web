<template>
  <tr>
    <td>
      {{getGuest().guest_name}}
    </td>
    <td>
      <fragment v-if="hasEmail()">
        <span :class="{ icon: true, 'has-text-success': emailVerified(), 'has-text-danger': !emailVerified()}">
          <i class="fas fa-envelope"></i>
        </span>
        {{getGuest().guest_email}}
      </fragment>
    </td>
    <td>
      <fragment v-if="hasPhone()">
        <span :class="{ icon: true, 'has-text-success': phoneVerified(), 'has-text-danger': !phoneVerified()}">
          <i class="fas fa-phone"></i>
        </span>
        {{getGuest().guest_phone}}
      </fragment>
    </td>
  </tr>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';
import VisitEntity from '@/model/visitentity';

@Component
  export default class Guest extends Vue {
    @Prop()
    private guest!: VisitEntity;

    private getGuest() {
      return this.guest;
    }

    private hasEmail(): boolean {
      return this.guest.guest_email != "";
    }

    private hasPhone(): boolean {
      return this.guest.guest_phone != "";
    }

    private emailVerified(): boolean {
      return this.guest.verifiedEmail;
    }

    private phoneVerified(): boolean {
      return this.guest.verifiedPhone;
    }
  }
</script>

<style scoped>

</style>
