<script setup lang="ts">
import { ref, onMounted } from "vue";
import { elementToggleClass } from "@anyuan/utils";

const testElement = ref<HTMLElement>();

const elementToggleClassRes = ref<
  Array<{
    label: string;
    element: HTMLElement | Element | undefined;
    className: string;
  }>
>([]);

onMounted(() => {
  elementToggleClassRes.value = [
    {
      label: "添加toggle类(true)",
      element: testElement.value,
      className: "toggle"
    },
    {
      label: "移除toggle类(false)",
      element: testElement.value,
      className: "toggle"
    },
    {
      label: "空元素操作",
      element: undefined,
      className: "test"
    }
  ];
});
</script>

<template>
  <naive-theme>
    <div ref="testElement" class="test original">
      测试元素 (class: test original)
    </div>

    <div
      v-for="(item, index) in elementToggleClassRes"
      :key="index"
      className="flex flex-col justify-center mt-2"
    >
      <div>
        <span className="font-bold">{{ item.label }}</span>
        <span className="ml-2">
          elementToggleClass(element, "{{ item.className }}")
        </span>
        <n-button @click="elementToggleClass(item.element, item.className)">
          切换元素类名
        </n-button>
      </div>
      <div v-if="item.element">当前类名: {{ item.element.className }}</div>
    </div>
  </naive-theme>
</template>
