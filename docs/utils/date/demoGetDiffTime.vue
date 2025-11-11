<script setup lang="ts">
import { ref } from "vue";
import { getDiffTime } from "@anyuan/utils";

// getDiffTime 测试数据
const getDiffTimeRes = ref<
  Array<{ label: string; start: any; end: any; unit?: any }>
>([]);
getDiffTimeRes.value = [
  { label: "默认单位(毫秒)", start: "2024-01-01", end: "2024-01-02" },
  { label: "秒", start: "2024-01-01", end: "2024-01-02", unit: "seconds" },
  { label: "分钟", start: "2024-01-01", end: "2024-01-02", unit: "minutes" },
  { label: "小时", start: "2024-01-01", end: "2024-01-02", unit: "hours" },
  { label: "天", start: "2024-01-01", end: "2024-01-02", unit: "days" },
  {
    label: "自动分解",
    start: "2024-01-01T10:30:00",
    end: "2024-01-02T12:45:30",
    unit: "auto"
  },
  { label: "无效日期", start: "Invalid Date", end: new Date() }
];
</script>

<template>
  <naive-theme>
    <div
      v-for="(item, index) in getDiffTimeRes"
      :key="index"
      className="flex flex-col justify-center mt-2"
    >
      <div>
        <span className="font-bold">{{ item.label }}</span>
        <span className="ml-2">
          getDiffTime({{ `${item.start}` }}, {{ `${item.end}`
          }}{{ item.unit ? `, "${item.unit}"` : "" }})
        </span>
      </div>
      <n-gradient-text type="info">
        // {{ JSON.stringify(getDiffTime(item.start, item.end, item.unit)) }}
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
