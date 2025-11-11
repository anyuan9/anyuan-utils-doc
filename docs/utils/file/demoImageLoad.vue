<script setup lang="ts">
import { ref } from "vue";
import { imageLoad } from "@anyuan/utils";

// imageLoad 测试数据
const imageLoadRes = ref<Array<{ label: string; url: string }>>([]);
imageLoadRes.value = [
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
      v-for="(item, index) in imageLoadRes"
      :key="index"
      className="flex flex-col justify-center mt-2"
    >
      <div>
        <span className="font-bold">{{ item.label }}</span>
        <span className="ml-2"> imageLoad("{{ item.url }}")</span>
      </div>
      <n-gradient-text type="info">
        // {{ executeTest(imageLoad, item.url) }}
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
