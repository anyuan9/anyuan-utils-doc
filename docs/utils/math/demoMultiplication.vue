<script setup lang="ts">
import { ref } from "vue";
import { multiplication } from "@anyuan/utils";

// multiplication 测试数据
const multiplicationRes = ref<
  Array<{ label: string; num1: number; num2: number; decimal?: number }>
>([]);
multiplicationRes.value = [
  { label: "整数乘法", num1: 5, num2: 3 },
  { label: "小数乘法", num1: 1.5, num2: 2.5 },
  { label: "负数乘法", num1: -5, num2: 3 },
  { label: "保留2位小数", num1: 1.111, num2: 2.222, decimal: 2 },
  { label: "保留0位小数", num1: 1.5, num2: 2.5, decimal: 0 },
  { label: "乘以0", num1: 5, num2: 0 },
  { label: "边界测试", num1: Number.MAX_VALUE, num2: 0.5 }
];
</script>

<template>
  <naive-theme>
    <div
      v-for="(item, index) in multiplicationRes"
      :key="index"
      className="flex flex-col justify-center mt-2"
    >
      <div>
        <span className="font-bold">{{ item.label }}</span>
        <span className="ml-2">
          multiplication({{ item.num1 }}, {{ item.num2
          }}{{ item.decimal !== undefined ? `, ${item.decimal}` : "" }})
        </span>
      </div>
      <n-gradient-text type="info">
        // {{ multiplication(item.num1, item.num2, item.decimal) }}
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
