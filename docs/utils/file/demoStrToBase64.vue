<script setup lang="ts">
import { ref } from "vue";
import { strToBase64 } from "@anyuan/utils";

// strToBase64 测试数据
const strToBase64Res = ref<
  Array<{ label: string; str: string; widthPrefix: boolean }>
>([]);
strToBase64Res.value = [
  { label: "英文带前缀", str: "hello world", widthPrefix: true },
  { label: "英文无前缀", str: "hello world", widthPrefix: false },
  { label: "中文带前缀", str: "你好世界", widthPrefix: true },
  { label: "特殊字符", str: "!@#$%^&*()", widthPrefix: true }
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
      v-for="(item, index) in strToBase64Res"
      :key="index"
      className="flex flex-col justify-center mt-2"
    >
      <div>
        <span className="font-bold">{{ item.label }}</span>
        <span className="ml-2">
          strToBase64("{{ item.str }}", {{ item.widthPrefix }})
        </span>
      </div>
      <n-gradient-text type="info">
        // {{ executeTest(strToBase64, item.str, item.widthPrefix) }}
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
