<script setup lang="ts">
import { ref } from "vue";
import { fileToBlobToBase64 } from "@anyuan/utils";

// fileToBlobToBase64 测试数据
const testFile = new File(["hello world"], "test.txt", { type: "text/plain" });
const fileToBlobToBase64Res = ref<Array<{ label: string; file: File }>>([]);
fileToBlobToBase64Res.value = [
  { label: "文本文件", file: testFile },
  { label: "空文件", file: new File([], "empty.txt", { type: "text/plain" }) }
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
      v-for="(item, index) in fileToBlobToBase64Res"
      :key="index"
      className="flex flex-col justify-center mt-2"
    >
      <div>
        <span className="font-bold">{{ item.label }}</span>
        <span className="ml-2"> fileToBlobToBase64(file) </span>
      </div>
      <n-gradient-text type="info">
        // {{ executeTest(fileToBlobToBase64, item.file) }}
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
