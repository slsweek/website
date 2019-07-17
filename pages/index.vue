<template>
  <GridContainer direction="column" alignX="center" alignY="center">
    <ModalCheckout />
    <Banner />
    <InfoSection />
    <OrganizersSection />
    <SpeakersSection />
    <DonationSection />
    <Footer />
  </GridContainer>
</template>

<script>
import Banner from '@/components/Banner';
import Footer from '@/components/Footer';
import ModalCheckout from '@/components/ModalCheckout';
import OrganizersSection from '@/components/OrganizersSection';
import SpeakersSection from '@/components/SpeakersSection';
import DonationSection from '@/components/DonationSection';
import GridContainer from '@/components/Functional/GridContainer';
import InfoSection from '@/components/InfoSection';

export default {
  name: 'Index',
  components: {
    Banner,
    Footer,
    GridContainer,
    InfoSection,
    OrganizersSection,
    SpeakersSection,
    DonationSection,
    ModalCheckout,
  },
}
</script>
