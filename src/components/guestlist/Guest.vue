<template>
  <tr>
    <td>
      {{getGuest().guest_name}}
    </td>
    <td>
      <template v-if="hasEmail()">
        <span :class="{ icon: true, 'has-text-success': emailVerified(), 'has-text-danger': !emailVerified(), 'has-tooltip-left': true}"
              :data-tooltip="emailVerifiedText()">
          <i class="fas fa-envelope"></i>
        </span>
        {{getGuest().guest_email}}
        <span class="content" v-if="!emailVerified()">
          <small>
            &nbsp;
            <a v-on:click="confirmEmail()">
              {{ $t('guestlist.verify') }}
            </a>
          </small>
        </span>
      </template>
    </td>
    <td>
      <template v-if="hasPhone()">
        <span :class="{ icon: true, 'has-text-success': phoneVerified(), 'has-text-danger': !phoneVerified(), 'has-tooltip-left': true}"
              :data-tooltip="phoneVerifiedText()">
          <i class="fas fa-phone"></i>
        </span>
        {{getGuest().guest_phone}}
        <span class="content" v-if="!phoneVerified()">
          <small>
            <a v-on:click="confirmPhone()">
              {{ $t('guestlist.verify') }}
            </a>
          </small>
        </span>
      </template>
    </td>
  </tr>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';
import VisitEntity from '@/model/visitentity';
import superagent from 'superagent';

@Component({
    components: {
    }
  })
  export default class Guest extends Vue {
    @Prop()
    private visit!: VisitEntity;

    private getGuest() {
      return this.visit;
    }

    private hasEmail(): boolean {
      return this.visit.guest_email !== "";
    }

    private hasPhone(): boolean {
      return this.visit.guest_phone !== "";
    }

    private emailVerified(): boolean {
      return this.visit.verifiedEmail;
    }

    private phoneVerified(): boolean {
      return this.visit.verifiedPhone;
    }

    private phoneVerifiedText() {
      return this.verifiedText(this.phoneVerified());
    }

    private emailVerifiedText() {
      return this.verifiedText(this.emailVerified());
    }

    private verifiedText(status: boolean) {
      if (status) {
        return this.$t('guestlist.verified');
      } else {
        return this.$t('guestlist.not_verified');
      }
    }

    private async confirmEmail() {
      try {
        const response = await superagent.put(`/api/visits/${this.visit.id}/verify/email`).send();
        if (response.status === 200) {
          await this.$store.dispatch("locations/confirmEmail", { id: this.visit.id });
        }
      } catch (e) {
        console.log(e);
      }
    }

    private async confirmPhone() {
      try {
        const response = await superagent.put(`/api/visits/${this.visit.id}/verify/phone`).send();
        if (response.status === 200) {
          await this.$store.dispatch("locations/confirmPhone", { id: this.visit.id });
        }
      } catch (e) {
        console.log(e);
      }
    }

  }
</script>

<style scoped>

</style>
