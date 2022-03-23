<template>
  <div style="border-radius: 20px">
    <el-input v-model="input" placeholder="请输入功能名称" style="padding: 0 0">
      <el-button slot="suffix" icon="el-icon-search" circle size="mini" class="mr-5"></el-button>
    </el-input>
  </div>
</template>

<script>
  export default {
    name: "CenterSearch",
    data() {
      return {
        input: ''
      }
    }
  }
</script>

<style>

</style>