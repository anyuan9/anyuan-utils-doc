<script setup lang="ts">
import { ref } from "vue";
import { isValidDate } from "@anyuan/utils";

// isValidDate 测试数据
const isValidDateRes = ref<Array<{ label: string; value: any }>>([]);
isValidDateRes.value = [
  { label: "有效日期", value: new Date() },
  { label: "日期字符串", value: "2024-01-15" },
  { label: "无效日期", value: new Date("invalid") },
  { label: "数字时间戳", value: Date.now() },
  { label: "null", value: null }
];
</script>

<template>
  <naive-theme>
    <div
      v-for="(item, index) in isValidDateRes"
      :key="index"
      className="flex flex-col justify-center mt-2"
    >
      <div>
        <span className="font-bold">{{ item.label }}</span>
        <span className="ml-2">
          isValidDate({{ JSON.stringify(item.value) }})
        </span>
      </div>
      <n-gradient-text type="info">
        // {{ isValidDate(item.value) }}
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
