<script setup lang="ts">
import { ref } from "vue";
import { numFormatBytes } from "@anyuan/utils";

// numFormatBytes 测试数据
const numFormatBytesRes = ref<
  Array<{ label: string; value: number; decimals?: number }>
>([]);
numFormatBytesRes.value = [
  { label: "正整数", value: 123456 },
  { label: "正浮点数", value: 123.456 },
  { label: "负整数", value: -123456 },
  { label: "负浮点数", value: -123.456, decimals: 1 },
  { label: "零", value: 0 },
  { label: "NaN", value: NaN },
  { label: "无穷大", value: Infinity },
  { label: "负无穷大", value: -Infinity }
];
</script>

<template>
  <naive-theme>
    <div
      v-for="(item, index) in numFormatBytesRes"
      :key="index"
      className="flex flex-col justify-center mt-2"
    >
      <div>
        <span className="font-bold">{{ item.label }}</span>
        <span className="ml-2">
          numFormatBytes({{ item.value }}
          {{ item.decimals ? `, ${item.decimals}` : "" }})
        </span>
      </div>
      <n-gradient-text type="info">
        // {{ numFormatBytes(item.value, item.decimals) }}
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
