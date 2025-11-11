<script setup lang="ts">
import { ref } from "vue";
import { fileToBase64 } from "@anyuan/utils";

// fileToBase64 测试数据
const testFile = new File(["hello world"], "test.txt", { type: "text/plain" });
const fileToBase64Res = ref<
  Array<{ label: string; file: File; widthPrefix: boolean }>
>([]);
fileToBase64Res.value = [
  { label: "带前缀", file: testFile, widthPrefix: true },
  { label: "无前缀", file: testFile, widthPrefix: false },
  {
    label: "图片文件",
    file: new File([], "image.png", { type: "image/png" }),
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
      v-for="(item, index) in fileToBase64Res"
      :key="index"
      className="flex flex-col justify-center mt-2"
    >
      <div>
        <span className="font-bold">{{ item.label }}</span>
        <span className="ml-2">
          fileToBase64(file, {{ item.widthPrefix }})
        </span>
      </div>
      <n-gradient-text type="info">
        // {{ executeTest(fileToBase64, item.file, item.widthPrefix) }}
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
