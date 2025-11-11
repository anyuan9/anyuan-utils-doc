<script setup lang="ts">
import { ref } from "vue";
import { numToFinite } from "@anyuan/utils";

// numToFinite 测试数据
const numToFiniteRes = ref<Array<{ label: string; num: number }>>([]);
numToFiniteRes.value = [
  { label: "整数", num: 123 },
  { label: "浮点数", num: 123.456789 },
  { label: "零", num: 0 },
  { label: "NaN", num: NaN },
  { label: "无穷大", num: Infinity },
  { label: "负无穷大", num: -Infinity },
  { label: "undefined", num: undefined }
  // { label: "数组", value: [1, 2, 3] },
  // { label: "对象", value: { a: 1 } },
];
</script>

<template>
  <naive-theme>
    <div
      v-for="(item, index) in numToFiniteRes"
      :key="index"
      className="flex flex-col justify-center mt-2"
    >
      <div>
        <span className="font-bold">{{ item.label }}</span>
        <span className="ml-2"> numToFinite({{ item.num }}) </span>
      </div>
      <n-gradient-text type="info">
        // {{ numToFinite(item.num) }}
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
