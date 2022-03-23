<template>
  <div>
    <el-link :href="'http://' + serverIp + ':' + fPort + '/'" class="header-btn" :underline="false"
             :style="{color: this.headerFontColor.color}"  >
      <img src="../../assets/logo.png" style="width: 30px; position: relative; top: 10px; right: 5px;" />
      <span style="font-family: Arial; font-size: 14px">云图</span>
    </el-link>
    <el-button type="text" class="header-btn" :style="{color: this.headerFontColor.color}" @click="handleVisit(url_1)">暨南大学</el-button>
    <el-button type="text" class="header-btn" :style="{color: this.headerFontColor.color}" @click="handleVisit(url_2)">理工学院</el-button>
    <el-button type="text" class="header-btn" :style="{color: this.headerFontColor.color}" @click="handleVisit(url_3)">光电工程系</el-button>
    <el-button type="text" class="header-btn" :style="{color: this.headerFontColor.color}" @click="handleVisit(url_4)">合作</el-button>
    <el-button type="text" class="header-btn" :style="{color: this.headerFontColor.color}" @click="handleVisit(url_5)">咨询</el-button>
  </div>
</template>

<script>
  import {serverIp, fPort} from '../../../public/config';
  import {CONSULT, COOPERATION, GDGCX, JNU, LGXY} from "../../utils/global";

  export default {
    name: "LeftEntry",
    data() {
      return {
        serverIp: serverIp,
        fPort: fPort,

        url_1: JNU,
        url_2: LGXY,
        url_3: GDGCX,
        url_4: COOPERATION,
        url_5: CONSULT

      }
    },
    // 响应式传给子子子组件 LeftEntry
    inject: ['headerFontColor'],
    methods: {
      // 新窗口打开
      handleVisit(url) {
        window.open('//' + url, '_blank')
      }
    }
  }
</script>

<style scoped>
  .header-btn {
    margin-right: 20px;
    vertical-align: middle;
  }
</style>