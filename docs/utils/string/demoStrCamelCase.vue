<script setup lang="ts">
import { ref } from "vue";
import { strCamelCase } from "@anyuan/utils";

// strCamelCase 测试数据
const strCamelCaseRes = ref<
  Array<{ label: string; value: string; options?: any }>
>([]);
strCamelCaseRes.value = [
  { label: "默认选项", value: "hello-world_test" },
  {
    label: "保持连续大写",
    value: "XMLHttpRequest",
    options: { preserveConsecutiveUppercase: true }
  },
  { label: "空字符串", value: "" },
  { label: "单个单词", value: "hello" },
  { label: "包含数字", value: "hello-world123_test" },
  { label: "特殊字符", value: "hello@world#test" }
];
</script>

<template>
  <naive-theme>
    <div
      v-for="(item, index) in strCamelCaseRes"
      :key="index"
      className="flex flex-col justify-center mt-2"
    >
      <div>
        <span className="font-bold">{{ item.label }}</span>
        <span className="ml-2">
          strCamelCase("{{ item.value }}"{{
            item.options ? `, ${JSON.stringify(item.options)}` : ""
          }})
        </span>
      </div>
      <n-gradient-text type="info">
        // {{ strCamelCase(item.value, item.options) }}
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
