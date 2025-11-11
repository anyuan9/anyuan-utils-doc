<script setup lang="ts">
import { ref } from "vue";
import { isLeapYear } from "@anyuan/utils";

// isLeapYear 测试数据
const isLeapYearRes = ref<Array<{ label: string; value: any }>>([]);
isLeapYearRes.value = [
  { label: "闰年", value: 2020 },
  { label: "平年", value: 2021 },
  { label: "世纪闰年", value: 2000 },
  { label: "非世纪平年", value: 1900 },
  { label: "Date对象闰年", value: new Date(2020, 0, 1) },
  { label: "Date对象平年", value: new Date(2021, 0, 1) },
  { label: "字符串年份", value: "2020" },
  { label: "无效年份", value: "invalid" },
  { label: "null", value: null }
];
</script>

<template>
  <naive-theme>
    <div
      v-for="(item, index) in isLeapYearRes"
      :key="index"
      className="flex flex-col justify-center mt-2"
    >
      <div>
        <span className="font-bold">{{ item.label }}</span>
        <span className="ml-2">
          isLeapYear({{ JSON.stringify(item.value) }})
        </span>
      </div>
      <n-gradient-text type="info">
        // {{ isLeapYear(item.value) }}
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
