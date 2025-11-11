<script setup lang="ts">
import { ref } from "vue";
import { debounce } from "@anyuan/utils";

// debounce 测试数据
const debounceRes = ref<
  Array<{ label: string; timeout?: number; immediate?: boolean }>
>([]);
debounceRes.value = [
  { label: "默认防抖(200ms)", timeout: 200, immediate: false },
  { label: "立即执行防抖", timeout: 200, immediate: true },
  { label: "长延迟防抖(500ms)", timeout: 500, immediate: false },
  { label: "短延迟防抖(100ms)", timeout: 100, immediate: false }
];

// 防抖测试函数
const debounceTestFn = (message: string) => {
  console.log(
    `防抖函数被调用: ${message} - ${new Date().toLocaleTimeString()}`
  );
};
</script>

<template>
  <naive-theme>
    <div
      v-for="(item, index) in debounceRes"
      :key="index"
      className="flex flex-col justify-center mt-2"
    >
      <div>
        <span className="font-bold">{{ item.label }}</span>
        <span className="ml-2">
          debounce(fn, {{ item.timeout }}, {{ item.immediate }})
        </span>
      </div>
      <n-gradient-text type="info">
        // {{ "返回包装后的函数" }}
      </n-gradient-text>
      <n-button
        @click="
          debounce(
            () => debounceTestFn(item.label),
            item.timeout,
            item.immediate
          )()
        "
      >
        测试防抖
      </n-button>
    </div>
  </naive-theme>
</template>
