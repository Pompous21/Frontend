<template>
  <div>
    <!--  Main  -->
    <Banner />
    <Channel />
    <Layout />
    <Footer />
  </div>
</template>

<script>
import Banner from "./home/Banner";
import Channel from "./home/Channel";
import Layout from "./home/Layout";
import Footer from "./home/Footer";

export default {
  name: 'Home',
  components: {
    Banner,
    Channel,
    Layout,
    Footer
  }

}
</script>
