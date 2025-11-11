<script setup lang="ts">
import { ref } from "vue";
import { average } from "@anyuan/utils";

// average 测试数据
const averageRes = ref<Array<{ label: string; values: number[] | number[][] }>>(
  []
);
averageRes.value = [
  { label: "整数平均", values: [-1, 1, 2, 3] },
  { label: "小数平均", values: [1.1, 2.2, 3.3] },
  { label: "数组平均", values: [[-1, 1, 2, 3]] },
  {
    label: "数组平均",
    values: [
      [-1, 1, 2, 3],
      [4, 5]
    ]
  },
  { label: "空数组", values: [] },
  { label: "单个元素", values: [5] }
];
</script>

<template>
  <naive-theme>
    <div
      v-for="(item, index) in averageRes"
      :key="index"
      className="flex flex-col justify-center mt-2"
    >
      <div>
        <span className="font-bold">{{ item.label }}</span>
        <span className="ml-2">
          average({{ JSON.stringify(item.values).slice(1, -1) }})
        </span>
      </div>
      <n-gradient-text type="info">
        // {{ item.values.length === 0 ? "NaN" : average(...item.values) }}
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
