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

      <BannerImageGlitch />

      <StyledSubTitle
        :styles="{
          zIndex: '4',
          color: '#fff',
          textAlign: 'center',
          fontSize: '30px',
          marginTop: '-20px',
          marginBottom: '40px',
        }">
        Uma semana inteira sobre
        <span
          :style="{
            fontSize: '30px',
            fontWeight: 700,
          }">
          arquitetura serverless.
        </span>
      </StyledSubTitle>

      <StyledSubTitle
        :styles="{
          zIndex: '4',
          color: '#fff',
          textAlign: 'center',
          fontSize: '25px',
          marginTop: '-40px',
          marginBottom: '40px',
        }">
        <span :style="{ fontSize: '25px', fontWeight: 700 }">
          Evento online
        </span>
        - 22 à 26 de julho.
      </StyledSubTitle>

    </GridContainer>
  </div>
</template>

<script>
import GridContainer from '@/components/Functional/GridContainer';
import BannerImageGlitch from '@/components/BannerImageGlitch';
import StyledSubTitle from '@/components/Functional/StyledSubTitle';

export default {
  name: 'Banner',
  components: {
    GridContainer,
    StyledSubTitle,
    BannerImageGlitch,
  },
};
</script>

<style lang="scss" scoped>
%max-width {
  width: 100%;
  height: 100vh;
}

@keyframes scales {
  to {
    background-position: bottom;
  }
}

.banner {
  @extend %max-width;
  background-image: url('/banner.jpg');
  background-size: cover;
  background-position: top top;
  animation: scales 60s ease-in infinite alternate;

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
}
</style>
