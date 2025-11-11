<script setup lang="ts">
import { ref } from "vue";
import { treeToFlat } from "@anyuan/utils";
import type { TreeNode } from "@anyuan/utils";

// 测试用的树结构数据
const treeData: TreeNode[] = [
  {
    id: 1,
    label: "一级 1",
    type: "folder",
    children: [
      {
        id: 3,
        label: "二级 1-1",
        type: "folder",
        children: [
          { id: 7, label: "三级 1-1-1", type: "file" },
          { id: 8, label: "三级 1-1-2", type: "file" }
        ]
      },
      { id: 4, label: "二级 1-2", type: "file" }
    ]
  },
  {
    id: 2,
    label: "一级 2",
    type: "folder",
    children: [
      { id: 5, label: "二级 2-1", type: "file" },
      { id: 6, label: "二级 2-2", type: "file" }
    ]
  },
  { id: 9, label: "一级 3", type: "file" }
];

// treeToFlat 测试数据
const treeToFlatRes = ref<
  Array<{
    label: string;
    tree: TreeNode[];
    propertyNames?: any;
    result?: string;
  }>
>([]);
treeToFlatRes.value = [
  {
    label: "基本树转扁平",
    tree: treeData
  },
  {
    label: "自定义属性名",
    tree: treeData,
    propertyNames: {
      id: "key",
      parentId: "parentKey",
      children: "childNodes",
      preserves: ["label", "type"]
    }
  },
  {
    label: "只保留特定属性",
    tree: treeData,
    propertyNames: {
      preserves: ["id", "label"]
    }
  },
  {
    label: "空树转换",
    tree: []
  },
  {
    label: "单节点树",
    tree: [{ id: 1, label: "单节点", extra: "额外属性" }]
  }
];

const executeTreeToFlat = (item: any) => {
  try {
    const result = treeToFlat(item.tree, item.propertyNames);
    item.result = result;
  } catch (error) {
    item.result = `错误: ${error}`;
  }
};
</script>

<template>
  <naive-theme>
    <div
      v-for="(item, index) in treeToFlatRes"
      :key="index"
      className="flex flex-col justify-center mt-2"
    >
      <div>
        <span className="font-bold">{{ item.label }}</span>
        <span className="ml-2">
          treeToFlat({{ JSON.stringify(item.tree)
          }}{{
            item.propertyNames ? `, ${JSON.stringify(item.propertyNames)}` : ""
          }})
        </span>
        <n-button @click="executeTreeToFlat(item)" style="margin-top: 5px">
          执行测试
        </n-button>
      </div>
      <n-gradient-text type="info">
        // {{ item.result || "未执行" }}
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
