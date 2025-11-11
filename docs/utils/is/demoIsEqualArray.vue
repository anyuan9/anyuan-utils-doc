<script setup lang="ts">
import { ref } from "vue";
import { isEqualArray } from "@anyuan/utils";

// isEqualArray 测试数据
const isEqualArrayRes = ref<Array<{ label: string; value1: any; value2: any }>>(
  []
);
isEqualArrayRes.value = [
  { label: "相同数组", value1: [1, 2, 3], value2: [1, 2, 3] },
  { label: "不同数组", value1: [1, 2, 3], value2: [1, 2, 4] },
  { label: "不同顺序", value1: [1, 2, 3], value2: [3, 2, 1] },
  { label: "不同长度", value1: [1, 2, 3], value2: [1, 2] },
  { label: "嵌套数组相同", value1: [[1], [2, 3]], value2: [[1], [2, 3]] },
  { label: "嵌套数组不同", value1: [[1], [2]], value2: [[1], [3]] },
  { label: "对象数组相同", value1: [{ a: 1 }], value2: [{ a: 1 }] },
  {
    label: "对象数组不同",
    value1: [{ a: 1, b: [2] }],
    value2: [{ a: 1, b: 2 }]
  },
  { label: "数组和类数组", value1: [1, 2], value2: { 0: 1, 1: 2, length: 2 } },
  { label: "空数组", value1: [], value2: [] },
  { label: "非数组比较", value1: "hello", value2: [1, 2, 3] }
];
</script>

<template>
  <naive-theme>
    <div
      v-for="(item, index) in isEqualArrayRes"
      :key="index"
      className="flex flex-col justify-center mt-2"
    >
      <div>
        <span className="font-bold">{{ item.label }}</span>
        <span className="ml-2">
          isEqualArray({{ JSON.stringify(item.value1) }},
          {{ JSON.stringify(item.value2) }})
        </span>
      </div>
      <n-gradient-text type="info">
        // {{ isEqualArray(item.value1, item.value2) }}
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
