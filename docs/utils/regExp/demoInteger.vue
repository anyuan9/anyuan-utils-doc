<script setup lang="ts">
import { ref } from "vue";
import { regExp } from "@anyuan/utils";

// integer 测试数据
const integerRes = ref<
  Array<{ label: string; value: string; expected: boolean }>
>([]);
integerRes.value = [
  { label: "正整数", value: "123", expected: true },
  { label: "负整数", value: "-123", expected: true },
  { label: "零", value: "0", expected: true },
  { label: "小数", value: "123.45", expected: false },
  { label: "字母", value: "abc", expected: false },
  { label: "空字符串", value: "", expected: false }
];
</script>

<template>
  <naive-theme>
    <div
      v-for="(item, index) in integerRes"
      :key="index"
      className="flex flex-col justify-center mt-2"
    >
      <div>
        <span className="font-bold">{{ item.label }}</span>
        <span className="ml-2"> regExp.integer.test("{{ item.value }}") </span>
      </div>
      <n-gradient-text type="info">
        // 预期: {{ item.expected }}, 实际:
        {{ regExp.integer.test(item.value) }}, 结果:
        {{ regExp.integer.test(item.value) === item.expected ? "✓" : "✗" }}
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
