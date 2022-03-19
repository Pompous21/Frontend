<template>
  <div style="height: 120px; padding: 0 96px; display: flex">
    <div style="flex: 1; width: 15%; margin: 20px 20px">
      <el-row :gutter="10">
        <el-col :span="8">
          <img src="../../assets/oscilloscope.png" style="width: 50px; position: relative" />
          <div class="grid-content" style="height: 20px; width: 50px; text-align: center; line-height: 36px;">菜单1</div>
        </el-col>
        <el-col :span="8">
          <img src="../../assets/oscilloscope.png" style="width: 50px; position: relative" />
          <div class="grid-content" style="height: 20px; width: 50px; text-align: center; line-height: 36px;">菜单2</div>
        </el-col>
        <el-col :span="8">
          <img src="../../assets/oscilloscope.png" style="width: 50px; position: relative" />
          <div class="grid-content" style="height: 20px; width: 50px; text-align: center; line-height: 36px;">菜单3</div>
        </el-col>
      </el-row>
    </div>
    <div style="width: 85%; margin: 20px 20px">
      <el-row :gutter="20">
        <el-col :span="2"><div class="grid-content bg-purple" style="line-height: 80px; text-align: center">功能1</div></el-col>
        <el-col :span="2"><div class="grid-content bg-purple" style="line-height: 80px; text-align: center">功能2</div></el-col>
        <el-col :span="2"><div class="grid-content bg-purple" style="line-height: 80px; text-align: center">功能3</div></el-col>
        <el-col :span="2"><div class="grid-content bg-purple" style="line-height: 80px; text-align: center">功能4</div></el-col>
        <el-col :span="2"><div class="grid-content bg-purple" style="line-height: 80px; text-align: center">功能5</div></el-col>
        <el-col :span="2"><div class="grid-content bg-purple" style="line-height: 80px; text-align: center">功能6</div></el-col>
        <el-col :span="2"><div class="grid-content bg-purple" style="line-height: 80px; text-align: center">功能7</div></el-col>
        <el-col :span="2"><div class="grid-content bg-purple" style="line-height: 80px; text-align: center">功能8</div></el-col>
        <el-col :span="2"><div class="grid-content bg-purple" style="line-height: 80px; text-align: center">功能9</div></el-col>
        <el-col :span="2"><div class="grid-content bg-purple" style="line-height: 80px; text-align: center">功能10</div></el-col>
        <el-col :span="2"><div class="grid-content bg-purple" style="line-height: 80px; text-align: center">功能11</div></el-col>
        <el-col :span="2"><div class="grid-content bg-purple" style="line-height: 80px; text-align: center">功能12</div></el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Channel"
  }
</script>

<style scoped>
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
    height: 80px;
  }
  .bg-purple {
    background: #d3dce6;
  }
</style>