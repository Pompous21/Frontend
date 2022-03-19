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
        bg_header: 'Transparent',
        headerFontColor: {
          color: "#FFFFFF"
        }
      }
    },
    mounted() {
      // 监听滚动条
      window.addEventListener('scroll', this.handleScroll, true);
    },
    methods: {
      // 监听滚动条并改变头部菜单
      handleScroll() {
        let scroll = this.$refs.App.scrollTop
        // console.log(scroll);
        // console.log(this.$refs.App.scrollHeight);
        if (scroll === 0) {
          this.index_header = 0;
          this.bg_header = "Transparent";
          this.headerFontColor.color = "#FFFFFF";
        }
        else {
          this.index_header = 1000;
          this.bg_header = "#FFFFFF";
          this.headerFontColor.color = "#18191C";
        }
        // console.log(this.headerFontColor.color)
      }
    },
    // provide 可以跨组件传值，但要传一个可以监听的值才能监听
    provide() {
      return {
        headerFontColor: this.headerFontColor
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
