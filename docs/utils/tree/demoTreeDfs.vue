<script setup lang="ts">
import { ref } from "vue";
import { treeDfs } from "@anyuan/utils";
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

const deepTreeData = [
  {
    id: 1,
    label: "深度节点",
    children: [
      {
        id: 2,
        label: "子节点",
        children: [
          {
            id: 3,
            label: "孙节点",
            children: [{ id: 4, label: "曾孙节点" }]
          }
        ]
      }
    ]
  }
];

// treeDfs 测试数据
const treeDfsRes = ref<
  Array<{
    label: string;
    tree: TreeNode[];
    result?: string;
  }>
>([]);
treeDfsRes.value = [
  {
    label: "基本遍历",
    tree: treeData
  },
  {
    label: "空树",
    tree: []
  },
  {
    label: "单节点树",
    tree: [{ id: 1, label: "单节点" }]
  },
  {
    label: "深度嵌套树",
    tree: deepTreeData
  }
];

const executeTreeDfs = (item: any) => {
  const results: string[] = [];
  treeDfs(item.tree, node => {
    results.push(node.label || `节点${node.id}`);
  });
  item.result = `遍历顺序: [${results.join(" → ")}]`;
};
</script>

<template>
  <naive-theme>
    <div
      v-for="(item, index) in treeDfsRes"
      :key="index"
      className="flex flex-col justify-center mt-2"
    >
      <div>
        <span className="font-bold">{{ item.label }}</span>
        <span className="ml-2">
          treeDfs({{ JSON.stringify(item.tree) }}, callback)
        </span>
        <n-button @click="executeTreeDfs(item)" style="margin-top: 5px">
          执行测试
        </n-button>
      </div>
      <n-gradient-text type="info">
        // {{ item.result || "未执行" }}
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
