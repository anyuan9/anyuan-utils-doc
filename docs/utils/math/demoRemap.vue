<script setup lang="ts">
import { ref } from "vue";
import { remap } from "@anyuan/utils";

// remap 测试数据
const remapRes = ref<
  Array<{
    label: string;
    value: number;
    inMin: number;
    inMax: number;
    outMin: number;
    outMax: number;
  }>
>([]);
remapRes.value = [
  { label: "中间映射", value: 50, inMin: 0, inMax: 100, outMin: 0, outMax: 1 },
  { label: "最小映射", value: 0, inMin: 0, inMax: 100, outMin: 0, outMax: 1 },
  { label: "最大映射", value: 100, inMin: 0, inMax: 100, outMin: 0, outMax: 1 },
  {
    label: "负范围映射",
    value: -50,
    inMin: -100,
    inMax: 0,
    outMin: 0,
    outMax: 100
  },
  {
    label: "缩放映射",
    value: 25,
    inMin: 0,
    inMax: 100,
    outMin: 0,
    outMax: 400
  }
];
</script>

<template>
  <naive-theme>
    <div
      v-for="(item, index) in remapRes"
      :key="index"
      className="flex flex-col justify-center mt-2"
    >
      <div>
        <span className="font-bold">{{ item.label }}</span>
        <span className="ml-2">
          remap({{ item.value }}, {{ item.inMin }}, {{ item.inMax }},
          {{ item.outMin }}, {{ item.outMax }})
        </span>
      </div>
      <n-gradient-text type="info">
        //
        {{
          remap(item.value, item.inMin, item.inMax, item.outMin, item.outMax)
        }}
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
