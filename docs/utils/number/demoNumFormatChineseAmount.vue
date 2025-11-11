<script setup lang="ts">
import { ref } from "vue";
import { numFormatChineseAmount } from "@anyuan/utils";

// numFormatChineseAmount 测试数据
const numFormatChineseAmountRes = ref<
  Array<{ label: string; value: number | string }>
>([]);
numFormatChineseAmountRes.value = [
  { label: "正整数", value: 123456789 },
  { label: "正浮点数", value: 123456789.123456 },
  { label: "负浮点数", value: -123456789.123456 },
  { label: "带0数字", value: 123045600.0123456 },
  { label: "字符串数字", value: "123456789.123456" },
  { label: "零", value: 0 },
  { label: "NaN", value: NaN },
  { label: "无穷大", value: Infinity },
  { label: "负无穷大", value: -Infinity }
];
</script>

<template>
  <naive-theme>
    <div
      v-for="(item, index) in numFormatChineseAmountRes"
      :key="index"
      className="flex flex-col justify-center mt-2"
    >
      <div>
        <span className="font-bold">{{ item.label }}</span>
        <span className="ml-2"> numFormatChineseAmount({{ item.value }}) </span>
      </div>
      <n-gradient-text type="info">
        // {{ numFormatChineseAmount(item.value) }}
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
