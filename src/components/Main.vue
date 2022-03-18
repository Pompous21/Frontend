<template>
  <div>
    <Banner />
    <Channel />
    <Layout />
  </div>
</template>

<script>
  import Banner from "./mainBody/Banner";
  import Channel from "./mainBody/Channel";
  import Layout from "./mainBody/Layout";

  export default {
    name: "Main",
    components: {
      Banner,
      Channel,
      Layout
    }
  }
</script>

<style scoped>

</style>