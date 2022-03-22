<template>
  <div>
    <el-dialog :title="loginOrRegister.dialogTitle" :visible.sync="loginDialogVisible" :before-close="handleClose" width="40%" style="text-align: center" >
      <div style="display: flex; margin: 0 30px">
        <div style="width: 40%">
          Google
        </div>
        <el-form ref="loginForm" :model="userLoginForm" :rules="loginRules"  label-width="80px" style="width: 60%">
          <el-form-item label="账号" prop="phone">
            <el-input placeholder="请输入账号" v-model="userLoginForm.phone"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input placeholder="请输入密码" show-password v-model="userLoginForm.password"></el-input>
          </el-form-item>
        </el-form>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="handleSwitchButton">{{loginOrRegister.switchButton}}</el-button>
        <el-button type="primary" @click="handleLoginConfirm('loginForm')">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    name: "Login",
    props: {
      loginDialogVisible: Boolean
    },
    data() {
      return {
        // 控制页面
        loginOrRegister: {
          isLogin: true,    // 登录/注册
          dialogTitle: '登 录',   // 当前对话框标题：登录/注册
          switchButton: '注 册',    // 转换按钮，对应的是确定按钮
        },
        // 登录输入框
        userLoginForm: {
          phone: '',
          password: ''
        },
        // 输入框验证规则
        loginRules: {
          phone: [
            { required: true, message: '请输入账号', trigger: 'blur' },
            { min: 7, max: 11, message: '长度在 7 到 11 个字符', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' },
            { min: 8, max: 32, message: '长度在 8 到 32 个字符', trigger: 'blur' }
          ]
        },

      }
    },
    methods: {
      // 登陆
      login() {
        this.request.post("/user/login", this.userLoginForm).then(res => {
          if (res.code === '2000') {
            // 存入当前用户信息
            localStorage.setItem("user", JSON.stringify(res.data))
            this.$message.success('登陆成功')
          }
          else {
            this.$message.error(res.msg)
          }
          this.$emit('refreshUser')
        })
      },
      register() {
        this.request.post("/user/register", this.userLoginForm).then(res => {
          if (res.code === '2200') {
            this.handleSwitchButton()
            this.$message.success('注册成功')
          }
          else {
            this.$message.error(res.msg)
          }
        })
      },
      // 按下确认键
      handleLoginConfirm(formName) {
        this.$refs[formName].validate((valid) => {
          // 检验符合要求，再交由后端校验
          if (valid) {
            if (this.loginOrRegister.isLogin) {
              this.login()
              // 恢复原样 隐藏登录页面必须通过传参给 App 实现
              this.$emit('loginDialogVisibleOff')
              this.userLoginForm = {
                phone: '',
                password: ''
              }
              // 此处应该可以补一个刷新页面
            }
            else {
              this.register()
            }
          }
        })
      },
      handleSwitchButton() {
        this.userLoginForm = {
          phone: '',
          password: ''
        }
        if (this.loginOrRegister.isLogin === false) {
          this.loginOrRegister.isLogin = true
          this.loginOrRegister.dialogTitle = '登 录'
          this.loginOrRegister.switchButton = '注 册'
        }
        else {
          this.loginOrRegister.isLogin = false
          this.loginOrRegister.dialogTitle = '注 册'
          this.loginOrRegister.switchButton = '返 回'
        }
      },
      handleClose() {   // 加入这个函数，在关闭生效之前就先使父组件的Visible为false，避免了mutate错误
        this.$emit('loginDialogVisibleOff')
      }
    }
  }
</script>

<style scoped>

</style>