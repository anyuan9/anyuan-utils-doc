<script setup lang="ts">
import { ref } from "vue";
import { treeToFlat, flatToTree } from "@anyuan/utils";
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

// 综合测试：树转扁平再转回树
const comprehensiveTestRes = ref<{
  originalTree?: string;
  toFlatResult?: string;
  backToTreeResult?: string;
  isConsistent?: boolean;
}>({});
const executeComprehensiveTest = () => {
  try {
    // 原始树
    comprehensiveTestRes.value.originalTree = JSON.stringify(treeData);

    // 树转扁平
    const flatResult = treeToFlat(treeData);
    comprehensiveTestRes.value.toFlatResult = `生成 ${flatResult.length} 个节点`;

    // 扁平转回树
    const treeResult = flatToTree(flatResult);
    comprehensiveTestRes.value.backToTreeResult = `生成 ${treeResult.length} 个根节点`;

    // 验证一致性（简化验证）
    comprehensiveTestRes.value.isConsistent =
      treeResult.length === treeData.length &&
      JSON.stringify(treeResult.map(n => n.id).sort()) ===
        JSON.stringify(treeData.map(n => n.id).sort());
  } catch (error) {
    comprehensiveTestRes.value.backToTreeResult = `错误: ${error}`;
    comprehensiveTestRes.value.isConsistent = false;
  }
};
</script>

<template>
  <naive-theme>
    <h2>综合测试 - 树 ↔ 扁平 互相转换</h2>
    <div className="flex flex-col justify-center mt-2">
      <div>树结构 → 扁平结构 → 树结构 (验证一致性)</div>
      <div>
        原始树: {{ comprehensiveTestRes.originalTree || "未执行" }}<br />
        转扁平: {{ comprehensiveTestRes.toFlatResult || "未执行" }}<br />
        转回树: {{ comprehensiveTestRes.backToTreeResult || "未执行" }}<br />
        一致性:
        {{
          comprehensiveTestRes.isConsistent !== undefined
            ? comprehensiveTestRes.isConsistent
              ? "✅ 一致"
              : "❌ 不一致"
            : "未执行"
        }}
      </div>
      <n-button @click="executeComprehensiveTest()" style="margin-top: 5px">
        执行综合测试
      </n-button>
    </div>
  </naive-theme>
</template>
