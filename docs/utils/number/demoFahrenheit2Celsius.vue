<script setup lang="ts">
import { ref } from "vue";
import { fahrenheit2Celsius } from "@anyuan/utils";

// fahrenheit2Celsius 测试数据
const fahrenheit2CelsiusRes = ref<
  Array<{ label: string; value: number; decimals?: number }>
>([]);
fahrenheit2CelsiusRes.value = [
  { label: "正整数", value: 23 },
  { label: "正浮点数", value: 23.456 },
  { label: "负整数", value: -23, decimals: 2 },
  { label: "负浮点数", value: -23.456, decimals: 2 },
  { label: "零", value: 0 },
  // { label: "NaN", value: NaN },
  { label: "无穷大", value: Infinity },
  { label: "负无穷大", value: -Infinity }
];
</script>

<template>
  <naive-theme>
    <div
      v-for="(item, index) in fahrenheit2CelsiusRes"
      :key="index"
      className="flex flex-col justify-center mt-2"
    >
      <div>
        <span className="font-bold">{{ item.label }}</span>
        <span className="ml-2">
          fahrenheit2Celsius({{ item.value
          }}{{ item.decimals ? `, ${item.decimals}` : "" }})
        </span>
      </div>
      <n-gradient-text type="info">
        // {{ fahrenheit2Celsius(item.value, item.decimals) }}
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
