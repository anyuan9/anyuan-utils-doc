<script setup lang="ts">
import { ref } from "vue";
import { flatToTree } from "@anyuan/utils";
import type { TreeFlatNode } from "@anyuan/utils";

// 测试用的扁平数据
const flatData: TreeFlatNode[] = [
  { id: 1, label: "一级 1", type: "folder" },
  { id: 2, label: "一级 2", type: "folder" },
  { id: 3, label: "二级 1-1", pId: 1, type: "folder" },
  { id: 4, label: "二级 1-2", pId: 1, type: "file" },
  { id: 5, label: "二级 2-1", pId: 2, type: "file" },
  { id: 6, label: "二级 2-2", pId: 2, type: "file" },
  { id: 7, label: "三级 1-1-1", pId: 3, type: "file" },
  { id: 8, label: "三级 1-1-2", pId: 3, type: "file" },
  { id: 9, label: "一级 3", type: "file" }
];

// flatToTree 测试数据
const flatToTreeRes = ref<
  Array<{
    label: string;
    flatData: TreeFlatNode[];
    propertyNames?: any;
    result?: string;
  }>
>([]);
flatToTreeRes.value = [
  {
    label: "基本扁平转树",
    flatData: flatData
  },
  {
    label: "自定义属性名",
    flatData: [
      { key: 1, name: "一级 1", nodeType: "folder" },
      { key: 2, name: "一级 2", nodeType: "folder" },
      { key: 3, name: "二级 1-1", parentKey: 1, nodeType: "folder" },
      { key: 4, name: "二级 1-2", parentKey: 1, nodeType: "file" }
    ],
    propertyNames: {
      id: "key",
      parentId: "parentKey",
      children: "childNodes",
      preserves: ["name", "nodeType"]
    }
  },
  {
    label: "无序扁平数据",
    flatData: [
      { id: 5, label: "二级 2-1", pId: 2 },
      { id: 3, label: "二级 1-1", pId: 1 },
      { id: 1, label: "一级 1" },
      { id: 2, label: "一级 2" },
      { id: 4, label: "二级 1-2", pId: 1 }
    ]
  },
  {
    label: "包含孤立节点",
    flatData: [
      { id: 1, label: "一级 1" },
      { id: 2, label: "孤立节点" }, // 没有父节点，但也不是根节点（没有pId）
      { id: 3, label: "二级 1-1", pId: 1 },
      { id: 4, label: "孤儿节点", pId: 999 } // 父节点不存在
    ]
  },
  {
    label: "空数据转换",
    flatData: []
  }
];

const executeFlatToTree = (item: any) => {
  try {
    const result = flatToTree(item.flatData, item.propertyNames);
    item.result = result;
  } catch (error) {
    item.result = `错误: ${error}`;
  }
};
</script>

<template>
  <naive-theme>
    <div
      v-for="(item, index) in flatToTreeRes"
      :key="index"
      className="flex flex-col justify-center mt-2"
    >
      <div>
        <span className="font-bold">{{ item.label }}</span>
        <span className="ml-2">
          flatToTree({{ JSON.stringify(item.flatData)
          }}{{
            item.propertyNames ? `, ${JSON.stringify(item.propertyNames)}` : ""
          }})
        </span>
        <n-button @click="executeFlatToTree(item)" style="margin-top: 5px">
          执行测试
        </n-button>
      </div>
      <n-gradient-text type="info">
        // {{ item.result || "未执行" }}
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
