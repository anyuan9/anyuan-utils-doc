<script setup lang="ts">
import { ref, onMounted } from "vue";
import { scrollIntoView } from "@anyuan/utils";

const testElement = ref<HTMLElement>();

const scrollIntoViewRes = ref<
  Array<{
    label: string;
    element: HTMLElement | undefined;
    options?: {
      block?: "start" | "center" | "end" | "nearest";
      inline?: "start" | "center" | "end" | "nearest";
      behavior?: "smooth" | "instant" | "auto";
    };
  }>
>([]);

onMounted(() => {
  scrollIntoViewRes.value = [
    {
      label: "滚动元素到视图",
      element: testElement.value,
      options: { behavior: "smooth", block: "center" }
    },
    { label: "空元素滚动", element: undefined, options: { behavior: "smooth" } }
  ];
});
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
      ref="testElement"
      style="
        height: 100px;
        background: #007acc;
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
      "
    >
      目标元素 - 点击下方按钮滚动到此元素
    </div>
    <div
      style="
        height: 1000px;
        background: linear-gradient(to bottom, #e0e0e0, #f0f0f0);
      "
    >
      下方区域
    </div>

    <div
      v-for="(item, index) in scrollIntoViewRes"
      :key="index"
      className="flex flex-col justify-center mt-2"
    >
      <div>
        <span className="font-bold">{{ item.label }}</span>
        <span className="ml-2">
          scrollIntoView(element, {{ JSON.stringify(item.options) }})
        </span>
        <n-button
          @click="item.element && scrollIntoView(item.element, item.options)"
        >
          执行滚动
        </n-button>
      </div>
    </div>
  </naive-theme>
</template>
