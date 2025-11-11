<script setup lang="ts">
import { ref } from "vue";
import { imageToGrayScale } from "@anyuan/utils";

// imageToGrayScale 测试数据
const imageToGrayScaleRes = ref<
  Array<{ label: string; url: string; options?: any }>
>([]);
imageToGrayScaleRes.value = [
  { label: "默认配置", url: "https://picsum.photos/200/300" },
  {
    label: "自定义配置",
    url: "https://picsum.photos/200/300",
    options: { quality: 0.8 }
  },
  {
    label: "Base64图片",
    url: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg=="
  }
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
      v-for="(item, index) in imageToGrayScaleRes"
      :key="index"
      className="flex flex-col justify-center mt-2"
    >
      <div>
        <span className="font-bold">{{ item.label }}</span>
        <span className="ml-2"> imageToGrayScale("{{ item.url }}")</span>
      </div>
      <n-gradient-text type="info">
        // {{ executeTest(imageToGrayScale, item.url) }}
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
