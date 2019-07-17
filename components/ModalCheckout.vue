<template>
  <div class="modal-checkout">
    <transition name="fade">
      <SpeakerModal v-if="modals.SPEAKER_MODAL" :data="data" />
    </transition>
  </div>
</template>

<script>
import SpeakerModal from '@/components/SpeakerModal';
import EventBus from '../utils/EventBus';

export default {
  data: () => ({
    modals: {
      SPEAKER_MODAL: false,
    },
    data: Object.create(null),
  }),
  components: { SpeakerModal },
  created() {
    EventBus.$on('open', data => {
      this.modals[data.modal] = true;
      this.data = data.payload;
    });

    EventBus.$on('close', data => {
      this.modals[data.modal] = false;
      this.data = Object.create(null);
    });
  },
};
</script>

<style lang="scss" scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active em versões anteriores a 2.1.8 */ {
  opacity: 0;
}

.modal-checkout {
  width: 100%;
  height: 100%;
}
</style>
