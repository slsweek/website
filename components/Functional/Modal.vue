<template>
  <div class="modal">
    <GridContainer
      :styles="{ width: '100%', height: '100%' }"
      alignX="center"
      alignY="center">
      <div class="modal-body">
        <slot />
      </div>
    </GridContainer>
  </div>
</template>

<script>
import GridContainer from '@/components/Functional/GridContainer';

export default {
  name: 'Modal',
  components: { GridContainer },
  data: () => ({
    lastTopValue: 0,
  }),
  mounted() {
    this.lastTopValue = window.screenTop;
    document.body.style.overflow = 'hidden';
  },
  destroyed() {
    document.body.style.overflow = 'auto';
  },
};
</script>

<style lang="scss" scoped>
.modal {
  position: fixed;
  width: 100%;
  height: 100%;

  &::before {
    content: "";
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: rgba($color: #000000, $alpha: 0.6);
    z-index: 7777;
  }

  &-body {
    z-index: 8888;
    background-color: white;
    width: 500px;
    height: auto;
    overflow: hidden;
    border-radius: 8px;
  }
}
</style>
