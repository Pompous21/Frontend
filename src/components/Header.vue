<template>
  <div>
    <el-row type="flex" justify="space-between">
      <el-col :span="6"><div class="grid-content" style="line-height: 64px"><LeftEntry /></div></el-col>

      <el-col :span="6"><div class="grid-content" style="line-height: 64px"><CenterSearch /></div></el-col>

      <el-col :span="6"><div class="grid-content" style="line-height: 64px"><RightEntry style="text-align: right" /></div></el-col>
    </el-row>
  </div>
</template>

<script>
  import LeftEntry from "./headerBar/LeftEntry";
  import CenterSearch from "./headerBar/CenterSearch";
  import RightEntry from "./headerBar/RightEntry";

  export default {
    name: "Header",
    components: {
      LeftEntry,
      CenterSearch,
      RightEntry
    }
  }
</script>

<style scoped>
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
    max-height: 64px;
  }
</style>