<script setup lang="ts">
import { ref } from "vue";
import { base64ToStr } from "@anyuan/utils";

// base64ToStr 测试数据
const base64ToStrRes = ref<Array<{ label: string; base64Buf: string }>>([]);
base64ToStrRes.value = [
  { label: "有效Base64", base64Buf: "aGVsbG8gd29ybGQ=" },
  { label: "中文Base64", base64Buf: "5Lit5paH" },
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
      v-for="(item, index) in base64ToStrRes"
      :key="index"
      className="flex flex-col justify-center mt-2"
    >
      <div>
        <span className="font-bold">{{ item.label }}</span>
        <span className="ml-2"> base64ToStr("{{ item.base64Buf }}")</span>
      </div>
      <n-gradient-text type="info">
        // {{ executeTest(base64ToStr, item.base64Buf) }}
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
