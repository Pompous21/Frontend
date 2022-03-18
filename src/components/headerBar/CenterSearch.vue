<template>
  <div>
    <el-input v-model="input" placeholder="请输入功能名称" style="padding: 0 0">
      <el-button slot="suffix" size="mini" round>
        <i class="el-icon-search"></i>
      </el-button>
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