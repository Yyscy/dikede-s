<template>
  <div class="searchForm">
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <search v-model="formInline.user" />
      <el-form-item label="活动区域">
        <el-select v-model="formInline.region" placeholder="活动区域">
          <el-option label="区域一" value="shanghai" />
          <el-option label="区域二" value="beijing" />
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import search from './search.vue'
export default {

  // 组件
  components: {
    search
  },
  // 数据
  data() {
    return {
      formInline: {
        user: '',
        region: ''
      }
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
    onSubmit() {
      console.log('submit!')
    }
  }

}
</script>

<style scoped>

</style>
