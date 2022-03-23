<template>
  <div style="height: 100vh; overflow: auto" id="app" ref="App">
    <!--  最外层div要这么写才能监听  -->
    <Header class="header" :style="{zIndex: index_header, background: bg_header, boxShadow: bs}" @loginDialogVisibleOn="loginDialogVisible = true" @refreshUser="getUser" />
    <router-view/>

    <Login :loginDialogVisible="loginDialogVisible" @loginDialogVisibleOff="loginDialogVisible = false" @refreshUser="getUser"/>
  </div>
</template>

<script>

  import Header from "./components/Header";
  import Login from "./components/Login";

  export default {
    name: "App",
    components: {
      Header,
      Login
    },
    data() {
      return {
        // 滚动条
        scroll: 0,
        // 头部菜单元素
        index_header: 0,
        bg_header: 'Transparent',
        bs: "0 0 0 0",
        // 头部菜单字体
        headerFontColor: {
          color: "#FFFFFF"
        },

        // 当前已登录用户信息
        user: { name: '' },

        // 登录窗口
        loginDialogVisible: false,
      }
    },
    created() {
      this.getUser();
    },
    mounted() {
      // 监听滚动条
      window.addEventListener('scroll', this.handleScroll, true);
    },
    methods: {
      // 监听滚动条并改变头部菜单
      handleScroll() {
        this.scroll = this.$refs.App.scrollTop
        if (this.scroll === 0) {
          this.index_header = 0;
          this.bg_header = "Transparent";
          this.headerFontColor.color = "#FFFFFF";
          this.bs = "0 0 0 0";
        }
        else {
          this.index_header = 1000;
          this.bg_header = "#FFFFFF";
          this.headerFontColor.color = "#18191C";
          this.bs = "0 0 2px 0 rgba(0 21 41 / 35%)"
        }
      },

      // 获取后台存放的最新用户信息
      getUser() {
        let id = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")).id : ""
        if (id) {
          this.request.get("/user/" + id).then(res => {
            this.user.name = res.data.name
          })
        }
        else {
          this.user.name = ''
        }
      }
    },

    // provide 可以跨组件传值，但要传一个可以监听的值才能监听
    provide() {
      return {
        headerFontColor: this.headerFontColor,
        user: this.user
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
    box-shadow: 0 0 2px rgba(0 21 41 / 35%);
  }
</style>
