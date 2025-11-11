<script setup lang="ts">
import { ref } from "vue";
import { regExp } from "@anyuan/utils";

// upperCaseLetter 测试数据
const upperCaseLetterRes = ref<
  Array<{ label: string; value: string; expected: boolean }>
>([]);
upperCaseLetterRes.value = [
  { label: "纯大写字母", value: "ABC", expected: true },
  { label: "包含小写字母", value: "ABc", expected: false },
  { label: "纯小写字母", value: "abc", expected: false },
  { label: "包含数字", value: "ABC123", expected: false },
  { label: "空字符串", value: "", expected: false }
];
</script>

<template>
  <naive-theme>
    <div
      v-for="(item, index) in upperCaseLetterRes"
      :key="index"
      className="flex flex-col justify-center mt-2"
    >
      <div>
        <span className="font-bold">{{ item.label }}</span>
        <span className="ml-2">
          regExp.upperCaseLetter.test("{{ item.value }}")</span
        >
      </div>
      <n-gradient-text type="info">
        // 预期: {{ item.expected }}, 实际:
        {{ regExp.upperCaseLetter.test(item.value) }}, 结果:
        {{
          regExp.upperCaseLetter.test(item.value) === item.expected ? "✓" : "✗"
        }}
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
