<script setup lang="ts">
import { ref } from "vue";
import { strCapitalize } from "@anyuan/utils";

// strCapitalize 测试数据
const strCapitalizeRes = ref<Array<{ label: string; value: string }>>([]);
strCapitalizeRes.value = [
  { label: "小写字母", value: "hello" },
  { label: "大写字母", value: "HELLO" },
  { label: "混合大小写", value: "hElLo" },
  { label: "单个字符", value: "a" },
  { label: "空字符串", value: "" },
  { label: "包含数字", value: "hello123" },
  { label: "中文字符", value: "你好世界" }
];
</script>

<template>
  <naive-theme>
    <div
      v-for="(item, index) in strCapitalizeRes"
      :key="index"
      className="flex flex-col justify-center mt-2"
    >
      <div>
        <span className="font-bold">{{ item.label }}</span>
        <span className="ml-2"> strCapitalize("{{ item.value }}")</span>
      </div>
      <n-gradient-text type="info">
        // {{ strCapitalize(item.value) }}
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
