<script setup lang="ts">
import { ref } from "vue";
import { getPassTime } from "@anyuan/utils";

const now = new Date();

// getPassTime 测试数据
const getPassTimeRes = ref<Array<{ label: string; value: any }>>([]);
getPassTimeRes.value = [
  { label: "刚刚", value: new Date(now.getTime() - 10 * 1000) },
  { label: "35秒前", value: new Date(now.getTime() - 35 * 1000) },
  { label: "1分钟前", value: new Date(now.getTime() - 65 * 1000) },
  { label: "5分钟前", value: new Date(now.getTime() - 5 * 60 * 1000) },
  { label: "1小时前", value: new Date(now.getTime() - 65 * 60 * 1000) },
  { label: "1天前", value: new Date(now.getTime() - 25 * 60 * 60 * 1000) },
  {
    label: "1个月前",
    value: new Date(now.getTime() - 32 * 24 * 60 * 60 * 1000)
  },
  {
    label: "1年前",
    value: new Date(now.getTime() - 13 * 30 * 24 * 60 * 60 * 1000)
  },
  { label: "未来时间", value: new Date(now.getTime() + 60 * 1000) },
  { label: "无效日期", value: "Invalid Date" },
  { label: "空字符串", value: "" },
  { label: "null", value: null },
  { label: "undefined", value: undefined },
  { label: "数组", value: [] }
];
</script>

<template>
  <naive-theme>
    <div
      v-for="(item, index) in getPassTimeRes"
      :key="index"
      className="flex flex-col justify-center mt-2"
    >
      <div>
        <span className="font-bold">{{ item.label }}</span>
        <span className="ml-2"> getPassTime({{ `${item.value}` }}) </span>
      </div>
      <n-gradient-text type="info">
        // {{ getPassTime(item.value) }}
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
