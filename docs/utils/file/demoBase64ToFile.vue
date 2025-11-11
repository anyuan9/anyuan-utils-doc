<script setup lang="ts">
import { ref } from "vue";
import { base64ToFile } from "@anyuan/utils";

// base64ToFile 测试数据
const testBase64 =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg==";
const base64ToFileRes = ref<
  Array<{ label: string; base64Buf: string; filename: string; mime?: string }>
>([]);
base64ToFileRes.value = [
  {
    label: "图片文件",
    base64Buf: testBase64,
    filename: "image.png",
    mime: "image/png"
  },
  {
    label: "文本文件",
    base64Buf: "data:text/plain;base64,aGVsbG8gd29ybGQ=",
    filename: "text.txt",
    mime: "text/plain"
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
      v-for="(item, index) in base64ToFileRes"
      :key="index"
      className="flex flex-col justify-center mt-2"
    >
      <div>
        <span className="font-bold">{{ item.label }}</span>
        <span className="ml-2">
          base64ToFile("{{ item.base64Buf.substring(0, 30) }}...", "{{
            item.filename
          }}", "{{ item.mime }}")
        </span>
      </div>
      <n-gradient-text type="info">
        //
        {{
          JSON.stringify(
            executeTest(base64ToFile, item.base64Buf, item.filename, item.mime)
          )
        }}
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
