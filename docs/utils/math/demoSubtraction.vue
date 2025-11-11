<script setup lang="ts">
import { ref } from "vue";
import { subtraction } from "@anyuan/utils";

// subtraction 测试数据
const subtractionRes = ref<
  Array<{ label: string; num1: number; num2: number; decimal?: number }>
>([]);
subtractionRes.value = [
  { label: "整数减法", num1: 5, num2: 3 },
  { label: "小数减法", num1: 5.5, num2: 2.2 },
  { label: "负数减法", num1: -5, num2: -3 },
  { label: "保留2位小数", num1: 5.555, num2: 2.222, decimal: 2 },
  { label: "保留0位小数", num1: 5.5, num2: 2.5, decimal: 0 },
  { label: "边界测试", num1: Number.MIN_VALUE, num2: Number.MAX_VALUE }
];
</script>

<template>
  <naive-theme>
    <div
      v-for="(item, index) in subtractionRes"
      :key="index"
      className="flex flex-col justify-center mt-2"
    >
      <div>
        <span className="font-bold">{{ item.label }}</span>
        <span className="ml-2">
          subtraction({{ item.num1 }}, {{ item.num2
          }}{{ item.decimal !== undefined ? `, ${item.decimal}` : "" }})
        </span>
      </div>
      <n-gradient-text type="info">
        // {{ subtraction(item.num1, item.num2, item.decimal) }}
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
