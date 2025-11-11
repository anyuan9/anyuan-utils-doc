<script setup lang="ts">
import { ref } from "vue";
import { regExp } from "@anyuan/utils";

// floatFixed 测试数据
const floatFixedRes = ref<
  Array<{ label: string; value: string; expected: boolean }>
>([]);
floatFixedRes.value = [
  { label: "整数", value: "123", expected: true },
  { label: "1位小数", value: "123.4", expected: true },
  { label: "2位小数", value: "123.45", expected: true },
  { label: "3位小数", value: "123.456", expected: false },
  { label: "负小数", value: "-123.45", expected: true },
  { label: "只有小数点", value: ".45", expected: false }
];
</script>

<template>
  <naive-theme>
    <div
      v-for="(item, index) in floatFixedRes"
      :key="index"
      className="flex flex-col justify-center mt-2"
    >
      <div>
        <span className="font-bold">{{ item.label }}</span>
        <span className="ml-2">
          regExp.floatFixed.test("{{ item.value }}")
        </span>
      </div>
      <n-gradient-text type="info">
        // 预期: {{ item.expected }}, 实际:
        {{ regExp.floatFixed.test(item.value) }}, 结果:
        {{ regExp.floatFixed.test(item.value) === item.expected ? "✓" : "✗" }}
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
