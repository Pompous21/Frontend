<template>
  <div style="margin-right: 20px">
    <div style="height: 35px; margin-bottom: 15px; line-height: 35px; font-size: 25px">
      功能1
    </div>
    <el-row style="margin: 0 0">
      <el-col :span="12" style="height: 450px; padding-right: 20px">功能使用区</el-col>
      <el-col :span="12" style="height: 450px">功能展示区</el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: "FunctionCard",
    props: {

    },
    data() {
      return {

      }
    },
    methods: {

    }
  }
</script>

<style scoped>

</style>