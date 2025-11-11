<script setup lang="ts">
import { ref } from "vue";
import { isDate } from "@anyuan/utils";

// isDate 测试数据
const isDateRes = ref<Array<{ label: string; value: any }>>([]);
isDateRes.value = [
  { label: "Date对象", value: new Date() },
  { label: "日期字符串", value: "2024-01-15" },
  { label: "时间戳", value: Date.now() },
  { label: "无效日期", value: new Date("invalid") }
];
</script>

<template>
  <naive-theme>
    <div
      v-for="(item, index) in isDateRes"
      :key="index"
      className="flex flex-col justify-center mt-2"
    >
      <div>
        <span className="font-bold">{{ item.label }}</span>
        <span className="ml-2"> isDate({{ JSON.stringify(item.value) }}) </span>
      </div>
      <n-gradient-text type="info">
        // {{ isDate(item.value) }}
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
