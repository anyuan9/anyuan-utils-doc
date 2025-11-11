<script setup lang="ts">
import { ref } from "vue";
import { treeFilterNodes } from "@anyuan/utils";
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

// treeFilterNodes 测试数据
const treeFilterNodesRes = ref<
  Array<{
    label: string;
    tree: TreeNode[];
    filterCondition: string;
    result?: string;
  }>
>([]);
treeFilterNodesRes.value = [
  {
    label: "过滤文件夹类型",
    tree: treeData,
    filterCondition: "node.type === 'folder'"
  },
  {
    label: "过滤文件类型",
    tree: treeData,
    filterCondition: "node.type === 'file'"
  },
  {
    label: "过滤ID大于5的节点",
    tree: treeData,
    filterCondition: "node.id > 5"
  },
  {
    label: "过滤标签包含'一级'的节点",
    tree: treeData,
    filterCondition: "node.label.includes('一级')"
  },
  {
    label: "空树过滤",
    tree: [],
    filterCondition: "node.id > 0"
  },
  {
    label: "无匹配条件",
    tree: treeData,
    filterCondition: "node.id > 100"
  }
];

const executeTreeFilterNodes = (item: any) => {
  try {
    let filterFn;
    switch (item.filterCondition) {
      case "node.type === 'folder'":
        filterFn = (node: TreeNode) => node.type === "folder";
        break;
      case "node.type === 'file'":
        filterFn = (node: TreeNode) => node.type === "file";
        break;
      case "node.id > 5":
        filterFn = (node: TreeNode) => node.id > 5;
        break;
      case "node.label.includes('一级')":
        filterFn = (node: TreeNode) =>
          node.label && node.label.includes("一级");
        break;
      case "node.id > 100":
        filterFn = (node: TreeNode) => node.id > 100;
        break;
      default:
        filterFn = () => true;
    }

    const result = treeFilterNodes(item.tree, filterFn);
    item.result = `找到 ${result.length} 个节点: [${result.map(n => n.label).join(", ")}]`;
  } catch (error) {
    item.result = `错误: ${error}`;
  }
};
</script>

<template>
  <naive-theme>
    <div
      v-for="(item, index) in treeFilterNodesRes"
      :key="index"
      className="flex flex-col justify-center mt-2"
    >
      <div>
        <span className="font-bold">{{ item.label }}</span>
        <span className="ml-2">
          treeFilterNodes(tree, {{ item.filterCondition }})
        </span>
        <n-button @click="executeTreeFilterNodes(item)" style="margin-top: 5px">
          执行测试
        </n-button>
      </div>
      <n-gradient-text type="info">
        // {{ item.result || "未执行" }}
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
