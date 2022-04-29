<template>
  <div style="padding: 0 96px">
    <!--  一个功能对应一个 session  -->
    <div class="session" v-for="session in sessions" :key="session.id">
      <FunctionCard style="width: 80%" :function-name="session.name" :function-path="session.path"
                    :demo-img-url_a="session.demoImgUrlA" :demo-img-url_b="session.demoImgUrlB"
                    :demo-img-url_c="session.demoImgUrlC" :demo-img-url_d="session.demoImgUrlD"/>
      <TipsCard style="width: 20%" :height="'500px'" :title="session.title" :introduction="session.introduction" :text="session.text" />
    </div>


  </div>
</template>

<script>
  import TipsCard from "../../components/session/TipsCard";
  import FunctionCard from "../../components/session/FunctionCard";

  export default {
    name: "Layout",
    components: {
      TipsCard,
      FunctionCard
    },
    created() {
      this.request.get("/function").then(res => {
        if (res.code === '1000') {
          this.sessions = res.data
          console.log(res.data)
        }
      })
    },
    data() {
      return {
        sessions: []
      }
    }
  }
</script>

<style scoped>
  .bg-purple {
    background: #d3dce6;
  }
  .session {
    display: flex;
    height: 500px;
    margin-bottom: 50px
  }
</style>