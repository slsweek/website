<template>
  <GridContainer
    :styles="{
      backgroundColor: '#f4f4f4',
      width: '100%',
      height: '80px',
    }"
    direction="column"
    alignX="center"
    alignY="center">
    <p class="copy">Feito com ❤️ para a comunidade.</p>
    <p class="copy">
      <a href="https://vuejssummit.com/codeofconduct">código de conduta</a>
    </p>
  </GridContainer>
</template>

<script>
import GridContainer from '@/components/Functional/GridContainer';

export default {
  name: 'Footer',
  components: { GridContainer },
}
</script>

<style lang="scss" scoped>
.copy {
  font-family: Heebo;
  color: #444;
}
</style>
