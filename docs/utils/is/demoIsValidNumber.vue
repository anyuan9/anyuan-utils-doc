<script setup lang="ts">
import { ref } from "vue";
import { isValidNumber } from "@anyuan/utils";

// isValidNumber 测试数据
const isValidNumberRes = ref<Array<{ label: string; value: any }>>([]);
isValidNumberRes.value = [
  { label: "整数", value: 123 },
  { label: "负整数", value: -5 },
  { label: "浮点数", value: 3.14 },
  { label: "字符串整数", value: "123" },
  { label: "布尔值", value: true },
  { label: "数组", value: [1, 2, 3] },
  { label: "零", value: 0 },
  { label: "NaN", value: NaN },
  { label: "Infinity", value: Infinity },
  { label: "null", value: null }
];
</script>

<template>
  <naive-theme>
    <div
      v-for="(item, index) in isValidNumberRes"
      :key="index"
      className="flex flex-col justify-center mt-2"
    >
      <div>
        <span className="font-bold">{{ item.label }}</span>
        <span className="ml-2"> isValidNumber({{ item.value }}) </span>
      </div>
      <n-gradient-text type="info">
        // {{ isValidNumber(item.value) }}
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
