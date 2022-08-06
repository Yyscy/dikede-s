<template>
  <div>
    <div class="searchForm">
      <el-form
        :inline="true"
        size="medium"
        :model="formInline"
        class="demo-form-inline"
      >
        <el-form-item label="审批人">
          <el-input v-model="formInline.user" placeholder="审批人" />
        </el-form-item>
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
    <div class="main-form">
      <el-row class="main-btn" type="flex">
        <el-col span="3"><el-button class="button orange" size="medium">默认按钮</el-button></el-col>
        <el-col span="3"><el-button class="button" size="medium">默认按钮</el-button></el-col>
      </el-row>
      <el-table
        ref="multipleTable"
        class="form"
        :data="tableData"
        tooltip-effect="dark"
        style="width: 100%"
        @selection-change="handleSelectionChange"
      >
        <el-table-column
          type="selection"
          width="55"
        />
        <el-table-column
          label="日期"
          width="120"
        >
          <template slot-scope="scope">{{ scope.row.date }}</template>
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
          width="120"
        />
        <el-table-column
          prop="address"
          label="地址"
          show-overflow-tooltip
        />
      </el-table>
      <div style="margin-top: 20px">
        <el-button @click="toggleSelection([tableData[1], tableData[2]])">切换第二、第三行的选中状态</el-button>
        <el-button @click="toggleSelection()">取消选择</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // 组件
  components: {},
  // 数据
  data() {
    return {
      formInline: {
        user: '',
        region: ''
      },
      tableData: [{
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-08',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-06',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-07',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }],
      multipleSelection: []
    }
  },

  // 计算属性
  computed: {},

  // 创建后
  created() {},

  // 函数
  methods: {
    onSubmit() {
      console.log('submit!')
    },
    toggleSelection(rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row)
        })
      } else {
        this.$refs.multipleTable.clearSelection()
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val
    }
  }
}
</script>

<style lang="scss"  scoped>
.searchForm {
  display: flex;
  align-items: center;
  height: 64px;
  margin-bottom: 20px;
  padding-left: 17px;
  background-color: #fff;
  margin-bottom: 20px;
  .demo-form-inline {
    height: 36px;
    .el-form-item {
      margin-bottom: unset;
    }
  }
}
.main-form{
    padding: 20px 15px 19px 17px;
    background-color: #fff;
    .main-btn{
      margin-bottom: 20px;
    }
}
.button{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80px!important;
    height: 36px;
    padding: 0;
    border: none;
}
.orange{
  background: linear-gradient(135deg,#ff9743,#ff5e20)!important;
  color: #fff;
}
.lightpink{
    background-color: #fbf4f0!important;
    color: #655b56!important;
}
</style>
