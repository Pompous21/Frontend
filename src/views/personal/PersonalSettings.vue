<template>
  <div style="padding: 30px">
    <div style="display: flex; padding: 20px; ; box-shadow: 2px 0 6px rgba(0 21 41 / 35%);">
      <div>
        <div style="text-align: center; margin-bottom: 10px">
          <i class="el-icon-user-solid"></i> 我的信息
        </div>
        <el-upload class="avatar-uploader"
                   :action="'http://' + serverIp + ':' + bPort + '/files/upload'"
                   :on-success="handleAvatarSuccess"
                   :show-file-list="false">
          <img v-if="userSettingsForm.avatar" :src="userSettingsForm.avatar" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
        <div>
          <el-button size="mini" type="primary" @click="handleSetInfo">更新信息</el-button>
          <el-button size="mini" @click="handleSetCancel">取消</el-button>
        </div>
      </div>
      <div>
        <el-form :model="userSettingsForm" label-width="120px">
          <el-form-item label="ID:">
            <el-input v-model="userSettingsForm.id" :disabled="true" placeholder="一生一份的ID，无法更换"></el-input>
          </el-form-item>
          <el-form-item label="昵称:">
            <el-input v-model="userSettingsForm.name" placeholder="请输入昵称"></el-input>
          </el-form-item>
          <el-form-item label="账号/手机号:">
            <el-input v-model="userSettingsForm.phone" :disabled="true" placeholder="一生一份的账号，无法更换"></el-input>
          </el-form-item>
          <el-form-item label="邮箱:">
            <el-input v-model="userSettingsForm.email" placeholder="请输入邮箱"></el-input>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
  import {bPort, serverIp} from "../../../public/config";

  export default {
    name: "PersonalSettings",
    inject: ['refreshUser'],
    data() {
      return {
        serverIp: serverIp,
        bPort: bPort,

        // 用户信息
        userSettingsForm: {
          id: '',
          name: '',
          phone: '',
          email: '',
          avatar: ''
        }
      }
    },
    created() {
      this.getUser()
    },
    methods: {
      handleAvatarSuccess(res) {
        this.userSettingsForm.avatar = res
      },
      getUser() {
        let id = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")).id : ""
        this.request.get("/user/" + id).then(res => {
          if (res.code === '1000') {
            this.userSettingsForm = res.data
          }
        })
      },

      handleSetInfo() {
        this.request.post("/user", this.userSettingsForm).then(res => {
          if (res.code === '5000') {
            this.$message.success("更新成功")
            this.refreshUser()
          }
          else {
            this.$message.error("更新失败")
          }
        })
      },
      handleSetCancel() {
        this.$router.push("/personal-center")
      }
    }
  }
</script>

<style scoped>
  .avatar {
    width: 150px;
    height: 150px;
    display: block;
  }
  .avatar-uploader {
    width: 150px;
    height: 150px;
    margin-bottom: 10px;
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader-icon {
    width: 150px;
    height: 150px;
    font-size: 28px;
    color: #8c939d;
    line-height: 150px;
    text-align: center;
  }
</style>