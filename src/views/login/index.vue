<template>
  <div class="login">
    <div class="login-warp">
      <div class="loginLogo">
        <img src="@/assets/logo_index.png" alt="">
      </div>
      <el-form ref="form" :model="form" :rules="rules">
        <el-form-item prop="mobile">
          <el-input v-model="form.mobile" placeholder="请输入手机号码"></el-input>
        </el-form-item>
        <el-form-item prop="code">
          <el-row :gutter="20">
            <el-col :span="15">
              <el-input v-model="form.code" placeholder="请输入验证码"></el-input>
            </el-col>
            <el-col :span="9">
              <el-button plain>
                发送验证码
              </el-button>
            </el-col>
          </el-row>
        </el-form-item>
        <el-form-item prop="read">
          <el-checkbox v-model="form.read">
            我已阅读并同意<a href="#">用户协议</a>和<a href="#">隐私条款</a>
          </el-checkbox>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" class="loginBtn" @click="login" :loading="loginLoading">登陆</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      form: {
        mobile: '13911111111',
        code: '246810',
        read: false
      },
      rules: {
        mobile: [
          { required: true, message: '请输入手机号码', trigger: 'blur' },
          { min: 11, max: 11, message: '长度必须为11位', trigger: 'blur' }
        ],
        code: [
          { required: true, message: '请输入验证码', trigger: 'blur' },
          { min: 6, max: 6, message: '长度必须为6位', trigger: 'blur' }
        ],
        read: [
          { required: true, message: '请先阅读用户协议', trigger: 'change' },
          { pattern: /true/, message: '请先阅读用户协议', trigger: 'change' }
        ]
      },
      loginLoading: false
    }
  },
  methods: {
    login () {
      this.$refs['form'].validate((valid) => {
        if (valid) {
          this.submitData()
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    submitData () {
      this.loginLoading = true
      axios({
        url: 'http://ttapi.research.itcast.cn/mp/v1_0/authorizations',
        method: 'post',
        data: this.form
      }).then(res => {
        this.$router.push('/')
        this.$message({
          message: '登陆成功',
          type: 'success'
        })
      }).catch(err => {
        console.log(err)
        this.$message.error('手机号码或者验证码错误')
        this.loginLoading = false
      })
    }
  }
}
</script>

<style lang="less" scoped>
  .login{
    height: 100%;
    background-color: #ccc;
    display: flex;
    justify-content: center;
    align-items: center;
    .login-warp{
      min-width: 300px;
      background-color: #fff;
      padding: 30px;
      .loginLogo{
        width: 100%;
        text-align: center;
        margin-bottom: 30px;
        img{
          width: 150px;
        }
      }
      .loginBtn{
        width: 100%;
      }
    }
  }
</style>
