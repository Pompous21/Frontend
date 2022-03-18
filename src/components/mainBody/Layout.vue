<template>
  <div style="padding: 0 96px">
    <!--  一个功能对应一个 session  -->
    <div style="display: flex; height: 500px; margin-bottom: 50px">
      <FunctionCard style="width: 80%" />
      <TipsCard style="width: 20%" :height="'500px'"/>
    </div>

    <div style="display: flex; height: 500px; margin-bottom: 50px">
      <FunctionCard style="width: 80%" />
      <TipsCard style="width: 20%" :height="'500px'"/>
    </div>

  </div>
</template>

<script>
  import TipsCard from "../session/TipsCard";
  import FunctionCard from "../session/FunctionCard";

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
</style>