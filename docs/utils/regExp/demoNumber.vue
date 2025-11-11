<script setup lang="ts">
import { ref } from "vue";
import { regExp } from "@anyuan/utils";

// number 测试数据
const numberRes = ref<
  Array<{ label: string; value: string; expected: boolean }>
>([]);
numberRes.value = [
  { label: "纯数字", value: "123", expected: true },
  { label: "000", value: "000", expected: true },
  { label: "小数", value: "123.45", expected: false },
  { label: "负数", value: "-123", expected: false },
  { label: "字母", value: "abc", expected: false },
  { label: "数字字母混合", value: "123abc", expected: false }
];
</script>

<template>
  <naive-theme>
    <div
      v-for="(item, index) in numberRes"
      :key="index"
      className="flex flex-col justify-center mt-2"
    >
      <div>
        <span className="font-bold">{{ item.label }}</span>
        <span className="ml-2"> regExp.number.test("{{ item.value }}") </span>
      </div>
      <n-gradient-text type="info">
        // 预期: {{ item.expected }}, 实际:
        {{ regExp.number.test(item.value) }}, 结果:
        {{ regExp.number.test(item.value) === item.expected ? "✓" : "✗" }}
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
