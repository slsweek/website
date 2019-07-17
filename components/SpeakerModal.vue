<template>
  <Modal>
    <div class="header">
      <div class="header-close" @click="close">&times;</div>
      <GridContainer
        :styles="{
          width: '100%',
          height: '100%',
        }"
        direction="column"
        alignX="center"
        alignY="center">
        <div class="speaker-photo" :style="{ backgroundImage: `url(${data.author.photo})` }" />
        <StyledSubTitle
          :styles="{
            zIndex: 666,
            color: 'white',
            marginTop: '10px',
            fontWeight: 700,
          }">
          {{ data.author.name }}
        </StyledSubTitle>
        <StyledSubTitle
          :styles="{
            zIndex: 666,
            color: 'white',
            fontSize: '1rem',
            fontWeight: 700,
          }">
          Palestrante
        </StyledSubTitle>
      </GridContainer>
    </div>
    <div class="content">
      <p>{{ data.author.description }}</p>

      <ul class="content-social">
        <li v-if="data.author.twitter">
          <a target="_blank" :href="data.author.twitter">{{ data.author.twitter }}</a>
        </li>
        <li v-if="data.author.linkedin">
          <a target="_blank" :href="data.author.linkedin">{{ data.author.linkedin }}</a>
        </li>
        <li v-if="data.author.github">
          <a target="_blank" :href="data.author.github">{{ data.author.github }}</a>
        </li>
        <li v-if="data.author.medium">
          <a target="_blank" :href="data.author.medium">{{ data.author.medium }}</a>
        </li>
        <li v-if="data.author.facebook">
          <a target="_blank" :href="data.author.facebook">{{ data.author.facebook }}</a>
        </li>
        <li v-if="data.author.instagram">
          <a target="_blank" :href="data.author.instagram">{{ data.author.instagram }}</a>
        </li>
        <li v-if="data.author.site">
          <a target="_blank" :href="data.author.site">{{ data.author.site }}</a>
        </li>
      </ul>
    </div>
  </Modal>
</template>

<script>
import Modal from '@/components/Functional/Modal';
import GridContainer from '@/components/Functional/GridContainer';
import StyledSubTitle from '@/components/Functional/StyledSubTitle';
import EventBus from '../utils/EventBus';

export default {
  name: 'SpeakerModal',
  props: {
    data: { type: Object, required: true },
  },
  components: { Modal, GridContainer, StyledSubTitle },
  methods: {
    close() {
      EventBus.$emit('close', {
        modal: 'SPEAKER_MODAL',
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  height: 200px;
  background-image: url('/banner.jpg');
  background-size: cover;
  background-position: bottom bottom;
  position: relative;

  &::after {
    width: 100%;
    height: 100%;
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

  &-close {
    position: absolute;
    z-index: 7777;
    top: 5px;
    right: 15px;
    font-size: 1.8rem;
    color: white;
    cursor: pointer;
  }
}

.content {
  padding: 30px;
  > p {
    font-family: Heebo;
    font-size: 1rem;
  }

  &-social {
    list-style-type: none;
    margin-top: 20px;

    > li {

      > a {
        font-family: Heebo;
        font-size: 1rem;
        color: #aaa;
        text-decoration: underline;
      }
    }
  }
}

.speaker-photo {
  width: 90px;
  height: 90px;
  z-index: 99;
  border-radius: 50%;
  overflow: hidden;
  background-size: cover;
  border: 4px solid #018A7E;
}
</style>
