<script setup lang="ts">
import { ref } from "vue";
import { getRemainTime } from "@anyuan/utils";

const now = new Date();

// getRemainTime 测试数据
const getRemainTimeRes = ref<Array<{ label: string; value: any }>>([]);
getRemainTimeRes.value = [
  { label: "即将到期", value: new Date(now.getTime() + 10 * 1000) },
  { label: "还剩34秒", value: new Date(now.getTime() + 35 * 1000) },
  { label: "还剩1分钟", value: new Date(now.getTime() + 65 * 1000) },
  { label: "还剩5分钟", value: new Date(now.getTime() + 5 * 60 * 1000) },
  { label: "还剩1小时", value: new Date(now.getTime() + 65 * 60 * 1000) },
  { label: "还剩1天", value: new Date(now.getTime() + 25 * 60 * 60 * 1000) },
  {
    label: "还剩1个月",
    value: new Date(now.getTime() + 32 * 24 * 60 * 60 * 1000)
  },
  {
    label: "还剩1年",
    value: new Date(now.getTime() + 13 * 30 * 24 * 60 * 60 * 1000)
  },
  { label: "已过期", value: new Date(now.getTime() - 60 * 1000) },
  { label: "无效日期", value: "Invalid Date" },
  { label: "空字符串", value: "" },
  { label: "null", value: null }
];
</script>

<template>
  <naive-theme>
    <div
      v-for="(item, index) in getRemainTimeRes"
      :key="index"
      className="flex flex-col justify-center mt-2"
    >
      <div>
        <span className="font-bold">{{ item.label }}</span>
        <span className="ml-2"> getRemainTime({{ `${item.value}` }}) </span>
      </div>
      <n-gradient-text type="info">
        // {{ getRemainTime(item.value) }}
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
