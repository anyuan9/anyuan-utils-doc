<script setup lang="ts">
import { ref } from "vue";
import { imageDownload } from "@anyuan/utils";

// imageDownload 测试数据
const imageDownloadRes = ref<
  Array<{ label: string; src: string; filename?: string }>
>([]);
imageDownloadRes.value = [
  { label: "在线图片", src: "https://picsum.photos/200/300" },
  {
    label: "自定义文件名",
    src: "https://picsum.photos/200/300",
    filename: "my-image.jpg"
  },
  {
    label: "Base64图片",
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg=="
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
      v-for="(item, index) in imageDownloadRes"
      :key="index"
      className="flex flex-col justify-center mt-2"
    >
      <div>
        <span className="font-bold">{{ item.label }}</span>
        <span className="ml-2">
          imageDownload("{{ item.src }}", "{{ item.filename }}")
        </span>
      </div>
      <n-button @click="executeTest(imageDownload, item.src, item.filename)">
        测试下载
      </n-button>
    </div>
  </naive-theme>
</template>
