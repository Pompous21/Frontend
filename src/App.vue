<template>
  <div id="app">
    <Header class="header" />
    <router-view/>
  </div>
</template>

<script>

  import Header from "./components/Header";

  export default {
    name: "App",
    components: {
      Header
    }
  }
</script>

<style>
#app {

}
  .header {
    position: fixed !important;
    left: 0;
    top: 0;
    z-index: 1000;
    height: 64px;
    width: 100%;
    padding: 0 24px;
    background: #FFFFFF;
    box-shadow: 6px 0 2px rgba(0 21 41 / 35%);
  }
</style>
