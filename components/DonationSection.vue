<template>
  <div class="donation">
    <GridContainer direction="column" alignY="center">
      <StyledTitle>Doe para esse conteúdo</StyledTitle>
      <StyledSubTitle>
        Todo dinheiro doado vai ser convertido para iniciativas como:
      </StyledSubTitle>

      <GridContainer :styles="{ margin: '35px' }">
        <img class="donation-images" src="/wmc.png" alt="logo womakescode">
      </GridContainer>

      <StyledButton
        :clickFn="navigate"
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
  methods: {
    navigate() {
      window.open('http://vaka.me/589408', '_blank');
    },
  },
};
</script>

<style lang="scss" scoped>
.donation {
  width: 100%;
  height: auto;
  padding: 40px;

  &-images {
    max-width: 300px;
  }
}
</style>
