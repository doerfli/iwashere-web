<template>
  <tr>
    <td class="is-vcentered">
      {{ this.loc.name }}
    </td>
    <td class="is-vcentered">
      <div class="field is-grouped is-pulled-right">
        <p class="control">
          <router-link :to="guestListUrl()">
            <button class="button is-small is-link">
              <span class="icon is-small">
                <i class="fas fa-clipboard-list"></i>
              </span>
              <span>
                {{ $t('locations.actions.guest_list') }}
              </span>
            </button>
          </router-link>
        </p>
        <p class="control">
          <router-link :to="qrcodeUrl()" target='_blank'>
            <button class="button is-small is-link">
              <span class="icon is-small">
                <i class="fas fa-qrcode"></i>
              </span>
              <span class="icon is-small">
                <i class="fas fa-eye"></i>
              </span>
              <span>
                {{ $t('locations.actions.qr_code') }}
              </span>
            </button>
          </router-link>
        </p>
        <p class="control">
          <a :download="`qrcode_${this.loc.shortname}.png`"
             ref="qrcodelink"
             target="_blank">
            <button class="button is-small is-link">
              <span class="icon is-small">
                <i class="fas fa-qrcode"></i>
              </span>
              <span class="icon is-small">
                <i class="fas fa-download"></i>
              </span>
              <span>
                {{ $t('locations.actions.qr_code_download') }}
              </span>
            </button>
          </a>
        </p>
      </div>
    </td>
  </tr>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';
import LocationEntity from '@/model/locationentity';
import {QRCodeToDataURLOptions, toDataURL} from 'qrcode';

@Component
export default class Location extends Vue {
  public $refs!: {
    qrcodelink: HTMLFormElement
  };

  @Prop()
  private loc!: LocationEntity;

  public mounted() {
    const opts = {
      scale: 10
    } as QRCodeToDataURLOptions;

    const refs = this.$refs;
    toDataURL(this.getVisitUrl(), opts, (err, url) => {
      // console.log(url);
      refs.qrcodelink.href = url;
    });
  }

  private guestListUrl() {
    return `/locations/${this.loc.shortname}/guestlist`;
  }

  private qrcodeUrl() {
    return `/locations/${this.loc.shortname}/qrcode`;
  }

  private getVisitUrl() {
    return `${process.env.VUE_APP_BASEURL}/#/visit/${this.loc.shortname}`;
  }
}
</script>

<style scoped>

</style>
