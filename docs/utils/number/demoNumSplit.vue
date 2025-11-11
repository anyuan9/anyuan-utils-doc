<script setup lang="ts">
import { ref } from "vue";
import { numSplit } from "@anyuan/utils";

// numSplit 测试数据
const numSplitRes = ref<Array<{ label: string; value: number }>>([]);
numSplitRes.value = [
  { label: "正整数", value: 123 },
  { label: "正浮点数", value: 123.456 },
  { label: "负整数", value: -123 },
  { label: "负浮点数", value: -123.456 },
  { label: "零", value: 0 },
  { label: "小数部分为零", value: 123.0 },
  { label: "NaN", value: NaN },
  { label: "无穷大", value: Infinity },
  { label: "负无穷大", value: -Infinity }
];
</script>

<template>
  <naive-theme>
    <div
      v-for="(item, index) in numSplitRes"
      :key="index"
      className="flex flex-col justify-center mt-2"
    >
      <div>
        <span className="font-bold">{{ item.label }}</span>
        <span className="ml-2"> numSplit({{ item.value }}) </span>
      </div>
      <n-gradient-text type="info">
        // {{ JSON.stringify(numSplit(item.value)) }}
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
