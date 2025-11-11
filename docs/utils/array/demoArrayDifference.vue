<script setup lang="ts">
import { ref } from "vue";
import { arrayDifference } from "@anyuan/utils";

const arrayDifferenceData = ref([
  { label: "有差异", arr1: [1, 2, 3, 4], arr2: [3, 4, 5, 6] },
  { label: "无差异", arr1: [1, 2, 3], arr2: [1, 2, 3] },
  { label: "完全不同", arr1: [1, 2, 3], arr2: [4, 5, 6] },
  { label: "空arr2", arr1: [1, 2, 3], arr2: [] }
]);
</script>

<template>
  <naive-theme>
    <div
      v-for="(item, index) in arrayDifferenceData"
      :key="index"
      className="flex flex-col justify-center mt-2"
    >
      <div>
        <span className="font-bold">{{ item.label }}</span>
        <span className="ml-2">
          arrayDifference({{ JSON.stringify(item.arr1) }},
          {{ JSON.stringify(item.arr2) }})
        </span>
      </div>
      <n-gradient-text type="info">
        //
        {{ JSON.stringify(arrayDifference(item.arr1, item.arr2)) }}
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
