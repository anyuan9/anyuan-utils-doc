<script setup lang="ts">
import { ref } from "vue";
import { randomDate } from "@anyuan/utils";

// randomDate 测试数据
const randomDateRes = ref<Array<{ label: string; start?: Date; end?: Date }>>(
  []
);
const now = new Date();
randomDateRes.value = [
  { label: "默认参数", start: new Date(0), end: now },
  {
    label: "最近一年",
    start: new Date(now.getTime() - 365 * 24 * 60 * 60 * 1000),
    end: now
  },
  {
    label: "特定范围",
    start: new Date("2024-01-01"),
    end: new Date("2024-12-31")
  },
  {
    label: "相同日期",
    start: new Date("2024-06-01"),
    end: new Date("2024-06-01")
  },
  {
    label: "未来日期",
    start: now,
    end: new Date(now.getTime() + 30 * 24 * 60 * 60 * 1000)
  },
  {
    label: "反向范围",
    start: new Date("2024-12-31"),
    end: new Date("2024-01-01")
  }
];
</script>

<template>
  <naive-theme>
    <div
      v-for="(item, index) in randomDateRes"
      :key="index"
      className="flex flex-col justify-center mt-2"
    >
      <div>
        <span className="font-bold">{{ item.label }}</span>
        <span className="ml-2">
          randomDate({{
            item.start ? item.start.toISOString().split("T")[0] : ""
          }}{{ item.end ? `, ${item.end.toISOString().split("T")[0]}` : "" }})
        </span>
      </div>
      <n-gradient-text type="info">
        // {{ randomDate(item.start, item.end).toISOString().split("T")[0] }}
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
