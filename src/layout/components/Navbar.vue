<template>
  <div class="navbar">
    <div class="left" @click="logout">
      <img width="88" class="" src="@/assets/login-imges/headerlogo.png">
    </div>
    <div class="right">
      <div class="right-users" @click.native="logout">
        <img v-imgError="defaultImg" :src="image" class="user-avatar">
        <span class="right-text">{{ name }}</span>
      </div>
      <div class="secede" @click="logout">
        <span>退出</span>
        <i class="el-icon-caret-bottom" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      defaultImg: 'http://destiny001.gitee.io/image/monkey_02.jpg'
    }
  },
  computed: {
    ...mapGetters([
      'image',
      'name'
    ])
  },
  methods: {
    async logout() {
      console.log(1)
      await this.$store.dispatch('user/logout')
      this.$router.push(`/login`)
    }
  }
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
    color: #fff;
    margin-right: 24px;
    display: flex;
    align-items: center;
    .user-avatar {
      // cursor: pointer;
      width: 35px;
      height: 35px;
      border-radius: 50%;
      background-color: rgb(255, 255, 255);
    }
    .right-users {
      display: flex;
      padding-right: 20px;
      align-items: center;
      .right-text {
        margin-left: 13px;
        line-height: 60px;
      }
    }
    .el-icon-caret-bottom {
      font-size: 16px;
    }
    .secede{
      line-height: 60px;
    }
  }
}
</style>
