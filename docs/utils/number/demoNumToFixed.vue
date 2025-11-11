<script setup lang="ts">
import { ref } from "vue";
import { numToFixed } from "@anyuan/utils";

// numToFixed 测试数据
const numToFixedRes = ref<
  Array<{ label: string; num: number; decimals?: number }>
>([]);
numToFixedRes.value = [
  { label: "默认返回", num: 123.456789 },
  { label: "1位小数", num: 123.456789, decimals: 1 },
  { label: "2位小数", num: 123.456789, decimals: 2 },
  { label: "3位小数", num: 123.456789, decimals: 3 },
  { label: "整数", num: 123, decimals: 2 },
  { label: "浮点数精度问题", num: 0.1 + 0.2, decimals: 2 },
  { label: "浮点数精度问题", num: 1.005, decimals: 2 },
  { label: "浮点数精度问题", num: 1.00499999999999, decimals: 2 },
  { label: "负浮点数", num: -123.456789, decimals: 2 },
  { label: "NaN", num: NaN, decimals: 2 },
  { label: "无穷大", num: Infinity, decimals: 2 }
];
</script>

<template>
  <naive-theme>
    <div
      v-for="(item, index) in numToFixedRes"
      :key="index"
      className="flex flex-col justify-center mt-2"
    >
      <div>
        <span className="font-bold">{{ item.label }}</span>
        <span className="ml-2">
          numToFixed({{ item.num
          }}{{ item.decimals !== undefined ? `, ${item.decimals}` : "" }})
        </span>
      </div>
      <n-gradient-text type="info">
        // {{ numToFixed(item.num, item.decimals) }}
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
