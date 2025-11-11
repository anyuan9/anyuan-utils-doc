<script setup lang="ts">
import { ref, onMounted } from "vue";
import { elementRemoveClass } from "@anyuan/utils";

const testElement = ref<HTMLElement>();

const elementRemoveClassRes = ref<
  Array<{
    label: string;
    element: HTMLElement | Element | undefined;
    className: string;
  }>
>([]);

onMounted(() => {
  elementRemoveClassRes.value = [
    { label: "移除test类", element: testElement.value, className: "test" },
    {
      label: "移除multiple类",
      element: testElement.value,
      className: "multiple"
    },
    {
      label: "移除不存在的类",
      element: testElement.value,
      className: "nonexistent"
    }
  ];
});
</script>

<template>
  <naive-theme>
    <div ref="testElement" class="test original multiple">
      测试元素 (class: test original multiple)
    </div>

    <div
      v-for="(item, index) in elementRemoveClassRes"
      :key="index"
      className="flex flex-col justify-center mt-2"
    >
      <div>
        <span className="font-bold">{{ item.label }}</span>
        <span className="ml-2">
          elementRemoveClass(element, "{{ item.className }}")
        </span>
        <n-button @click="elementRemoveClass(item.element, item.className)">
          删除元素类名
        </n-button>
      </div>
      <div v-if="item.element">当前类名: {{ item.element.className }}</div>
    </div>
  </naive-theme>
</template>
