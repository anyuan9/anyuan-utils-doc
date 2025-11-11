<script setup>
  import demoTableSearch from './demoTableSearch.vue'
</script>

# useTable

::: tip 适用于 `Vue3`、`Nuxt3`、`HTML`
表格查询
:::

### 最简代码

```vue
<script setup lang="ts">
import { ref } from "vue";
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
</script>

<template>
  <!-- 搜索表单 -->
  <el-form :model="searchParam" inline>
    <el-form-item label="名称">
      <el-input v-model="searchParam.name" placeholder="请输入名称" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="handleSearch">搜索</el-button>
      <el-button @click="handleReset">重置</el-button>
      <el-button @click="getFilteredSelection">筛选</el-button>
    </el-form-item>
  </el-form>

  <!-- 表格 -->
  <el-table
    v-loading="loading"
    :data="tableData"
    @selection-change="handleSelectionChange"
  >
    <el-table-column type="selection" width="55" />
    <el-table-column prop="id" label="ID" width="80" />
    <el-table-column prop="name" label="名称" />
    <el-table-column prop="status" label="状态">
      <template #default="{ row }">
        <el-tag :type="row.status ? 'success' : 'danger'">
          {{ row.status ? "启用" : "禁用" }}
        </el-tag>
      </template>
    </el-table-column>
    <el-table-column prop="createTime" label="创建时间" />
    <el-table-column label="操作" width="120">
      <template #default="{ row }">
        <el-button type="text" @click="handleEdit(row)">编辑</el-button>
      </template>
    </el-table-column>
  </el-table>

  <!-- 分页 -->
  <el-pagination
    v-model:current-page="page.pageNo"
    v-model:page-size="page.pageSize"
    :page-sizes="page.pageSizes"
    :layout="page.layout"
    :total="page.total"
    @size-change="handleSizeChange"
    @current-change="handleCurrentChange"
  />
</template>
```

### 示例

#### 基础的表格查询

<demoTableSearch />

<details>

<summary>查看代码</summary>

<<< @/hooks/useTable/demoTableSearch.vue

</details>

### API

#### 参数

<div class="code-no-border">

| **参数属性** | 必传 | **说明**                              | **类型**                                        |
| ------------ | ---- | ------------------------------------- | ----------------------------------------------- |
| `request`    | 是   | 获取表格数据的请求方法                | `(params: TParams) => Promise<{ data: TData }>` |
| `options`    | 否   | 配置参数，具体看下面的 `options` 详情 | `UseTableOptions<TParams, TRow> = {}`           |

##### `options` 详情

| **参数属性**    | **说明**                                                                        | **类型**                                                                                        | **默认值**                         |
| --------------- | ------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ---------------------------------- |
| `autoload`      | 是否自动加载表格数据                                                            | `boolean`                                                                                       | `true`                             |
| `resetFresh`    | 执行reset时是否需要重新查询表格数据                                             | `boolean`                                                                                       | `true`                             |
| `isPage`        | 是否有分页                                                                      | `boolean`                                                                                       | `true`                             |
| `page`          | 分页组件参数                                                                    | `{pageNo?: number; pageSize?: number; total?: number; pageSizes?: number[];  layout?: string;}` |                                    |
| `searchParam`   | 查询条件初始化参数                                                              | `TParams`                                                                                       | `{}`                               |
| `fieldProps`    | 字段属性名配置                                                                  | `{ total?: string; list?: string;}`                                                             | `{ total: 'total'; list: 'list';}` |
| `paramFormat`   | 对查询条件初进行处理/格式化的方法                                               | `(param: TParams & PageParam) => any`                                                           | ``                                 |
| `dataFormat`    | 对后台返回的数据进行处理的方法 或者 分页情况下返回数据的字段（默认取data.list） | `(data: TRow[]) => any[]`                                                                       |                                    |
| `dataCallback`  | 对请求成功的数据进行处理的方法                                                  | `(data: any[]) => void`                                                                         |                                    |
| `errorCallback` | 对请求错误进行处理的方法                                                        | `(error: unknown) => void`                                                                      |                                    |
| `beforeSearch`  | 在请求之前执行的方法，若返回 false 或者返回 Promise 且被 reject，则停止查询     | `() => boolean \| Promise<boolean>`                                                             |                                    |

</div>

#### 返回值、方法
