<script setup lang="ts">
import { ref, onMounted } from "vue";
import { elementGetClass } from "@anyuan/utils";

const testElement = ref<HTMLElement>();
const testElement2 = ref<HTMLElement>();

const elementGetClassRes = ref<
  Array<{ label: string; element: HTMLElement | Element | undefined }>
>([]);

onMounted(() => {
  elementGetClassRes.value = [
    { label: "获取单类名元素", element: testElement.value },
    { label: "获取多类名元素", element: testElement2.value },
    { label: "空元素获取", element: undefined }
  ];
});
</script>

<template>
  <naive-theme>
    <div ref="testElement" class="test">测试元素1 (单类名)</div>
    <div ref="testElement2" class="class1 class2 class3">
      测试元素2 (多类名)
    </div>

    <div
      v-for="(item, index) in elementGetClassRes"
      :key="index"
      className="flex flex-col justify-center mt-2"
    >
      <div>
        <span className="font-bold">{{ item.label }}</span>
        <span className="ml-2"> elementGetClass(element) </span>
      </div>
      <n-gradient-text type="info">
        // {{ JSON.stringify(elementGetClass(item.element)) }}
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
