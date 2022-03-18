<template>
  <div class="footer-bg" style="padding: 0 200px 40px 200px">
    <div style="height: 90px; margin-bottom: 30px">
      <el-row type="flex" justify="space-between">
        <el-col :span="6">
          <div class="grid-content bg-purple"></div>
        </el-col>

        <el-col :span="6">
          <div class="grid-content bg-purple"></div>
        </el-col>

        <el-col :span="6">
          <div class="grid-content bg-purple"></div>
        </el-col>
      </el-row>
    </div>

    <div style="padding: 0 200px">
      <el-divider></el-divider>
    </div>

    <div style="height: 175px; margin: 30px 0 20px" class="bg-purple">

    </div>

    <div style="height: 50px" class="bg-purple">

    </div>
  </div>
</template>

<script>
  export default {
    name: "Footer"
  }
</script>

<style scoped>
  .footer-bg {
    background: #F6F7F8;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
    height: 90px;
  }
</style>