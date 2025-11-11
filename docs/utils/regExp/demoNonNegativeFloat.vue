<script setup lang="ts">
import { ref } from "vue";
import { regExp } from "@anyuan/utils";

// nonNegativeFloat 测试数据
const nonNegativeFloatRes = ref<
  Array<{ label: string; value: string; expected: boolean }>
>([]);
nonNegativeFloatRes.value = [
  { label: "正整数", value: "123", expected: true },
  { label: "正小数", value: "123.45", expected: true },
  { label: "零", value: "0", expected: true },
  { label: "负整数", value: "-123", expected: false },
  { label: "负小数", value: "-123.45", expected: false },
  { label: "字母", value: "abc", expected: false }
];
</script>

<template>
  <naive-theme>
    <div
      v-for="(item, index) in nonNegativeFloatRes"
      :key="index"
      className="flex flex-col justify-center mt-2"
    >
      <div>
        <span className="font-bold">{{ item.label }}</span>
        <span className="ml-2">
          regExp.nonNegativeFloat.test("{{ item.value }}")
        </span>
      </div>
      <n-gradient-text type="info">
        // 预期: {{ item.expected }}, 实际:
        {{ regExp.nonNegativeFloat.test(item.value) }}, 结果:
        {{
          regExp.nonNegativeFloat.test(item.value) === item.expected ? "✓" : "✗"
        }}
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
