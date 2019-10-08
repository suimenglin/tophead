<template>
  <div class="login">
    <div class="login-warp">
      <div class="loginLogo">
        <img src="@/assets/logo_index.png" alt="">
      </div>
      <el-form ref="form" :model="form" rules="rules">
        <el-form-item>
          <el-input v-model="form.mobile"></el-input>
        </el-form-item>
        <el-form-item>
          <el-row :gutter="20">
            <el-col :span="15">
              <el-input v-model="form.code"></el-input>
            </el-col>
            <el-col :span="9">
              <el-button plain>发送验证码</el-button>
            </el-col>
          </el-row>
        </el-form-item>
        <el-form-item>
          <el-checkbox v-model="checked">
            我已阅读并同意<a href="#">用户协议</a>和<a href="#">隐私条款</a>
          </el-checkbox>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" class="loginBtn">登陆</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      form: {
        mobile: '',
        code: ''
      }
    }
  },
  methods: {

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
