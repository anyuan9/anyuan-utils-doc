<script setup lang="ts">
import { ref } from "vue";
import { getWeekday } from "@anyuan/utils";

// getWeekday 测试数据
const getWeekdayRes = ref<
  Array<{ label: string; value: any; prefix?: string }>
>([]);
getWeekdayRes.value = [
  { label: "当前日期", value: new Date() },
  { label: "指定日期", value: "2024-01-15" },
  { label: "自定义前缀", value: new Date(), prefix: "周" },
  { label: "无效日期", value: "Invalid Date" }
];
</script>

<template>
  <naive-theme>
    <div
      v-for="(item, index) in getWeekdayRes"
      :key="index"
      className="flex flex-col justify-center mt-2"
    >
      <div>
        <span className="font-bold">{{ item.label }}</span>
        <span className="ml-2">
          getWeekday({{ `${item.value}`
          }}{{ item.prefix ? `, "${item.prefix}"` : "" }})
        </span>
      </div>
      <n-gradient-text type="info">
        // {{ getWeekday(item.value, item.prefix) }}
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
