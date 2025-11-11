<script setup lang="ts">
import { ref } from "vue";
import { fileDownloadByBase64 } from "@anyuan/utils";

// fileDownloadByBase64 测试数据
const testBase64Image =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg==";
const fileDownloadByBase64Res = ref<
  Array<{ label: string; buf: string; filename: string; mime?: string }>
>([]);
fileDownloadByBase64Res.value = [
  {
    label: "Base64图片",
    buf: testBase64Image,
    filename: "base64-image.png",
    mime: "image/png"
  },
  { label: "无效Base64", buf: "invalid-base64", filename: "test.txt" }
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
      v-for="(item, index) in fileDownloadByBase64Res"
      :key="index"
      className="flex flex-col justify-center mt-2"
    >
      <div>
        <span className="font-bold">{{ item.label }}</span>
        <span className="ml-2">
          fileDownloadByBase64("{{ item.buf.substring(0, 30) }}...", "{{
            item.filename
          }}", "{{ item.mime }}")
        </span>
      </div>
      <n-button
        @click="
          executeTest(fileDownloadByBase64, item.buf, item.filename, item.mime)
        "
      >
        测试下载
      </n-button>
    </div>
  </naive-theme>
</template>
