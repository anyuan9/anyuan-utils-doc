<script setup lang="ts">
import { ref } from "vue";
import { randomInteger } from "@anyuan/utils";

// randomInteger 测试数据
const randomIntegerRes = ref<
  Array<{ label: string; min?: number; max?: number }>
>([]);
randomIntegerRes.value = [
  { label: "默认参数", min: 0, max: 1 },
  { label: "小范围", min: 1, max: 10 },
  { label: "负范围", min: -5, max: 5 },
  { label: "大范围", min: 1000, max: 10000 },
  { label: "单值范围", min: 5, max: 5 },
  { label: "反向范围", min: 10, max: 1 },
  { label: "小数范围", min: 1.5, max: 10.5 },
  { label: "NaN", min: NaN },
  { label: "无穷大", min: -Infinity },
  { label: "无穷大", min: 0, max: Infinity },
  { label: "无穷大", min: -Infinity, max: Infinity },
  { label: "无穷大", min: Infinity, max: -Infinity }
  // { label: "无穷大", min: -Infinity, max: NaN },
  // { label: "无穷大", min: NaN, max: Infinity }
];
</script>

<template>
  <naive-theme>
    <div
      v-for="(item, index) in randomIntegerRes"
      :key="index"
      className="flex flex-col justify-center mt-2"
    >
      <div>
        <span className="font-bold">{{ item.label }}</span>
        <span className="ml-2">
          randomInteger({{ item.min !== undefined ? item.min : ""
          }}{{ item.max !== undefined ? `, ${item.max}` : "" }})
        </span>
      </div>
      <n-gradient-text type="info">
        // {{ randomInteger(item.min, item.max) }}
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
