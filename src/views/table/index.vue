<template>
  <div class="app-container">
    <div class="filter-container">
      <span style="font-size: 14px;margin-left: 10px; margin-right: 10px;">ID</span>
      <el-input v-model="listQuery.id" placeholder="" style="width: 100px;" class="filter-item" />
      <span style="font-size: 14px;margin-left: 10px; margin-right: 10px;">用户名</span>
      <el-input v-model="listQuery.userName" placeholder="" style="width: 100px;" class="filter-item"/>
      <span style="font-size: 14px;margin-left: 10px; margin-right: 10px;">密码</span>
      <el-input v-model="listQuery.password" placeholder="" style="width: 100px;" class="filter-item" />
      <el-select v-model="listQuery.type" placeholder="" clearable style="width: 90px" class="filter-item">
        <el-option v-for="item in types" :key="item" :label="item" :value="item" />
      </el-select>
      <el-button class="filter-item" type="primary" icon="el-icon-search" @click="handleFilter">
        搜索
      </el-button>
    </div>
    <el-table
      v-loading="listLoading"
      :data="list"
      element-loading-text="Loading"
      border
      fit
      stripe
    >
      <el-table-column align="center" label="ID" width="95">
        <template slot-scope="scope">
          {{ scope.row.id }}
        </template>
      </el-table-column>
      <el-table-column label="userName">
        <template slot-scope="scope">
          {{ scope.row.userName }}
        </template>
      </el-table-column>
      <el-table-column label="password" width="110" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.password }}</span>
        </template>
      </el-table-column>
      <el-table-column label="Pageviews" width="110" align="center">
        <template slot-scope="scope">
          {{ scope.row.pageviews }}
        </template>
      </el-table-column>
      <el-table-column class-name="status-col" label="Status" width="110" align="center">
        <template slot-scope="scope">
          <el-tag :type="scope.row.status | statusFilter">{{ scope.row.status }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column align="center" prop="created_at" label="Display_time" width="200">
        <template slot-scope="scope">
          <i class="el-icon-time" />
          <span>{{ scope.row.display_time }}</span>
        </template>
      </el-table-column>
    </el-table>
    <div class="bottom-pagination">
      <div style="position: absolute; right: 0; ">
        <pagination v-show="total>0" :total="total" :page.sync="listQuery.pageNum" :limit.sync="listQuery.pageSize" @pagination="fetchData" />
      </div>
    </div>
  </div>
</template>

<script>
import { findUsers } from '@/api/user'
import Pagination from '@/components/Pagination' // secondary package based on el-pagination

export default {
  components: { Pagination },
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: 'success',
        draft: 'gray',
        deleted: 'danger'
      }
      return statusMap[status]
    }
  },
  data() {
    return {
      list: null,
      listLoading: true,
      total: 0,
      listQuery: {
        pageNum: 1,
        pageSize: 10,
        id: null,
        userName: null,
        password: null,
        type: null
      },
      types: ['用户', '管理员']
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      this.listLoading = true
      findUsers(this.listQuery).then(response => {
        this.list = response.data.items
        this.total = response.data.total
        setTimeout(() => {
          this.listLoading = false
        }, 0.5 * 1000)
      })
    },
    handleFilter() {
      this.listQuery.pageNum = 1
      this.fetchData()
    }
  }
}
</script>
