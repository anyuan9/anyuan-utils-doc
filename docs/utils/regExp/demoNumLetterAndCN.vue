<script setup lang="ts">
import { ref } from "vue";
import { regExp } from "@anyuan/utils";

// numLetterAndCN 测试数据
const numLetterAndCNRes = ref<
  Array<{ label: string; value: string; expected: boolean }>
>([]);
numLetterAndCNRes.value = [
  { label: "数字字母汉字混合", value: "Abc123张三", expected: true },
  { label: "纯汉字", value: "张三李四", expected: true },
  { label: "纯数字字母", value: "abc123", expected: true },
  { label: "空字符串", value: "", expected: true },
  { label: "包含特殊字符", value: "abc_123", expected: false },
  { label: "包含空格", value: "abc 123", expected: false }
];
</script>

<template>
  <naive-theme>
    <div
      v-for="(item, index) in numLetterAndCNRes"
      :key="index"
      className="flex flex-col justify-center mt-2"
    >
      <div>
        <span className="font-bold">{{ item.label }}</span>
        <span className="ml-2">
          regExp.numLetterAndCN.test("{{ item.value }}")
        </span>
      </div>
      <n-gradient-text type="info">
        // 预期: {{ item.expected }}, 实际:
        {{ regExp.numLetterAndCN.test(item.value) }}, 结果:
        {{
          regExp.numLetterAndCN.test(item.value) === item.expected ? "✓" : "✗"
        }}
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
