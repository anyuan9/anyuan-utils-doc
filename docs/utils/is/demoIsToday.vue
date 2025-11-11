<script setup lang="ts">
import { ref } from "vue";
import { isToday } from "@anyuan/utils";

// isToday 测试数据
const isTodayRes = ref<Array<{ label: string; value: any }>>([]);
const now = new Date();
isTodayRes.value = [
  { label: "今天", value: now },
  { label: "昨天", value: new Date(now.getTime() - 86400000) },
  { label: "明天", value: new Date(now.getTime() + 86400000) },
  { label: "今天日期字符串", value: now.toISOString().split("T")[0] },
  { label: "无效日期", value: new Date("invalid") },
  { label: "null", value: null }
];
</script>

<template>
  <naive-theme>
    <div
      v-for="(item, index) in isTodayRes"
      :key="index"
      className="flex flex-col justify-center mt-2"
    >
      <div>
        <span className="font-bold">{{ item.label }}</span>
        <span className="ml-2">
          isToday({{ JSON.stringify(item.value) }})
        </span>
      </div>
      <n-gradient-text type="info">
        // {{ isToday(item.value) }}
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
