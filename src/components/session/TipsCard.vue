<!--  封装了一个 TipsCard  -->
<!--  给 Layout中的每一个 Session 使用  -->

<template>
  <el-card shadow="hover" body-style="padding: 5px" style="border-width: 2px" :style="{height: height}">
    <div style="height: 450px">
      <div style="height: 10%">
        {{ this.title }}
      </div>
      <div style="height: 90%">
        <br>{{ this.introduction }}
        <br>
        <br>{{ this.text }}
      </div>
    </div>
    <div style="height: 50px">
      <el-button type="text" style="width: 90px; flex: 1; text-align: center">点击查看详情</el-button>
    </div>
  </el-card>
</template>

<script>
  export default {
    name: "TipsCard",
    props: {
      height: String,

      title: String,
      introduction: String,
      text: String
    }
  }
</script>

<style scoped>

</style>