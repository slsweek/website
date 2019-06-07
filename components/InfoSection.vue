<template>
  <div class="info">
    <GridContainer direction="column" alignY="center">
      <StyledTitle :styles="{ color: 'white' }">Informações importantes</StyledTitle>
      <StyledSubTitle :styles="{ color: 'white' }">
        Tudo o que você precisa saber sobre o evento!
      </StyledSubTitle>

      <GridContainer
        :styles="{
          margin: '35px',
          maxWidth: '900px'
        }"
        :direction="$mq({ maxWidth: '880px' }) ? 'column' : 'row'"
        alignX="space-between"
        alignY="flex-start">
        <ul class="info-list">
          <li>Os vídeos estarão disponíveis em nosso <a href="https://www.youtube.com/channel/UCrpv9cNaImDENrYz1eqnXzw">canal do YouTube</a>. Não esqueça de curtir, compartilhar e se inscrever 😍</li>
          <li>Confirme sua presença em nosso <a href="https://www.facebook.com/events/291536171785412/">evento no Facebook!</a> Lá você também poderá acompanhar os anuncios oficiais e também interagir com os demais participantes!</li>
          <li>O evento é totalmente online, não é necessário comparecer em nenhum local para assistí-lo (que tal assistir com os amigos? 🍻)</li>
        </ul>
        <ul class="info-list">
          <li>Se você não pode ver esta edição ao vivo, não tem problema! Todas as palestras ficarão gravadas no Youtube</li>
          <li>Mas, assistir ao vivo te dá a possibilidade de perguntar diretamente para o palestrante (só dizendo 👀)</li>
        </ul>
      </GridContainer>
    </GridContainer>
  </div>
</template>

<script>
import GridContainer from '@/components/Functional/GridContainer';
import StyledTitle from '@/components/Functional/StyledTitle';
import StyledSubTitle from '@/components/Functional/StyledSubTitle';

export default {
  name: 'InfoSection',
  components: { GridContainer, StyledTitle, StyledSubTitle },
  methods: {
    navigate(link) {
      return window.open(link, '_blank');
    },
  },
};
</script>

<style lang="scss" scoped>
.info-list {
  font-family: 'Heebo';
  color: white;
  list-style: none;
  margin: 10px;
  a {
    color: #f9ca24;
    font-weight: bold;
  }
  li {
    margin-top: 10px;
    &:before {
      content: '⚡';
    }
  }
}
.info {
  width: 100%;
  height: auto;
  padding: 40px;
  background-color: #008a7e;
}
</style>
