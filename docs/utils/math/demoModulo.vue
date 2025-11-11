<script setup lang="ts">
import { ref } from "vue";
import { modulo } from "@anyuan/utils";

// modulo 测试数据
const moduloRes = ref<
  Array<{ label: string; dividend: number; divisor: number; decimal?: number }>
>([]);
moduloRes.value = [
  { label: "整数取余", dividend: 10, divisor: 3 },
  { label: "小数取余", dividend: 10.5, divisor: 3.2 },
  { label: "负数取余", dividend: -10, divisor: 3 },
  { label: "保留2位小数", dividend: 10.5, divisor: 3.2, decimal: 2 },
  { label: "保留0位小数", dividend: 10.5, divisor: 3.2, decimal: 0 },
  { label: "除数为0", dividend: 10, divisor: 0 },
  { label: "被除数为0", dividend: 0, divisor: 5 }
];
</script>

<template>
  <naive-theme>
    <div
      v-for="(item, index) in moduloRes"
      :key="index"
      className="flex flex-col justify-center mt-2"
    >
      <div>
        <span className="font-bold">{{ item.label }}</span>
        <span className="ml-2">
          modulo({{ item.dividend }}, {{ item.divisor
          }}{{ item.decimal !== undefined ? `, ${item.decimal}` : "" }})
        </span>
      </div>
      <n-gradient-text type="info">
        //
        {{
          item.divisor === 0
            ? "Error: 除数不能为0"
            : modulo(item.dividend, item.divisor, item.decimal)
        }}
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
