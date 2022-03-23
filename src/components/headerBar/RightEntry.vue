<template>
  <div>
    <!--  后面看情况补条件渲染  -->
    <el-popover placement="bottom" trigger="hover" class="header-btn">
      <!--已登录的情况      -->
      <div v-if="user.name">
        <router-link to="/person" style="text-decoration: none">个人信息 </router-link>
        <div style="text-decoration: none; cursor: pointer" @click="handleLogout">退出登录 </div>
      </div>
      <!--未登录的情况      -->
      <div v-else>
        <div>朋友，欢迎你 </div>
        <div style="text-decoration: none; cursor: pointer" @click="$emit('loginDialogVisibleOn')">登录 </div>
      </div>

      <div slot="reference" style="display: inline-block" :style="{color: this.headerFontColor.color}">
        <div v-if="this.user.name">
          <span class="mr-5" style="font-family: Arial; font-size: 14px">{{this.user.name}} </span>
          <el-avatar size="medium" :src="this.user.avatar" style="vertical-align: middle"></el-avatar>
        </div>
        <div v-else>
          <span class="mr-5">游客朋友 </span>
        </div>
      </div>
    </el-popover>

    <el-button type="text" class="header-btn" :style="{color: this.headerFontColor.color}">会员</el-button>
    <el-button type="text" class="header-btn" :style="{color: this.headerFontColor.color}">信息</el-button>
    <el-button type="text" class="header-btn" :style="{color: this.headerFontColor.color}">历史</el-button>
    <el-button type="text" class="header-btn" :style="{color: this.headerFontColor.color}">语言更换</el-button>




  </div>
</template>

<script>
  export default {
    name: "RightEntry",
    inject: ['headerFontColor', 'user'],
    data() {
      return {

      }
    },
    methods: {
      handleLogout() {
        localStorage.removeItem("user")
        this.$emit('refreshUser')
        this.$message.success("退出成功")
      },


    }
  }
</script>

<style scoped>
  .header-btn {
    margin-right: 20px;
    vertical-align: middle;
  }
</style>