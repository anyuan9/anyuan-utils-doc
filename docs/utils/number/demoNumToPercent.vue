<script setup lang="ts">
import { ref } from "vue";
import { numToPercent } from "@anyuan/utils";

// numToPercent 测试数据
const numToPercentRes = ref<
  Array<{ label: string; value: any; decimals?: number; symbol?: string }>
>([]);
numToPercentRes.value = [
  { label: "基础百分比", value: 1 / 3 },
  { label: "100%", value: 1 },
  { label: "0%", value: 0 },
  { label: "自定义精度", value: 1 / 7, decimals: 3 },
  { label: "自定义符号", value: 0.5, symbol: "‰" },
  { label: "字符串数字", value: "1" },
  { label: "无效数字", value: "abc" }
];
</script>

<template>
  <naive-theme>
    <div
      v-for="(item, index) in numToPercentRes"
      :key="index"
      className="flex flex-col justify-center mt-2"
    >
      <div>
        <span className="font-bold">{{ item.label }}</span>
        <span className="ml-2">
          numToPercent({{ item.value
          }}{{ item.decimals ? `, ${item.decimals}` : "" }}
          {{ item.symbol ? `, ${item.symbol}` : "" }})
        </span>
      </div>
      <n-gradient-text type="info">
        // {{ numToPercent(item.value, item.decimals, item.symbol) }}
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
