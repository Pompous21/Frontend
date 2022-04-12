<template>
  <div style="padding: 0 96px">
    <!--  一个功能对应一个 session  -->
    <div class="session">
      <FunctionCard style="width: 80%" :function-name="'功能一'" :function-path="'/img/dith'" />
      <TipsCard style="width: 20%" :height="'500px'"/>
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