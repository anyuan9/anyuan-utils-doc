<script setup lang="ts">
import { ref } from "vue";
import { treeBfs } from "@anyuan/utils";
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

// treeBfs 测试数据
const treeBfsRes = ref<
  Array<{
    label: string;
    tree: TreeNode[];
    result?: string;
  }>
>([]);
treeBfsRes.value = [
  {
    label: "基本广度遍历",
    tree: treeData
  },
  {
    label: "空树广度遍历",
    tree: []
  },
  {
    label: "单层树结构",
    tree: [
      { id: 1, label: "节点1" },
      { id: 2, label: "节点2" },
      { id: 3, label: "节点3" }
    ]
  },
  {
    label: "不平衡树",
    tree: [
      {
        id: 1,
        label: "节点1",
        children: [
          { id: 2, label: "节点1-1" },
          { id: 3, label: "节点1-2" }
        ]
      },
      {
        id: 4,
        label: "节点2",
        children: [
          {
            id: 5,
            label: "节点2-1",
            children: [{ id: 6, label: "节点2-1-1" }]
          }
        ]
      }
    ]
  }
];

const executeTreeBfs = (item: any) => {
  const results: string[] = [];
  treeBfs(item.tree, node => {
    results.push(node.label || `节点${node.id}`);
  });
  item.result = `遍历顺序: [${results.join(" → ")}]`;
};
</script>

<template>
  <naive-theme>
    <div
      v-for="(item, index) in treeBfsRes"
      :key="index"
      className="flex flex-col justify-center mt-2"
    >
      <div>
        <span className="font-bold">{{ item.label }}</span>
        <span className="ml-2">
          treeBfs({{ JSON.stringify(item.tree) }}, callback)
        </span>
        <n-button @click="executeTreeBfs(item)" style="margin-top: 5px">
          执行测试
        </n-button>
      </div>
      <n-gradient-text type="info">
        // {{ item.result || "未执行" }}
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
