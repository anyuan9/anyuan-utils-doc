<script setup lang="ts">
import { ref } from "vue";
import { dateFormat } from "@anyuan/utils";

// dateFormat 测试数据
const dateFormatRes = ref<
  Array<{
    label: string;
    value: any;
    format?: string;
    options?: { locales: string };
  }>
>([]);
dateFormatRes.value = [
  { label: "Date对象", value: new Date() },
  { label: "时间戳", value: Date.now() },
  { label: "时间字符串", value: "2024-01-15T10:30:00" },
  { label: "时间字符串", value: "06 May 2022" },
  { label: "无效日期", value: "Invalid Date" },
  { label: "空字符串", value: "" },
  { label: "null", value: null },
  { label: "undefined", value: undefined },
  { label: "数组", value: [] },
  {
    label: "自定义格式",
    value: new Date(),
    format: "YYYY年MM月DD日 HH时mm分ss秒"
  },
  {
    label: "自定义格式",
    value: new Date(),
    format: "YYYY-MM-DDTHH:mm:ss.SSSzz"
  },
  {
    label: "自定义格式",
    value: new Date(),
    format: "YYYY-MM-DDTHH:mm:ss.SSSZ"
  },
  {
    label: "自定义格式",
    value: new Date(),
    format: "YYYY-MM-DD HH:mm:ss.SSSzz ddd",
    options: { locales: "zh-CN" }
  }
];
</script>

<template>
  <naive-theme>
    <div
      v-for="(item, index) in dateFormatRes"
      :key="index"
      className="flex flex-col justify-center mt-2"
    >
      <div>
        <span className="font-bold">{{ item.label }}</span>
        <span className="ml-2">
          dateFormat({{ `${item.value}`
          }}{{ item.format ? `, "${item.format}"` : ""
          }}{{ item.options ? `, "${JSON.stringify(item.options)}"` : "" }})
        </span>
      </div>
      <n-gradient-text type="info">
        // {{ dateFormat(item.value, item.format, item.options) }}
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
