<template>
  <div class="login-container">
    <el-form ref="loginForm" :model="loginForm" :rules="loginRules" class="login-form" auto-complete="on" label-position="left">
      <div class="login-logo">
        <img src="~@/assets/login-imges/logo.png" alt="">
      </div>
      <!-- 手机号 -->
      <el-form-item prop="loginName">
        <span class="svg-container">
          <svg-icon icon-class="souji" />
        </span>
        <el-input
          v-model="loginForm.loginName"
          placeholder="请输入账户"
          name="loginName"
          type="text"
          tabindex="1"
          auto-complete="on"
        />
      </el-form-item>
      <!-- 密码 -->
      <el-form-item prop="password">
        <span class="svg-container">
          <svg-icon icon-class="password" />
        </span>
        <el-input
          v-model="loginForm.password"
          :type="passwordType"
          placeholder="请输入密码"
          name="password"
          tabindex="2"
          auto-complete="on"
        />
        <span class="svg-container password" @click="passwordType==='text'? passwordType='password': passwordType='text'">
          <svg-icon v-if="passwordType==='password'" icon-class="flinch" />
          <svg-icon v-else icon-class="goggle" />
        </span>
      </el-form-item>
      <!-- 验证码 -->
      <el-form-item prop="code">
        <el-row class="row-bg">
          <el-col class="Captcha-input" :span="17">
            <span class="svg-container">
              <svg-icon icon-class="shield" />
            </span>
            <el-input
              ref="code"
              v-model="loginForm.code"
              placeholder="请输入验证码"
              name="code"
              type="text"
              tabindex="3"
              auto-complete="on"
            />
          </el-col>
          <el-col class="Captcha-image" :span="7" @click.native="FlushCik">
            <el-image
              style="width: 130px; height:50px"
              :src="imgUrl"
              lazy
            />
          </el-col>
        </el-row>
      </el-form-item>

      <el-button :loading="loading" class="loginBtn" type="primary" @click.native.prevent="handleLogin">登录</el-button>

    </el-form>
  </div>
</template>

<script>
import { validUsername } from '@/utils/validate'
import { imageCode } from '@/api/user'
export default {
  name: 'Login',
  data() {
    const validateLoginName = (rule, value, callback) => {
      if (!validUsername(value)) {
        callback(new Error('请输入账户'))
      } else {
        callback()
      }
    }
    const validatePassword = (rule, value, callback) => {
      if (value.length === 0) {
        callback(new Error('请输入密码'))
      } else {
        callback()
      }
    }
    const validateCode = (rule, value, callback) => {
      if (value.length < 4) {
        callback(new Error('请输入验证码'))
      } else {
        callback()
      }
    }
    return {
      loginForm: {
        loginName: 'admin', // 用户名
        password: 'admin', // 密码
        code: '', // 验证码
        clientToken: '', // 验证token
        loginType: '0'
      },
      loginRules: {
        loginName: [{ required: true, trigger: ['blur', 'change'], validator: validateLoginName }],
        password: [{ required: true, trigger: ['blur', 'change'], validator: validatePassword }],
        code: [{ required: true, trigger: 'blur', validator: validateCode }]
      },
      loading: false, // 加载
      passwordType: 'password', // 密码输入框格式test
      imgUrl: '', // 验证图片
      throttle: 'true' // 节流
    }
  },
  watch: {
  },
  created() {
    this.FlushCik()
  },

  methods: {
    showPwd() {
    },
    // 登录
    async handleLogin() {
      if (this.throttle) {
        try {
          this.loading = true
          await this.$refs.loginForm.validate()
          await this.$store.dispatch('user/gitToken', this.loginForm)
          console.log(1)
          this.$router.push('/')
        } catch (e) {
          //
        } finally {
          this.loading = false
        }
      }
    },
    // 验证码
    async FlushCik() {
      if (this.throttle) {
        this.throttle = false
        console.log(1)
        const len = 32
        const chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678'
        const maxPos = chars.length
        let character = ''
        for (let i = 0; i < len; i++) {
          character += chars.charAt(Math.floor(Math.random() * maxPos))
        }
        try {
          this.loginForm.clientToken = character
          const res = await imageCode(character)
          this.imgUrl =
          'data:image/png;base64,' +
          btoa(
            new Uint8Array(res.data).reduce(
              (data, byte) => data + String.fromCharCode(byte),
              ''
            )
          )
          this.throttle = true
        } catch (e) {
          this.loading = false
          this.$message({
            message: e,
            center: true,
            duration: 3000
          })
          this.throttle = true
        // 失败
        }
      }
    }

  }
}
</script>

<style lang="scss">
/* 修复input 背景不协调 和光标变色 */
/* Detail see https://github.com/PanJiaChen/vue-element-admin/pull/927 */

$bg:#fff;
$cursor: #999;
@supports (-webkit-mask: none) and (not (cater-color: $cursor)) {
  .login-container .el-input input {
    color: $cursor;
  }
}

/* reset element-ui css */
.login-container {
  .el-input {
    display: inline-block;
    height: 47px;
    width: 85%;

    input {
      background: transparent;
      border: 0px;
      -webkit-appearance: none;
      border-radius: 0px;
      padding: 12px 5px 12px 15px;
      height: 47px;
      caret-color: $cursor;

      &:-webkit-autofill {
        box-shadow: 0 0 0px 1000px $bg inset !important;
        -webkit-text-fill-color: $cursor !important;
      }
    }
  }
// .el-form-item__content{
// line-height: 52px;
// }
  .el-form-item {
    width: 100%;
    height: 52px;
    margin-bottom: 24px;
    background: $bg;
    border: 1px solid #e2e2e2;
    border-radius: 4px;
  }
  .loginBtn{
    width: 100%;
    height: 52px;
    background: linear-gradient(262deg,#2e50e1,#6878f0);
    opacity: .91;
    border-radius: 8px;
    color: $bg;
    text-shadow: 0 7px 22px #cfcfcf;
  }
}
</style>

<style lang="scss" scoped>
$bg:url(~@/assets/login-imges/background.png) ;
$dark_gray:#889aa4;
$light_gray:#eee;
$white: #fff;
.login-container {
  min-height: 100%;
  width: 100%;
  background: $bg no-repeat;
  background-size:cover;
  overflow: hidden;

  .login-form {
    position: absolute;
    width: 518px;
    height: 388px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 76px 35px 0;
    background: $white;
    border-radius: 10px;
  }

  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
  }
  .password{
    padding: 6px 15px 6px 5px;
  }
.login-logo{
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%,-50%);
  background:none;

  img{
  width: 95px;
  height: 95px;
  }
}

.row-bg{
  height: 52px;
  display: flex;
}
}
</style>
