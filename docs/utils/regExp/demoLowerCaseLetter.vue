<script setup lang="ts">
import { ref } from "vue";
import { regExp } from "@anyuan/utils";

// lowerCaseLetter 测试数据
const lowerCaseLetterRes = ref<
  Array<{ label: string; value: string; expected: boolean }>
>([]);
lowerCaseLetterRes.value = [
  { label: "纯小写字母", value: "abc", expected: true },
  { label: "包含大写字母", value: "aBc", expected: false },
  { label: "纯大写字母", value: "ABC", expected: false },
  { label: "包含数字", value: "abc123", expected: false },
  { label: "空字符串", value: "", expected: false }
];
</script>

<template>
  <naive-theme>
    <div
      v-for="(item, index) in lowerCaseLetterRes"
      :key="index"
      className="flex flex-col justify-center mt-2"
    >
      <div>
        <span className="font-bold">{{ item.label }}</span>
        <span className="ml-2">
          regExp.lowerCaseLetter.test("{{ item.value }}")
        </span>
      </div>
      <n-gradient-text type="info">
        // 预期: {{ item.expected }}, 实际:
        {{ regExp.lowerCaseLetter.test(item.value) }}, 结果:
        {{
          regExp.lowerCaseLetter.test(item.value) === item.expected ? "✓" : "✗"
        }}
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
