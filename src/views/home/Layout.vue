<template>
  <div style="padding: 0 96px">
    <!--  一个功能对应一个 session  -->
    <div class="session">
      <FunctionCard style="width: 80%" :function-name="this.sessions[0].name" :function-path="this.sessions[0].path" />
      <TipsCard style="width: 20%" :height="'500px'" :title="this.sessions[0].title" :introduction="this.sessions[0].introduction" :text="this.sessions[0].text" />
    </div>

    <div class="session">
      <FunctionCard style="width: 80%" :function-name="'功能二'" function-path="'/img/dith'" />
      <TipsCard style="width: 20%" :height="'500px'"/>
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