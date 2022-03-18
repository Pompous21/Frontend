<template>
  <div>
    <el-container style="padding: 0 0">
      <el-header style="height: 64px; padding: 0 24px" class="bs-v">
        <Header style="height: 64px" />
      </el-header>

      <el-main style="padding: 0 0px">
        <Main />
        <Footer />
      </el-main>
    </el-container>
  </div>
</template>

<script>
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";

export default {
  name: 'Home',
  components: {
    Header,
    Main,
    Footer
  }

}
</script>
