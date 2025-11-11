<script setup lang="ts">
import { ref } from "vue";
import { getMonthDays } from "@anyuan/utils";

// getMonthDays 测试数据
const getMonthDaysRes = ref<Array<{ label: string; value: any }>>([]);
getMonthDaysRes.value = [
  { label: "当前月份", value: new Date() },
  { label: "2月(平年)", value: "2023-02-01" },
  { label: "2月(闰年)", value: "2024-02-01" },
  { label: "大月", value: "2024-01-01" },
  { label: "小月", value: "2024-04-01" },
  { label: "无效日期", value: "Invalid Date" }
];
</script>

<template>
  <naive-theme>
    <div
      v-for="(item, index) in getMonthDaysRes"
      :key="index"
      className="flex flex-col justify-center mt-2"
    >
      <div>
        <span className="font-bold">{{ item.label }}</span>
        <span className="ml-2"> getMonthDays({{ `${item.value}` }}) </span>
      </div>
      <n-gradient-text type="info">
        // {{ getMonthDays(item.value) }}
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
