<script setup lang="ts">
import { ref } from "vue";
import { arrayClosest } from "@anyuan/utils";

const arrayClosestData = ref([
  { label: "接近中间值", value: [1, 5, 10, 15, 20], num: 12 },
  { label: "接近最小值", value: [10, 20, 30, 40], num: 5 },
  { label: "接近最大值", value: [10, 20, 30, 40], num: 45 },
  { label: "精确匹配", value: [1, 2, 3, 4, 5], num: 3 }
]);
</script>

<template>
  <naive-theme>
    <div
      v-for="(item, index) in arrayClosestData"
      :key="index"
      className="flex flex-col justify-center mt-2"
    >
      <div>
        <span className="font-bold">{{ item.label }}</span>
        <span className="ml-2">
          arrayClosest({{ JSON.stringify(item.value) }}, {{ item.num }})
        </span>
      </div>
      <n-gradient-text type="info">
        //
        {{ arrayClosest(item.value, item.num) }}
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
