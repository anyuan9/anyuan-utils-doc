<script setup lang="ts">
import { ref } from "vue";
import { addition } from "@anyuan/utils";

// addition 测试数据
const additionRes = ref<
  Array<{ label: string; num1: number; num2: number; decimal?: number }>
>([]);
additionRes.value = [
  { label: "整数加法", num1: 5, num2: 3 },
  { label: "小数加法", num1: 1.1, num2: 2.2 },
  { label: "负数加法", num1: -5, num2: 3 },
  { label: "保留2位小数", num1: 1.111, num2: 2.222, decimal: 2 },
  { label: "保留0位小数", num1: 1.5, num2: 2.5, decimal: 0 },
  { label: "大数加法", num1: 999999, num2: 1 },
  { label: "边界测试-最小", num1: -Number.MAX_VALUE, num2: Number.MAX_VALUE }
];
</script>

<template>
  <naive-theme>
    <div
      v-for="(item, index) in additionRes"
      :key="index"
      className="flex flex-col justify-center mt-2"
    >
      <div>
        <span className="font-bold">{{ item.label }}</span>
        <span className="ml-2">
          addition({{ item.num1 }}, {{ item.num2
          }}{{ item.decimal !== undefined ? `, ${item.decimal}` : "" }})
        </span>
      </div>
      <n-gradient-text type="info">
        // {{ addition(item.num1, item.num2, item.decimal) }}
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
