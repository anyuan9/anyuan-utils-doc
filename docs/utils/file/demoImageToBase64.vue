<script setup lang="ts">
import { ref } from "vue";
import { imageToBase64 } from "@anyuan/utils";

// imageToBase64 测试数据
const imageToBase64Res = ref<Array<{ label: string; url: string }>>([]);
imageToBase64Res.value = [
  { label: "在线图片", url: "https://picsum.photos/200/300" },
  {
    label: "Base64图片",
    url: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg=="
  },
  { label: "无效URL", url: "invalid-url" }
];

// 执行测试的函数
const executeTest = async (fn: Function, ...args: any[]) => {
  try {
    return await fn(...args);
  } catch (error) {
    return `错误: ${error.message}`;
  }
};
</script>

<template>
  <naive-theme>
    <div
      v-for="(item, index) in imageToBase64Res"
      :key="index"
      className="flex flex-col justify-center mt-2"
    >
      <div>
        <span className="font-bold">{{ item.label }}</span>
        <span className="ml-2"> imageToBase64("{{ item.url }}")</span>
      </div>
      <n-gradient-text type="info">
        // {{ executeTest(imageToBase64, item.url) }}
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
