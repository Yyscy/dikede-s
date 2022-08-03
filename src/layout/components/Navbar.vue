<template>
  <div class="navbar">
    <div class="left">
      <img width="88" class="" src="@/assets/login-imges/headerlogo.png">
    </div>

    <div class="right">
      <div class="right-users">
        <img src="@/assets/login-imges/logo.png" class="user-avatar">
        <span class="right-text">和hi衣服hi机</span>
      </div>
      <div class="secede" @click="logout">
        <span>退出</span>
        <i class="el-icon-caret-bottom" />
      </div>
    </div>
  </div>
</template>

<script>
// import { mapGetters } from "vuex";

export default {
  // components: {},
  // computed: {
  //   ...mapGetters(["sidebar", "avatar"]),
  // },
  // methods: {
  //   async logout() {
  //     await this.$store.dispatch("user/logout");
  //     this.$router.push(`/login?redirect=${this.$route.fullPath}`);
  //   },
  // },
}
</script>

<style lang="scss" scoped>
.navbar {
  height: 60px;
  overflow: hidden;
  position: relative;
  background-image: url("~@/assets/login-imges/navbar.png");
  background-size: cover;
  background-repeat: no-repeat;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  display: flex;
  justify-content: space-between;
.left{
  height: 100%;
  display: inline-block;
  line-height: 100%;
  display: flex;
  align-items: center;
  padding-left: 15px;
}
  .right {
    float: right;
    height: 100%;
    width: 240px;
    color: #fff;
    margin-right: 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .user-avatar {
      // cursor: pointer;
      width: 35px;
      height: 35px;
      border-radius: 50%;
      background-color: rgb(255, 255, 255);
    }
    .right-users {
      display: flex;
      align-items: center;
      .right-text {
        margin-left: 13px;
        line-height: 60px;
      }
    }

    .el-icon-caret-bottom {
      font-size: 16px;
    }
  }
}
</style>
