<script setup lang="ts">
import { ref } from "vue";
import { toNumber } from "@anyuan/utils";

// toNumber 测试数据
const toNumberRes = ref<Array<{ label: string; value: any; strict?: boolean }>>(
  []
);
toNumberRes.value = [
  { label: "数字", value: 123 },
  { label: "浮点数", value: 123.45 },
  { label: "零", value: -0 },
  { label: "NaN", value: NaN },
  { label: "无穷大", value: Infinity },
  { label: "数字字符串", value: "123.45" },
  { label: "带空格的数字字符串", value: "  123.45  " },
  { label: "二进制字符串", value: "0b1010" },
  { label: "八进制字符串", value: "0o755" },
  { label: "空字符串", value: "" },
  { label: "空格字符串", value: "   " },
  { label: "true", value: true },
  { label: "false", value: false },
  { label: "null", value: null },
  { label: "undefined", value: undefined },
  { label: "数组", value: [1, 2, 3] },
  { label: "空数组", value: [] },
  { label: "对象", value: { a: 1 } },
  { label: "空对象", value: {} },
  { label: "函数", value: () => {} },
  { label: "无效数字字符串", value: "123abc" },
  { label: "十六进制字符串", value: "0x1a" }
];
</script>

<template>
  <naive-theme>
    <div
      v-for="(item, index) in toNumberRes"
      :key="index"
      className="flex flex-col justify-center mt-2"
    >
      <div>
        <span className="font-bold">{{ item.label }}</span>
        <span className="ml-2">toNumber({{ item.value }}) </span>
      </div>
      <n-gradient-text type="info">
        // {{ toNumber(item.value) }}
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
