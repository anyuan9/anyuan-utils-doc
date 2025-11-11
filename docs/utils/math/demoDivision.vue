<script setup lang="ts">
import { ref } from "vue";
import { division } from "@anyuan/utils";

// division 测试数据
const divisionRes = ref<
  Array<{ label: string; num1: number; num2: number; decimal?: number }>
>([]);
divisionRes.value = [
  { label: "整数除法", num1: 10, num2: 2 },
  { label: "小数除法", num1: 5.5, num2: 2.2 },
  { label: "负数除法", num1: -10, num2: 2 },
  { label: "保留2位小数", num1: 10, num2: 3, decimal: 2 },
  { label: "保留0位小数", num1: 5.5, num2: 2, decimal: 0 },
  { label: "除以1", num1: 5, num2: 1 },
  { label: "除数为0", num1: 5, num2: 0 }
];
</script>

<template>
  <naive-theme>
    <div
      v-for="(item, index) in divisionRes"
      :key="index"
      className="flex flex-col justify-center mt-2"
    >
      <div>
        <span className="font-bold">{{ item.label }}</span>
        <span className="ml-2">
          division({{ item.num1 }}, {{ item.num2
          }}{{ item.decimal !== undefined ? `, ${item.decimal}` : "" }})
        </span>
      </div>
      <n-gradient-text type="info">
        //
        {{
          item.num2 === 0
            ? "Error: 除数不能为0"
            : division(item.num1, item.num2, item.decimal)
        }}
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
