<template>
  <div class="bg">
    <el-card class="login-form-layout">
      <el-form
        autocomplete="on"
        :model="loginForm"
        ref="loginForm"
        label-position="left"
      >
        <div style="text-align: center">
          <svg-icon icon-class="login-mall" style="width: 56px;height: 56px;color: #409EFF"></svg-icon>
        </div>
        <h2 class="login-title color-main">后台登陆</h2>
        <el-form-item prop="username">
          <el-input
            name="username"
            type="text"
            v-model="loginForm.username"
            autocomplete="on"
            placeholder="请输入用户名"
          >
            <span slot="prefix">
              <svg-icon icon-class="user" class="color-main"></svg-icon>
            </span>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            name="password"
            :type="pwdType"
            @keyup.enter.native="handleLogin"
            v-model="loginForm.password"
            autocomplete="on"
            placeholder="请输入密码"
          >
            <span slot="prefix">
              <svg-icon icon-class="password" class="color-main"></svg-icon>
            </span>
            <span slot="suffix" @click="showPwd">
              <svg-icon icon-class="eye" class="color-main"></svg-icon>
            </span>
          </el-input>
        </el-form-item>
        <el-form-item style="margin-bottom: 60px">
          <el-button
            style="width: 100%"
            type="primary"
            :loading="loading"
            @click.native.prevent="handleLogin"
          >登录</el-button>
          <a href="/register">立刻注册</a>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      loginForm: {
        username: "admin",
        password: "123456"
      },
      loading: false,
      pwdType: "password",
    };
  },
  methods: {
    showPwd() {
      if (this.pwdType === "password") {
        this.pwdType = "";
      } else {
        this.pwdType = "password";
      }
    },
    handleLogin() {
      this.$refs.loginForm.validate(valid => {
        console.log(valid)
        if (valid) {
          this.$router.push('/')
        //   this.loading = true;
        //   this.$store
        //     .dispatch("Login", this.loginForm)
        //     .then(response => {
        //       this.loading = false;
        //       let code = response.data.code;
        //       if (code == 200) {
        //         this.$router.push({
        //           path: "/",
        //           query: { data: response.data.data }
        //         });
        //       } else {
        //         this.$router.push({
        //           path: "/error",
        //           query: { message: response.data.message }
        //         });
        //       }
        //     })
        //     .catch(() => {
        //       this.loading = false;
        //     });
        // } else {
        //   // eslint-disable-next-line no-console
        //   console.log("参数验证不合法！");
        //   return false;
        }
      });
    }
  }
};
</script>

<style scoped>
.bg{
  width: 100%;
  height: 100%;
  background-image: url('@/assets/background/miku1.png');
  background-repeat:no-repeat;
  background-size: cover;
  background-position: center;
}

.login-form-layout {
  position: absolute;
  left: 0;
  right: 0;
  width: 450px;
  margin: 150px auto;
  border-top: 10px solid rgba(62, 172, 255, 0.5) ;
  background-color: rgba(255,255,255,0.3);
}

.login-title {
  text-align: center;
  margin-bottom: 10px;
  color: #fff;
}

.login-center-layout {
  background: #409eff;
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
  margin-top: 200px;
}

.el-card{
  background-color: (255,255,255,0.3);
}
</style>
