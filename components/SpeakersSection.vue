<template>
  <div class="speakers">
    <GridContainer direction="column" alignY="center">
      <StyledTitle
        :styles="{
          color: 'white',
        }">
        Palestrantes
      </StyledTitle>
      <StyledSubTitle :styles="{ color: 'white', marginBottom: '20px' }">
        Quer falar sobre algum assunto relacionado a serverless? 👇🏻
      </StyledSubTitle>
      <StyledButton :clickFn="navigate" text="Mande sua palestra 🚀" />
      <!--
      <SpeakerCollapse
        v-for="(speaker, index) in speakers"
        :key="`speaker${index}`"
        :speaker="speaker" />
        -->
    </GridContainer>
  </div>
</template>

<script>
import SpeakerCollapse from '@/components/SpeakerCollapse';
import StyledButton from '@/components/Functional/StyledButton';
import GridContainer from '@/components/Functional/GridContainer';
import StyledTitle from '@/components/Functional/StyledTitle';
import StyledSubTitle from '@/components/Functional/StyledSubTitle';
import speakers from '@/content/speakers';

export default {
  name: 'SpeakersSection',
  components: { GridContainer, StyledTitle, StyledButton, StyledSubTitle, SpeakerCollapse },
  data: () => ({ speakers }),
  methods: {
    navigate() {
      window.open('https://forms.gle/1KGf3MLa6rhWXkoF6', '_blank');
    },
  },
};
</script>

<style lang="scss" scoped>
.speakers {
  width: 100%;
  height: auto;
  padding: 40px;
  background-color: #008a7e;
}
</style>
