<script setup lang="ts">
import { ref } from "vue";
import { fileDownloadByUrl } from "@anyuan/utils";

// fileDownloadByUrl 测试数据
const fileDownloadByUrlRes = ref<
  Array<{ label: string; url: string; filename: string; mime?: string }>
>([]);
fileDownloadByUrlRes.value = [
  {
    label: "图片下载",
    url: "https://picsum.photos/200/300",
    filename: "image.jpg",
    mime: "image/jpeg"
  },
  {
    label: "文本文件",
    url: "https://jsonplaceholder.typicode.com/posts/1",
    filename: "data.json",
    mime: "application/json"
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
      v-for="(item, index) in fileDownloadByUrlRes"
      :key="index"
      className="flex flex-col justify-center mt-2"
    >
      <div>
        <span className="font-bold">{{ item.label }}</span>
        <span className="ml-2">
          fileDownloadByUrl("{{ item.url }}", "{{ item.filename }}", "{{
            item.mime
          }}")
        </span>
      </div>
      <n-button
        @click="
          executeTest(fileDownloadByUrl, item.url, item.filename, item.mime)
        "
      >
        测试下载
      </n-button>
    </div>
  </naive-theme>
</template>
