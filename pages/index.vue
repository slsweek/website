<template>
  <GridContainer direction="column" alignX="center" alignY="center">
    <Banner />
    <OrganizersSection />
    <Footer />
  </GridContainer>
</template>

<script>
import Banner from '@/components/Banner';
import Footer from '@/components/Footer';
import OrganizersSection from '@/components/OrganizersSection';
import GridContainer from '@/components/Functional/GridContainer';

export default {
  name: 'Index',
  components: {
    Banner,
    Footer,
    GridContainer,
    OrganizersSection,
  },
}
</script>
