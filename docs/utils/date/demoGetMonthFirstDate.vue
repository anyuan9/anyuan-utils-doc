<script setup lang="ts">
import { ref } from "vue";
import { getMonthFirstDate } from "@anyuan/utils";

// getMonthFirstDate 测试数据
const getMonthFirstDateRes = ref<Array<{ label: string; value: any }>>([]);
getMonthFirstDateRes.value = [
  { label: "当前月份", value: new Date() },
  { label: "指定月份", value: "2024-05-15" },
  { label: "无效日期", value: "Invalid Date" }
];
</script>

<template>
  <naive-theme>
    <div
      v-for="(item, index) in getMonthFirstDateRes"
      :key="index"
      className="flex flex-col justify-center mt-2"
    >
      <div>
        <span className="font-bold">{{ item.label }}</span>
        <span className="ml-2"> getMonthFirstDate({{ `${item.value}` }}) </span>
      </div>
      <n-gradient-text type="info">
        // {{ getMonthFirstDate(item.value) }}
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
