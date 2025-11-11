<script setup lang="ts">
import { ref } from "vue";
import { regExp } from "@anyuan/utils";

// dateISO 测试数据
const dateISORes = ref<
  Array<{ label: string; value: string; expected: boolean }>
>([]);
dateISORes.value = [
  { label: "日期格式", value: "2024-01-15", expected: true },
  { label: "日期时间组合", value: "2024-03-20T14:30:00Z", expected: true },
  { label: "日期时间组合", value: "2024-03-20T14:30:00+08:00", expected: true },
  { label: "斜杠分隔", value: "2024/01/15", expected: true },
  { label: "闰年2月29", value: "2024-02-29", expected: true },
  { label: "平年2月29", value: "2023-02-29", expected: true },
  { label: "单数字月份", value: "2024-1-15", expected: false },
  { label: "单数字日期", value: "2024-01-5", expected: false },
  { label: "错误月份", value: "2024-13-15", expected: false },
  { label: "错误日期", value: "2024-01-32", expected: false },
  { label: "缺少分隔符", value: "20240115", expected: false },
  { label: "包含时间", value: "2024-01-15 10:30:00", expected: false }
];
</script>

<template>
  <naive-theme>
    <div className="flex flex-col justify-center mt-2">
      <n-gradient-text
        v-for="(item, index) in dateISORes"
        :key="index"
        type="info"
      >
        <div>
          <span className="font-bold">{{ item.label }}</span>
          <span className="ml-2">
            regExp.dateISO.test("{{ item.value }}")
          </span>
        </div>
        <n-gradient-text type="info">
          // 预期: {{ item.expected }}, 实际:
          {{ regExp.dateISO.test(item.value) }}, 结果:
          {{ regExp.dateISO.test(item.value) === item.expected ? "✓" : "✗" }}
        </n-gradient-text>
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
