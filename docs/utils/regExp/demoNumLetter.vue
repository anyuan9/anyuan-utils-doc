<script setup lang="ts">
import { ref } from "vue";
import { regExp } from "@anyuan/utils";

// numLetter 测试数据
const numLetterRes = ref<
  Array<{ label: string; value: string; expected: boolean }>
>([]);
numLetterRes.value = [
  { label: "纯数字", value: "123", expected: true },
  { label: "纯字母", value: "abc", expected: true },
  { label: "数字字母混合", value: "abc123", expected: true },
  { label: "空字符串", value: "", expected: true },
  { label: "包含汉字", value: "abc123张三", expected: false },
  { label: "包含特殊字符", value: "abc_123", expected: false }
];
</script>

<template>
  <naive-theme>
    <div
      v-for="(item, index) in numLetterRes"
      :key="index"
      className="flex flex-col justify-center mt-2"
    >
      <div>
        <span className="font-bold">{{ item.label }}</span>
        <span className="ml-2">
          regExp.numLetter.test("{{ item.value }}")
        </span>
      </div>
      <n-gradient-text type="info">
        // 预期: {{ item.expected }}, 实际:
        {{ regExp.numLetter.test(item.value) }}, 结果:
        {{ regExp.numLetter.test(item.value) === item.expected ? "✓" : "✗" }}
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
