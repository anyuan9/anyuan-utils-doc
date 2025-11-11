<script setup lang="ts">
import { ref } from "vue";
import { numFormatBigNumber } from "@anyuan/utils";

// numFormatBigNumber 测试数据
const numFormatBigNumberRes = ref<
  Array<{ label: string; value: number | string; options?: object }>
>([]);
numFormatBigNumberRes.value = [
  { label: "正整数", value: 123456789 },
  { label: "负浮点数", value: -123456789.12 },
  { label: "带0数字", value: 1002345600.012 },
  {
    label: "字符串数字",
    value: "123.123456",
    options: {
      decimals: 1,
      thresholds: [
        { threshold: 1e9, unit: "十亿" },
        { threshold: 1e6, unit: "百万" },
        { threshold: 1e3, unit: "千" }
      ]
    }
  },
  { label: "0.123", value: 0.123 },
  { label: "9999", value: 9999 },
  { label: "10000", value: 10000 },
  { label: "零", value: 0 },
  { label: "NaN", value: NaN },
  { label: "无穷大", value: Infinity },
  { label: "负无穷大", value: -Infinity }
];
</script>

<template>
  <naive-theme>
    <div
      v-for="(item, index) in numFormatBigNumberRes"
      :key="index"
      className="flex flex-col justify-center mt-2"
    >
      <div>
        <span className="font-bold">{{ item.label }}</span>
        <span className="ml-2">
          numFormatBigNumber({{ item.value }},
          {{ item.options ? JSON.stringify(item.options) : "" }})
        </span>
      </div>
      <n-gradient-text type="info">
        // {{ numFormatBigNumber(item.value, item.options) }}
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
