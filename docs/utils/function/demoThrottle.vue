<script setup lang="ts">
import { ref } from "vue";
import { throttle } from "@anyuan/utils";

// throttle 测试数据
const throttleRes = ref<Array<{ label: string; timeout?: number }>>([]);
throttleRes.value = [
  { label: "默认节流(1000ms)", timeout: 1000 },
  { label: "快速节流(200ms)", timeout: 200 },
  { label: "慢速节流(2000ms)", timeout: 2000 }
];

// 节流测试函数
const throttleTestFn = (message: string) => {
  console.log(
    `节流函数被调用: ${message} - ${new Date().toLocaleTimeString()}`
  );
};
</script>

<template>
  <naive-theme>
    <div
      v-for="(item, index) in throttleRes"
      :key="index"
      className="flex flex-col justify-center mt-2"
    >
      <div>
        <span className="font-bold">{{ item.label }}</span>
        <span className="ml-2"> throttle(fn, {{ item.timeout }}) </span>
      </div>
      <n-gradient-text type="info">
        // {{ "返回包装后的函数" }}
      </n-gradient-text>
      <n-button
        @click="throttle(() => throttleTestFn(item.label), item.timeout)()"
      >
        测试节流
      </n-button>
    </div>
  </naive-theme>
</template>
