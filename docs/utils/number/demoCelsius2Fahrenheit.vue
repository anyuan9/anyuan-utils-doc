<script setup lang="ts">
import { ref } from "vue";
import { celsius2Fahrenheit } from "@anyuan/utils";

// celsius2Fahrenheit 测试数据
const celsius2FahrenheitRes = ref<
  Array<{ label: string; value: number; decimals?: number }>
>([]);
celsius2FahrenheitRes.value = [
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
      v-for="(item, index) in celsius2FahrenheitRes"
      :key="index"
      className="flex flex-col justify-center mt-2"
    >
      <div>
        <span className="font-bold">{{ item.label }}</span>
        <span className="ml-2">
          celsius2Fahrenheit({{ item.value
          }}{{ item.decimals ? `, ${item.decimals}` : "" }})
        </span>
      </div>
      <n-gradient-text type="info">
        // {{ celsius2Fahrenheit(item.value, item.decimals) }}
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
