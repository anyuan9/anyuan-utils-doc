<script setup lang="ts">
import { ref } from "vue";
import { arrayXor } from "@anyuan/utils";

const arrayXorData = ref([
  { label: "部分重叠", arr1: [1, 2, 3], arr2: [3, 4, 5] },
  { label: "无重叠", arr1: [1, 2], arr2: [3, 4] },
  { label: "完全相同", arr1: [1, 2, 3], arr2: [1, 2, 3] },
  { label: "空数组", arr1: [1, 2], arr2: [] }
]);
</script>

<template>
  <naive-theme>
    <div
      v-for="(item, index) in arrayXorData"
      :key="index"
      className="flex flex-col justify-center mt-2"
    >
      <div>
        <span className="font-bold">{{ item.label }}</span>
        <span className="ml-2">
          arrayXor({{ JSON.stringify(item.arr1) }},
          {{ JSON.stringify(item.arr2) }})</span
        >
      </div>
      <n-gradient-text type="info">
        //
        {{ JSON.stringify(arrayXor(item.arr1, item.arr2)) }}
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
