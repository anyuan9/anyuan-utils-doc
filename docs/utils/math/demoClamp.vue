<script setup lang="ts">
import { ref } from "vue";
import { clamp } from "@anyuan/utils";

// clamp 测试数据
const clampRes = ref<
  Array<{ label: string; n: number; min?: number; max?: number }>
>([]);
clampRes.value = [
  { label: "范围内值", n: 5, min: 0, max: 10 },
  { label: "小于最小值", n: -5, min: 0, max: 10 },
  { label: "大于最大值", n: 15, min: 0, max: 10 },
  { label: "默认范围", n: 0.5 },
  { label: "负范围", n: -5, min: -10, max: 0 },
  { label: "相同最小最大值", n: 5, min: 10, max: 10 }
];
</script>

<template>
  <naive-theme>
    <div
      v-for="(item, index) in clampRes"
      :key="index"
      className="flex flex-col justify-center mt-2"
    >
      <div>
        <span className="font-bold">{{ item.label }}</span>
        <span className="ml-2">
          clamp({{ item.n }}{{ item.min !== undefined ? `, ${item.min}` : ""
          }}{{ item.max !== undefined ? `, ${item.max}` : "" }})
        </span>
      </div>
      <n-gradient-text type="info">
        // {{ clamp(item.n, item.min, item.max) }}
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
