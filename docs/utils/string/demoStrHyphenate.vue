<script setup lang="ts">
import { ref } from "vue";
import { strHyphenate } from "@anyuan/utils";

// strHyphenate 测试数据
const strHyphenateRes = ref<Array<{ label: string; value: string }>>([]);
strHyphenateRes.value = [
  { label: "驼峰转连字符", value: "helloWorld" },
  { label: "已连字符格式", value: "hello-world" },
  { label: "空字符串", value: "" },
  { label: "单个单词", value: "hello" },
  { label: "大写开头", value: "HelloWorld" },
  { label: "连续大写", value: "XMLHttpRequest" },
  { label: "包含数字", value: "helloWorld123" }
];
</script>

<template>
  <naive-theme>
    <div
      v-for="(item, index) in strHyphenateRes"
      :key="index"
      className="flex flex-col justify-center mt-2"
    >
      <div>
        <span className="font-bold">{{ item.label }}</span>
        <span className="ml-2"> strHyphenate("{{ item.value }}")</span>
      </div>
      <n-gradient-text type="info">
        // {{ strHyphenate(item.value) }}
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
