<script setup lang="ts">
import { ref } from "vue";
import { blobToBase64 } from "@anyuan/utils";

// blobToBase64 测试数据
const testBlob = new Blob(["hello world"], { type: "text/plain" });
const blobToBase64Res = ref<
  Array<{ label: string; blob: Blob; widthPrefix: boolean }>
>([]);
blobToBase64Res.value = [
  { label: "带前缀", blob: testBlob, widthPrefix: true },
  { label: "无前缀", blob: testBlob, widthPrefix: false },
  {
    label: "空Blob",
    blob: new Blob([], { type: "text/plain" }),
    widthPrefix: true
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
      v-for="(item, index) in blobToBase64Res"
      :key="index"
      className="flex flex-col justify-center mt-2"
    >
      <div>
        <span className="font-bold">{{ item.label }}</span>
        <span className="ml-2">
          blobToBase64(blob, {{ item.widthPrefix }})
        </span>
      </div>
      <n-gradient-text type="info">
        // {{ executeTest(blobToBase64, item.blob, item.widthPrefix) }}
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
