<script setup lang="ts">
import { ref } from "vue";
import { imageCompress } from "@anyuan/utils";

// imageCompress 测试数据
const imageCompressRes = ref<
  Array<{ label: string; url: string; options?: any }>
>([]);
imageCompressRes.value = [
  { label: "默认压缩", url: "https://picsum.photos/400/600" },
  {
    label: "高质量压缩",
    url: "https://picsum.photos/400/600",
    options: { quality: 0.9, maxWidth: 800 }
  },
  {
    label: "低质量压缩",
    url: "https://picsum.photos/400/600",
    options: { quality: 0.3, maxWidth: 200 }
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
      v-for="(item, index) in imageCompressRes"
      :key="index"
      className="flex flex-col justify-center mt-2"
    >
      <div>
        <span className="font-bold">{{ item.label }}</span>
        <span className="ml-2">
          imageCompress("{{ item.url }}", {{ JSON.stringify(item.options) }})
        </span>
      </div>
      <n-gradient-text type="info">
        // {{ executeTest(imageCompress, item.url, item.options) }}
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
