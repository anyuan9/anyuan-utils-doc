<script setup lang="ts">
import { ref } from "vue";
import { numToPercentRound } from "@anyuan/utils";

// numToPercentRound 测试数据
const numToPercentRoundRes = ref<
  Array<{ label: string; numList: any[]; precision?: number }>
>([]);
numToPercentRoundRes.value = [
  {
    label: "示例1",
    numList: [8.3, 1.1, 3.6, 2.25, 2.25, 2.25, 2.25, 64.8, 13.2]
  },
  { label: "示例2", numList: [10.34, 20.043, 30.04, 39.567] },
  { label: "整数", numList: [1, 2, 3, 3, 3] },
  {
    label: "自定义精度",
    numList: [10.34, 20.043, 30.04, 39.567],
    precision: 2
  },
  { label: "字符串数字", numList: ["1", "1", 1] },
  { label: "空数组", numList: [] },
  { label: "总和为零", numList: [0, 0, 0] }
];
</script>

<template>
  <naive-theme>
    <div
      v-for="(item, index) in numToPercentRoundRes"
      :key="index"
      className="flex flex-col justify-center mt-2"
    >
      <div>
        <span className="font-bold">{{ item.label }}</span>
        <span className="ml-2">
          numToPercentRound({{ JSON.stringify(item.numList)
          }}{{ item.precision !== undefined ? `, ${item.precision}` : "" }})
        </span>
      </div>
      <n-gradient-text type="info">
        // {{ JSON.stringify(numToPercentRound(item.numList, item.precision)) }}
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
