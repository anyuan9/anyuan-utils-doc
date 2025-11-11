<script setup lang="ts">
import { ref } from "vue";
import { fileDownloadByBlob } from "@anyuan/utils";

// fileDownloadByBlob 测试数据
const testBlob = new Blob(['{"message": "test blob data"}'], {
  type: "application/json"
});
const fileDownloadByBlobRes = ref<
  Array<{ label: string; blob: Blob; filename: string }>
>([]);
fileDownloadByBlobRes.value = [
  { label: "JSON Blob", blob: testBlob, filename: "data.json" },
  {
    label: "文本Blob",
    blob: new Blob(["hello world"], { type: "text/plain" }),
    filename: "text.txt"
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
      v-for="(item, index) in fileDownloadByBlobRes"
      :key="index"
      className="flex flex-col justify-center mt-2"
    >
      <div>
        <span className="font-bold">{{ item.label }}</span>
        <span className="ml-2">
          fileDownloadByBlob(blob, "{{ item.filename }}")
        </span>
      </div>
      <n-button
        @click="executeTest(fileDownloadByBlob, item.blob, item.filename)"
      >
        测试下载
      </n-button>
    </div>
  </naive-theme>
</template>
