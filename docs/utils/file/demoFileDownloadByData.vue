<script setup lang="ts">
import { ref } from "vue";
import { fileDownloadByData } from "@anyuan/utils";

// fileDownloadByData 测试数据（模拟响应对象）
const mockResponse = {
  data: new Blob(['{"message": "test data"}'], { type: "application/json" }),
  headers: {
    "content-type": "application/json",
    "content-disposition": 'attachment;filename="test.json"'
  }
};
const fileDownloadByDataRes = ref<
  Array<{ label: string; res: any; filename?: string }>
>([]);
fileDownloadByDataRes.value = [
  { label: "Blob数据下载", res: mockResponse },
  { label: "自定义文件名", res: mockResponse, filename: "custom-name.json" }
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
      v-for="(item, index) in fileDownloadByDataRes"
      :key="index"
      className="flex flex-col justify-center mt-2"
    >
      <div>
        <span className="font-bold">{{ item.label }}</span>
        <span className="ml-2">
          fileDownloadByData(response, "{{ item.filename || "默认文件名" }}")
        </span>
      </div>
      <n-button
        @click="executeTest(fileDownloadByData, item.res, item.filename)"
      >
        测试下载
      </n-button>
    </div>
  </naive-theme>
</template>
