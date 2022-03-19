<template>
  <div>
    <el-link href="http://localhost:8080/" class="mr-20" :underline="false" :style="{color: this.headerFontColor.color}">
      <img src="../../assets/logo.png" style="width: 30px; position: relative; top: 10px; right: 5px" />
    </el-link>
    <el-button type="text" class="mr-20" :style="{color: this.headerFontColor.color}">会员</el-button>
    <el-button type="text" class="mr-20" :style="{color: this.headerFontColor.color}">信息</el-button>
    <el-button type="text" class="mr-20" :style="{color: this.headerFontColor.color}">历史</el-button>
    <el-button type="text" :style="{color: this.headerFontColor.color}">语言更换</el-button>
  </div>
</template>

<script>
  export default {
    name: "RightEntry",
    inject: ['headerFontColor']
  }
</script>

<style scoped>

</style>