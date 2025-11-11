<script setup lang="ts">
import { ref } from "vue";
import { lerp } from "@anyuan/utils";

// lerp 测试数据
const lerpRes = ref<
  Array<{ label: string; value: number; min: number; max: number }>
>([]);
lerpRes.value = [
  { label: "中间值", value: 0.5, min: 0, max: 100 },
  { label: "最小值", value: 0, min: 0, max: 100 },
  { label: "最大值", value: 1, min: 0, max: 100 },
  { label: "超出范围小", value: -0.5, min: 0, max: 100 },
  { label: "超出范围大", value: 1.5, min: 0, max: 100 },
  { label: "负范围", value: 0.5, min: -100, max: 100 }
];
</script>

<template>
  <naive-theme>
    <div
      v-for="(item, index) in lerpRes"
      :key="index"
      className="flex flex-col justify-center mt-2"
    >
      <div>
        <span className="font-bold">{{ item.label }}</span>
        <span className="ml-2">
          lerp({{ item.value }}, {{ item.min }}, {{ item.max }})
        </span>
      </div>
      <n-gradient-text type="info">
        // {{ lerp(item.value, item.min, item.max) }}
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
