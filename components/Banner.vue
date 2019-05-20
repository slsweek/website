<template>
  <div class="banner">
    <GridContainer
      :styles="{
        height: '100%',
      }"
      direction="column"
      alignX="center"
      alignY="center">
      <span class="banner-overlay" />
      <img
        v-if="$mq({ maxWidth: '880px' })"
        class="banner-logo"
        src="/serverless-logo.png" />
      <img
        v-else
        class="banner-logo"
        :style="{
          width: '200px',
        }"
        src="/logo-without-bg.png" />
      <StyledSubTitle
        :styles="{
          zIndex: '4',
          color: '#fff',
          textAlign: 'center',
          fontSize: $mq({ maxWidth: '880px' }) ? '20px' : '30px',
          marginTop: $mq({ maxWidth: '880px' }) ? '-5px' : '-20px',
          marginBottom: '40px',
        }"
        text="Uma semana inteira sobre arquitetura serverless" />
    </GridContainer>
  </div>
</template>

<script>
import GridContainer from '@/components/Functional/GridContainer';
// import GlitchContainer from '@/components/Functional/GlitchContainer';
import StyledSubTitle from '@/components/Functional/StyledSubTitle';

export default {
  name: 'Banner',
  components: {
    GridContainer,
    StyledSubTitle,
    // GlitchContainer,
  },
};
</script>

<style lang="scss" scoped>
%max-width {
  width: 100%;
  height: 100vh;
}

.banner {
  @extend %max-width;
  background-image: url('/banner.jpg');
  background-size: cover;
  background-position: top top;

  &-overlay {
    @extend %max-width;
    content: '';
    position: absolute;
    top: 0px;
    left: 0px;
    background-image: radial-gradient(
      ellipse farthest-corner,
      rgba(0, 0, 0, 0.1),
      rgba(0, 0, 0, 0.4)
    );
  }

  &-logo {
    width: 800px;
    z-index: 4;
  }
}
</style>
