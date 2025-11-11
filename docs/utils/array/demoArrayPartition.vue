<script setup lang="ts">
import { ref } from "vue";
import { arrayPartition } from "@anyuan/utils";

const arrayPartitionData = ref([
  {
    label: "奇偶分组",
    value: [1, 2, 3, 4, 5, 6],
    filters: [
      (item: number) => item % 2 === 0,
      (item: number) => item % 2 !== 0
    ]
  },
  {
    label: "数字范围分组",
    value: [1, 5, 10, 15, 20],
    filters: [
      (item: number) => item < 10,
      (item: number) => item >= 10 && item < 20,
      (item: number) => item >= 20
    ]
  }
]);
</script>

<template>
  <naive-theme>
    <div
      v-for="(item, index) in arrayPartitionData"
      :key="index"
      className="flex flex-col justify-center mt-2"
    >
      <div>
        <span className="font-bold">{{ item.label }}</span>
        <span className="ml-2">
          arrayPartition({{ JSON.stringify(item.value) }},
          {{ item.filters.length }}个过滤函数)
        </span>
      </div>
      <n-gradient-text type="info">
        //
        {{ JSON.stringify(arrayPartition(item.value, ...item.filters)) }}
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
