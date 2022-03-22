<template>
  <div >
    <el-button type="text" class="mr-20" :style="{color: this.headerFontColor.color}">会员</el-button>
    <el-button type="text" class="mr-20" :style="{color: this.headerFontColor.color}">信息</el-button>
    <el-button type="text" class="mr-20" :style="{color: this.headerFontColor.color}">历史</el-button>
    <el-button type="text" class="mr-20" :style="{color: this.headerFontColor.color}">语言更换</el-button>
    <el-dropdown style="cursor: pointer" class="mr-20">
      <div>
        <el-avatar size="medium" src="../../assets/logo.png" style="vertical-align: middle" class="mr-5"></el-avatar>
        <span> 你的名字 <i class="el-icon-arrow-down" style="margin-left: 5px"></i></span>
      </div>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>
          <router-link to="/person">个人信息</router-link>
        </el-dropdown-item>
        <el-dropdown-item>
          <span style="text-decoration: none" @click="logout">退出登录</span>
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
  export default {
    name: "RightEntry",
    inject: ['headerFontColor'],
    methods: {
      logout() {

      }
    }
  }
</script>

<style scoped>

</style>