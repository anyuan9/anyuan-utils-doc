<script setup lang="ts">
import { ref } from "vue";
import { regExp } from "@anyuan/utils";

// naturalNum 测试数据
const naturalNumRes = ref<
  Array<{ label: string; value: string; expected: boolean }>
>([]);
naturalNumRes.value = [
  { label: "零", value: "0", expected: true },
  { label: "正整数", value: "123", expected: true },
  { label: "负整数", value: "-123", expected: false },
  { label: "带前导零", value: "0123", expected: false },
  { label: "小数", value: "123.45", expected: false },
  { label: "字母", value: "abc", expected: false }
];
</script>

<template>
  <naive-theme>
    <div
      v-for="(item, index) in naturalNumRes"
      :key="index"
      className="flex flex-col justify-center mt-2"
    >
      <div>
        <span className="font-bold">{{ item.label }}</span>
        <span className="ml-2">
          regExp.naturalNum.test("{{ item.value }}")
        </span>
      </div>
      <n-gradient-text type="info">
        // 预期: {{ item.expected }}, 实际:
        {{ regExp.naturalNum.test(item.value) }}, 结果:
        {{ regExp.naturalNum.test(item.value) === item.expected ? "✓" : "✗" }}
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
