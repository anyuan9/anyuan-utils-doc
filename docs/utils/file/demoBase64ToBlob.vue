<script setup lang="ts">
import { ref } from "vue";
import { base64ToBlob } from "@anyuan/utils";

// base64ToBlob 测试数据
const testBase64 =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg==";
const base64ToBlobRes = ref<Array<{ label: string; base64Buf: string }>>([]);
base64ToBlobRes.value = [
  { label: "有效Base64", base64Buf: testBase64 },
  {
    label: "无前缀Base64",
    base64Buf:
      "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg=="
  },
  { label: "无效Base64", base64Buf: "invalid-base64" }
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
      v-for="(item, index) in base64ToBlobRes"
      :key="index"
      className="flex flex-col justify-center mt-2"
    >
      <div>
        <span className="font-bold">{{ item.label }}</span>
        <span className="ml-2">
          base64ToBlob("{{ item.base64Buf.substring(0, 30) }}...")
        </span>
      </div>
      <n-gradient-text type="info">
        // {{ JSON.stringify(executeTest(base64ToBlob, item.base64Buf)) }}
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
