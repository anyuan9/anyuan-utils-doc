<script setup lang="ts">
import { ref } from "vue";
import { randomNumber } from "@anyuan/utils";

// randomNumber 测试数据
const randomNumberRes = ref<
  Array<{ label: string; min?: number; max?: number; decimals?: number }>
>([]);
randomNumberRes.value = [
  { label: "默认参数", min: 0, max: 1, decimals: 2 },
  { label: "整数范围", min: 1, max: 100, decimals: 0 },
  { label: "小数范围", min: 0.5, max: 5.5, decimals: 2 },
  { label: "负范围", min: -10, max: 10, decimals: 1 },
  { label: "大范围", min: 1000, max: 10000, decimals: 0 },
  { label: "高精度", min: 0, max: 1, decimals: 6 },
  { label: "相同最小最大值", min: 5, max: 5, decimals: 2 },
  { label: "NaN", min: NaN },
  { label: "无穷大", min: -Infinity },
  { label: "无穷大", min: 0, max: Infinity },
  { label: "无穷大", min: -Infinity, max: Infinity }
];
</script>

<template>
  <naive-theme>
    <div
      v-for="(item, index) in randomNumberRes"
      :key="index"
      className="flex flex-col justify-center mt-2"
    >
      <div>
        <span className="font-bold">{{ item.label }}</span>
        <span className="ml-2">
          randomNumber({{ item.min !== undefined ? item.min : ""
          }}{{ item.max !== undefined ? `, ${item.max}` : ""
          }}{{ item.decimals !== undefined ? `, ${item.decimals}` : "" }})
        </span>
      </div>
      <n-gradient-text type="info">
        // {{ randomNumber(item.min, item.max, item.decimals) }}
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
