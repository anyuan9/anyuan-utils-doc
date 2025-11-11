<script setup lang="ts">
import { ref } from "vue";
import { regExp } from "@anyuan/utils";

// float 测试数据
const floatRes = ref<
  Array<{ label: string; value: string; expected: boolean }>
>([]);
floatRes.value = [
  { label: "整数", value: "123", expected: true },
  { label: "小数", value: "123.45", expected: true },
  { label: "负整数", value: "-123", expected: true },
  { label: "负小数", value: "-123.45", expected: true },
  { label: "只有小数点", value: ".45", expected: false },
  { label: "多个小数点", value: "123.45.67", expected: false },
  { label: "字母", value: "abc", expected: false }
];
</script>

<template>
  <naive-theme>
    <div
      v-for="(item, index) in floatRes"
      :key="index"
      className="flex flex-col justify-center mt-2"
    >
      <div>
        <span className="font-bold">{{ item.label }}</span>
        <span className="ml-2"> regExp.float.test("{{ item.value }}") </span>
      </div>
      <n-gradient-text type="info">
        // 预期: {{ item.expected }}, 实际: {{ regExp.float.test(item.value) }},
        结果:
        {{ regExp.float.test(item.value) === item.expected ? "✓" : "✗" }}
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
