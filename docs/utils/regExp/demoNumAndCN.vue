<script setup lang="ts">
import { ref } from "vue";
import { regExp } from "@anyuan/utils";

// numAndCN 测试数据
const numAndCNRes = ref<
  Array<{ label: string; value: string; expected: boolean }>
>([]);
numAndCNRes.value = [
  { label: "数字汉字混合", value: "123张三", expected: true },
  { label: "纯汉字", value: "张三李四", expected: true },
  { label: "纯数字", value: "123", expected: true },
  { label: "包含字母", value: "abc123", expected: false },
  { label: "包含特殊字符", value: "123_张三", expected: false },
  { label: "空字符串", value: "", expected: false }
];
</script>

<template>
  <naive-theme>
    <div
      v-for="(item, index) in numAndCNRes"
      :key="index"
      className="flex flex-col justify-center mt-2"
    >
      <div>
        <span className="font-bold">{{ item.label }}</span>
        <span className="ml-2"> regExp.numAndCN.test("{{ item.value }}") </span>
      </div>
      <n-gradient-text type="info">
        // 预期: {{ item.expected }}, 实际:
        {{ regExp.numAndCN.test(item.value) }}, 结果:
        {{ regExp.numAndCN.test(item.value) === item.expected ? "✓" : "✗" }}
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
