<script setup lang="ts">
import { ref } from "vue";
import { sum } from "@anyuan/utils";

// sum 测试数据
const sumRes = ref<Array<{ label: string; values: number[] | number[][] }>>([]);
sumRes.value = [
  { label: "整数求和", values: [-1, 1, 2, 3] },
  { label: "小数求和", values: [1.1, 2.2, 3.3] },
  { label: "数组求和", values: [[-1, 1, 2, 3]] },
  {
    label: "数组求和",
    values: [
      [-1, 1, 2, 3],
      [4, 5]
    ]
  },
  { label: "单个元素", values: [5] },
  { label: "大数求和", values: [Number.MAX_VALUE, Number.MAX_VALUE] }
];
</script>

<template>
  <naive-theme>
    <div
      v-for="(item, index) in sumRes"
      :key="index"
      className="flex flex-col justify-center mt-2"
    >
      <div>
        <span className="font-bold">{{ item.label }}</span>
        <span className="ml-2">
          sum({{ JSON.stringify(item.values).slice(1, -1) }})
        </span>
      </div>
      <n-gradient-text type="info">
        // {{ sum(...item.values) }}
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
