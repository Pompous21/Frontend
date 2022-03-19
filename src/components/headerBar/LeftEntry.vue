<template>
  <div>
    <el-link :href="'http://' + serverIp + ':' + fPort + '/'" class="mr-20" :underline="false"
             :style="{color: this.headerFontColor.color}" style="margin-right: 20px">
      <img src="../../assets/logo.png" style="width: 30px; position: relative; top: 10px; right: 5px" />云图
    </el-link>
    <el-button type="text" class="mr-20" style="margin-left: 10px" :style="{color: this.headerFontColor.color}">暨南大学</el-button>
    <el-button type="text" class="mr-20" :style="{color: this.headerFontColor.color}">理工学院</el-button>
    <el-button type="text" class="mr-20" :style="{color: this.headerFontColor.color}">光电工程系</el-button>
    <el-button type="text" class="mr-20" :style="{color: this.headerFontColor.color}">合作</el-button>
    <el-button type="text" :style="{color: this.headerFontColor.color}">咨询</el-button>
  </div>
</template>

<script>
  import {serverIp} from '../../../public/config';
  import {fPort} from "../../../public/config";

  export default {
    name: "LeftEntry",
    data() {
      return {
        serverIp: serverIp,
        fPort: fPort
      }
    },
    // 响应式传给子子子组件 LeftEntry
    inject: ['headerFontColor']
  }
</script>

<style scoped>
</style>