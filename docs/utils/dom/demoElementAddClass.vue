<script setup lang="ts">
import { ref, onMounted } from "vue";
import { elementAddClass } from "@anyuan/utils";

const testElement = ref<HTMLElement>();

const elementAddClassRes = ref<
  Array<{
    label: string;
    element: HTMLElement | Element | undefined;
    className: string;
  }>
>([]);

onMounted(() => {
  elementAddClassRes.value = [
    { label: "添加single类", element: testElement.value, className: "single" },
    {
      label: "添加multiple类",
      element: testElement.value,
      className: "multiple"
    },
    { label: "空元素添加", element: undefined, className: "test" }
  ];
});
</script>

<template>
  <naive-theme>
    <div ref="testElement" class="test original">
      测试元素 (class: test original)
    </div>

    <div
      v-for="(item, index) in elementAddClassRes"
      :key="index"
      className="flex flex-col justify-center mt-2"
    >
      <div>
        <span className="font-bold">{{ item.label }}</span>
        <span className="ml-2">
          elementAddClass(element, "{{ item.className }}")
        </span>
        <n-button @click="elementAddClass(item.element, item.className)">
          向元素添加类名
        </n-button>
      </div>
      <div v-if="item.element">当前类名: {{ item.element.className }}</div>
    </div>
  </naive-theme>
</template>
