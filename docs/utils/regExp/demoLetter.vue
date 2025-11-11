<script setup lang="ts">
import { ref } from "vue";
import { regExp } from "@anyuan/utils";

// letter 测试数据
const letterRes = ref<
  Array<{ label: string; value: string; expected: boolean }>
>([]);
letterRes.value = [
  { label: "纯小写字母", value: "abc", expected: true },
  { label: "纯大写字母", value: "ABC", expected: true },
  { label: "大小写混合", value: "AbC", expected: true },
  { label: "包含数字", value: "abc123", expected: false },
  { label: "包含汉字", value: "abc张三", expected: false },
  { label: "包含空格", value: "a b c", expected: false },
  { label: "空字符串", value: "", expected: false }
];
</script>

<template>
  <naive-theme>
    <div
      v-for="(item, index) in letterRes"
      :key="index"
      className="flex flex-col justify-center mt-2"
    >
      <div>
        <span className="font-bold">{{ item.label }}</span>
        <span className="ml-2"> regExp.letter.test("{{ item.value }}") </span>
      </div>
      <n-gradient-text type="info">
        // 预期: {{ item.expected }}, 实际:
        {{ regExp.letter.test(item.value) }}, 结果:
        {{ regExp.letter.test(item.value) === item.expected ? "✓" : "✗" }}
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
