<script setup lang="ts">
import { ref } from "vue";
import { treeDfsRecursive } from "@anyuan/utils";
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
// treeDfsRecursive 测试数据
const treeDfsRecursiveRes = ref<
  Array<{
    label: string;
    tree: TreeNode[];
    mode?: "pre-order" | "in-order" | "post-order";
    result?: string;
  }>
>([]);
treeDfsRecursiveRes.value = [
  {
    label: "前序遍历",
    tree: treeData,
    mode: "pre-order"
  },
  {
    label: "后序遍历",
    tree: treeData,
    mode: "post-order"
  },
  {
    label: "中序遍历",
    tree: treeData,
    mode: "in-order"
  },
  {
    label: "默认模式(前序)",
    tree: treeData
  },
  {
    label: "空树遍历",
    tree: [],
    mode: "pre-order"
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

const executeTreeDfsRecursive = (item: any) => {
  const results: string[] = [];
  treeDfsRecursive(
    item.tree,
    node => {
      results.push(node.label || `节点${node.id}`);
    },
    item.mode
  );
  item.result = `遍历顺序: [${results.join(" → ")}]`;
};
</script>

<template>
  <naive-theme>
    <div
      v-for="(item, index) in treeDfsRecursiveRes"
      :key="index"
      className="flex flex-col justify-center mt-2"
    >
      <div>
        <span className="font-bold">{{ item.label }}</span>
        <span className="ml-2">
          treeDfsRecursive({{ JSON.stringify(item.tree) }}, callback{{
            item.mode ? `, "${item.mode}"` : ""
          }})
        </span>
        <n-button
          @click="executeTreeDfsRecursive(item)"
          style="margin-top: 5px"
        >
          执行测试
        </n-button>
      </div>
      <n-gradient-text type="info">
        // {{ item.result || "未执行" }}
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
