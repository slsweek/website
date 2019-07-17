<template>
  <Collapse>
    <div
      class="header"
      slot="header"
      slot-scope="{ toggle }"
      :style="{
        borderRadius: toggle.isOpen
          ? '8px 8px 0px 0px'
          : '8px'
      }">
      <GridContainer
        :direction="$mq({ maxWidth: '810px' }) ? 'column' : 'row'"
        alignX="flex-start"
        alignY="center"> 
        <div class="speaker-photo" :style="{ backgroundImage: `url(${speaker.author.photo})` }" />
        <GridContainer
          :styles="{
            width: $mq({ maxWidth: '810px' }) ? '350px' : '650px',
            marginLeft: '20px',
          }"
          direction="column">
          <span
            :style="{
              width: $mq({ maxWidth: '810px' }) ? '100%' : 'auto',
              marginTop: $mq({ maxWidth: '810px' }) ? '20px' : '0px',
              textAlign: $mq({ maxWidth: '810px' }) ? 'center' : 'left',
            }"
            class="speaker-when">{{ speaker.when }}</span>
          <StyledTitle
            :styles="{
              fontFamily: 'Heebo',
              color: '#018A7E',
              lineHeight: '120%',
              width: $mq({ maxWidth: '810px' }) ? '100%' : 'auto',
              fontSize: $mq({ maxWidth: '810px' }) ? '1.2rem' : '1.8rem',
              textAlign: $mq({ maxWidth: '810px' }) ? 'center' : 'left',
            }">
            {{ speaker.title }}
          </StyledTitle>
          <StyledSubTitle
            :styles="{
              color: '#aaa',
              width: $mq({ maxWidth: '810px' }) ? '100%' : 'auto',
              marginBottom: $mq({ maxWidth: '810px' }) ? '30px' : 'auto',
              fontSize: $mq({ maxWidth: '810px' }) ? '1rem' : '1.2rem',
              textAlign: $mq({ maxWidth: '810px' }) ? 'center' : 'left',
            }">
            <i>By <span class="speaker-name" @click="showAuthorInfo(speaker)">{{ speaker.author.name }}</span></i>
          </StyledSubTitle>
          <StyledButton
            :clickFn="() => toggle.trigger()"
            :styles="{
              alignSelf: 'flex-end',
              outline: 'none',
              color: '#444',
              padding: '3px',
              backgroundColor: 'transparent',
              textDecoration: 'underline',
              textTransform: 'none',
              justifySelf: 'end',
              marginTop: '-25px',
            }"
            text="ver detalhes"/>
        </GridContainer>
      </GridContainer>
    </div>
    <div class="desc" slot="content">
      {{ speaker.description }}
    </div>
  </Collapse>
</template>

<script>
import Collapse from '@/components/Functional/Collapse';
import GridContainer from '@/components/Functional/GridContainer';
import StyledTitle from '@/components/Functional/StyledTitle';
import StyledSubTitle from '@/components/Functional/StyledSubTitle';
import StyledButton from '@/components/Functional/StyledButton';
import EventBus from '../utils/EventBus';

export default {
  name: 'SpeakerCollapse',
  components: { Collapse, GridContainer, StyledTitle, StyledSubTitle, StyledButton },
  props: {
    speaker: { type: Object, required: true },
  },
  methods: {
    showAuthorInfo(speaker) {
      EventBus.$emit('open', {
        modal: 'SPEAKER_MODAL',
        payload: speaker,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  width: 800px;
  margin-top: 20px;
  padding: 20px;
  background-color: #f4f4f4;

  @media all and (max-width: 810px) {
    max-width: 500px;
  }
}
.desc {
  padding: 20px 30px;
  height: auto;
  border-radius: 0px 0px 8px 8px;
  background-color: #fff;
  font-family: Heebo;
  color: #444;
  font-size: 1.4rem;
  max-width: 800px;

  @media all and (max-width: 810px) {
    font-size: 1rem;
    max-width: 500px;
  }
  @media all and (max-width: 530px) {
    font-size: 1rem;
    max-width: 400px;
  }
}

.speaker-photo {
  width: 90px;
  height: 90px;
  border-radius: 50%;
  overflow: hidden;
  background-size: cover;
  border: 4px solid #018A7E;
}
.speaker-name {
  font-family: inherit;
  color: inherit;
  font-size: 1.2rem;
  text-decoration: underline;
  cursor: pointer;
}
.speaker-when {
  font-family: Heebo;
  font-weight: 700;
  color: #444;
  margin-bottom: 5px;
}
</style>
