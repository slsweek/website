<template>
  <div class="speakers">
    <GridContainer direction="column" alignY="center">
      <StyledTitle
        :styles="{ color: 'white' }"
        text="Palestrantes" />
      <StyledSubTitle
        :styles="{ color: 'white' }"
        text="Quer palestrar? mande sua palestra!"/>
      <StyledButton
        :styles="{
          marginTop: '20px',
        }"
        text="🗣 Mande sua palestra!" />
    </GridContainer>
  </div>
</template>

<script>
import StyledButton from '@/components/Functional/StyledButton';
import GridContainer from '@/components/Functional/GridContainer';
import StyledTitle from '@/components/Functional/StyledTitle';
import StyledSubTitle from '@/components/Functional/StyledSubTitle';

export default {
  name: 'SpeakersSection',
  components: { GridContainer, StyledTitle, StyledButton, StyledSubTitle },
};
</script>

<style lang="scss" scoped>
.speakers {
  width: 100%;
  height: auto;
  padding: 40px;
  background-color: #008A7E;
}
</style>
