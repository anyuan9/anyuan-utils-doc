<script setup lang="ts">
import { ref } from "vue";
import { getMonthLastDate } from "@anyuan/utils";

// getMonthLastDate 测试数据
const getMonthLastDateRes = ref<Array<{ label: string; value: any }>>([]);
getMonthLastDateRes.value = [
  { label: "当前月份", value: new Date() },
  { label: "指定月份", value: "2024-05-15" },
  { label: "无效日期", value: "Invalid Date" }
];
</script>

<template>
  <naive-theme>
    <div
      v-for="(item, index) in getMonthLastDateRes"
      :key="index"
      className="flex flex-col justify-center mt-2"
    >
      <div>
        <span className="font-bold">{{ item.label }}</span>
        <span className="ml-2"> getMonthLastDate({{ `${item.value}` }}) </span>
      </div>
      <n-gradient-text type="info">
        // {{ getMonthLastDate(item.value) }}
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
