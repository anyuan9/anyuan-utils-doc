<script setup lang="ts">
import { ref } from "vue";
import { arrayIntersection } from "@anyuan/utils";

const arrayIntersectionData = ref([
  { label: "有交集", arr1: [1, 2, 3, 4], arr2: [3, 4, 5, 6] },
  { label: "无交集", arr1: [1, 2, 3], arr2: [4, 5, 6] },
  { label: "包含关系", arr1: [1, 2, 3, 4, 5], arr2: [2, 3, 4] },
  { label: "空数组", arr1: [1, 2, 3], arr2: [] }
]);
</script>

<template>
  <naive-theme>
    <div
      v-for="(item, index) in arrayIntersectionData"
      :key="index"
      className="flex flex-col justify-center mt-2"
    >
      <div>
        <span className="font-bold">{{ item.label }}</span>
        <span className="ml-2">
          arrayIntersection({{ JSON.stringify(item.arr1) }},
          {{ JSON.stringify(item.arr2) }})
        </span>
      </div>
      <n-gradient-text type="info">
        //
        {{ JSON.stringify(arrayIntersection(item.arr1, item.arr2)) }}
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
