<template>
  <el-button class="button" size="medium" @click="click">默认按钮</el-button>
</template>

<script>
export default {

  // 组件
  components: {

  },
  // 数据
  data() {
    return {

    }
  },

  // 计算属性
  computed: {

  },

  // 创建后
  created() {

  },

  // 函数
  methods: {
    click() {
      this.$emit('click')
    }
  }

}
</script>

<style scoped>
.button{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80px!important;
    height: 36px;
    padding: 0;
    background-color: #fbf4f0!important;
    border: none;
    color: #655b56!important;
}
</style>
