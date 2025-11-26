<template>
  <div>
    <!-- 搜索表单 -->
    <n-form :model="searchParam" inline>
      <n-form-item label="名称">
        <n-input
          v-model:value="searchParam.name"
          placeholder="请输入名称"
          clearable
        />
      </n-form-item>
      <n-form-item>
        <n-button type="primary" @click="handleSearch">搜索</n-button>
        <n-button @click="handleReset">重置</n-button>
        <n-button @click="getFilteredSelection">筛选</n-button>
      </n-form-item>
    </n-form>

    <!-- 表格 -->
    <n-data-table
      v-if="showTable"
      :columns="tableColumns"
      :data="tableData"
      :pagination="pagination"
      :loading="loading"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, h, computed, resolveComponent, onMounted } from "vue";
import { useTable } from "@anyuan/utils";

// 定义数据类型
interface TableItem {
  id: number;
  name: string;
  status: boolean;
  createTime: string;
}

interface TableResult {
  total: number;
  records: TableItem[];
}

interface SearchParams {
  name?: string;
  status?: boolean;
}

const tableColumns = ref([]);

// 模拟 API 请求
const mockApi = (params: SearchParams) => {
  return new Promise<{ data: { records: TableItem[]; total: number } }>(
    resolve => {
      setTimeout(() => {
        const data = {
          total: 100,
          records: Array.from({ length: page.value.pageSize }, (_, i) => ({
            id: i + 1 + (page.value.pageNo - 1) * page.value.pageSize,
            name: `项目${i + 1}`,
            status: Math.random() > 0.5,
            createTime: new Date().toISOString()
          }))
        };
        resolve({ data });
      }, 500);
    }
  );
};

// 使用 useTable
const {
  loading,
  page,
  searchParam,
  tableData,
  selection,
  handleSearch,
  handleReset,
  handleSizeChange,
  handleCurrentChange,
  handleSelectionChange,
  handleSelectionFilter
} = useTable<SearchParams, TableResult, TableItem>(mockApi, {
  autoload: true,
  resetFresh: true,
  isPage: true,
  page: {
    pageNo: 1,
    pageSize: 10,
    pageSizes: [10, 20, 50],
    layout: "total, sizes, prev, pager, next, jumper"
  },
  searchParam: {
    name: "",
    status: undefined
  },
  fieldProps: {
    total: "total",
    list: "records"
  },
  paramFormat: params => {
    console.log("参数格式化:", params);
    return {
      ...params,
      time: new Date().toISOString()
    };
  },
  dataFormat: tableData => {
    console.log("数据再处理:", tableData);
    return tableData;
  },
  dataCallback: tableData => {
    console.log("数据加载完成:", tableData);
  },
  errorCallback: error => {
    console.error("数据加载失败:", error);
  }
});

const pagination = computed(() => {
  return {
    page: page.value.pageNo,
    pageSize: page.value.pageSize,
    showSizePicker: true,
    pageSizes: page.value.pageSizes,
    onChange: handleCurrentChange,
    onUpdatePageSize: handleSizeChange
  };
});

// 编辑操作
const handleEdit = (row: TableItem) => {
  console.log("编辑行:", row);
};

// 获取筛选后的选择数据
const getFilteredSelection = () => {
  // 筛选状态为启用的项目
  const enabledItems = handleSelectionFilter(item => item.status);
  console.log("启用的项目:", enabledItems);
};

const showTable = ref(false);
onMounted(() => {
  tableColumns.value = [
    {
      title: "ID",
      key: "id"
    },
    {
      title: "名称",
      key: "name"
    },
    {
      title: "状态",
      key: "status",
      render: row => {
        return h(
          resolveComponent("NTag"),
          {
            type: row.status ? "success" : "error",
            size: "large"
          },
          { default: () => (row.status ? "启用" : "禁用") }
        );
      }
    },
    {
      title: "创建时间",
      key: "createTime"
    },
    {
      title: "操作",
      key: "action",
      render: row => {
        return h(
          resolveComponent("NButton"),
          {
            strong: true,
            tertiary: true,
            size: "small",
            onClick: () => handleEdit(row)
          },
          { default: () => "编辑" }
        );
      }
    }
  ];
  showTable.value = true;
});
</script>
