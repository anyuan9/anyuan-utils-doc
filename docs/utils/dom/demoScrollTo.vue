<script setup lang="ts">
import { ref } from "vue";
import { scrollTo } from "@anyuan/utils";

const scrollToRes = ref<
  Array<{
    label: string;
    options?: { left?: number; top?: number; behavior?: "smooth" | "auto" };
  }>
>([]);

scrollToRes.value = [
  { label: "滚动到顶部", options: { top: 0, behavior: "smooth" } },
  {
    label: "滚动到指定位置",
    options: { top: 500, left: 0, behavior: "smooth" }
  },
  { label: "默认滚动", options: {} }
];
</script>

<template>
  <naive-theme>
    <div
      style="
        height: 1000px;
        background: linear-gradient(to bottom, #f0f0f0, #e0e0e0);
      "
    >
      滚动测试区域 - 请向下滚动
    </div>

    <div
      v-for="(item, index) in scrollToRes"
      :key="index"
      className="flex flex-col justify-center mt-2"
    >
      <div>
        <span className="font-bold">{{ item.label }}</span>
        <span className="ml-2">
          scrollTo({{ JSON.stringify(item.options) }})
        </span>
        <n-button @click="scrollTo(item.options)">执行滚动</n-button>
      </div>
    </div>
  </naive-theme>
</template>
