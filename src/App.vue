<template>
  <div style="height: 100vh; overflow: auto" id="app" ref="App">
    <!--  最外层div要这么写才能监听  -->
    <Header class="header" :style="{zIndex: index_header, background: bg_header}" />
    <router-view/>
  </div>
</template>

<script>

  import Header from "./components/Header";

  export default {
    name: "App",
    components: {
      Header
    },
    data() {
      return {
        index_header: 0,
        bg_header: 'Transparent'
      }
    },
    mounted() {
      // 监听滚动条
      window.addEventListener('scroll', this.handleScroll, true);
    },
    methods: {
      // 监听滚动条并改变头部菜单
      handleScroll() {
        console.log(this.$refs.App.scrollTop);
        console.log(this.$refs.App.scrollHeight);
        if (this.$refs.App.scrollTop === 0) {
          this.index_header = 0;
          this.bg_header = "Transparent";
        }
        else {
          this.index_header = 1000;
          this.bg_header = "#FFFFFF"
        }
      }
    }
  }
</script>

<style>
  #app {

  }
  .header {
    position: fixed;
    left: 0;
    top: 0;
    /*z-index: 1000;*/
    /*显示优先级*/

    height: 64px;
    width: 100%;
    padding: 0 24px;

    /*background: #FFFFFF;*/
    box-shadow: 6px 0 2px rgba(0 21 41 / 35%);
  }
</style>
