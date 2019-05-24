<template>
  <div class="donation">
    <GridContainer direction="column" alignY="center">
      <StyledTitle>Doe para esse conteúdo</StyledTitle>
      <StyledSubTitle>
        Todo dinheiro doado vai ser mandado para instituições carentes.
      </StyledSubTitle>
      <StyledButton
        :styles="{
          marginTop: '20px',
        }"
        text="❤ Doe!" />
    </GridContainer>
  </div>
</template>

<script>
import StyledButton from '@/components/Functional/StyledButton';
import GridContainer from '@/components/Functional/GridContainer';
import StyledTitle from '@/components/Functional/StyledTitle';
import StyledSubTitle from '@/components/Functional/StyledSubTitle';

export default {
  name: 'DonationSection',
  components: { GridContainer, StyledTitle, StyledButton, StyledSubTitle },
};
</script>

<style lang="scss" scoped>
.donation {
  width: 100%;
  height: auto;
  padding: 40px;
}
</style>
