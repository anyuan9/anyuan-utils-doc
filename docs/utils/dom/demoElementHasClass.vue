<script setup lang="ts">
import { ref, onMounted } from "vue";
import { elementHasClass } from "@anyuan/utils";

const testElement = ref<HTMLElement>();

const elementHasClassRes = ref<
  Array<{
    label: string;
    element: HTMLElement | Element | undefined;
    className: string;
  }>
>([]);

onMounted(() => {
  elementHasClassRes.value = [
    { label: "检查test类名", element: testElement.value, className: "test" },
    {
      label: "检查nonexistent类名",
      element: testElement.value,
      className: "nonexistent"
    },
    { label: "空元素检查", element: undefined, className: "test" },
    { label: "空类名检查", element: testElement.value, className: "" }
  ];
});
</script>

<template>
  <naive-theme>
    <div ref="testElement" class="test original">
      测试元素 (class: test original)
    </div>

    <div
      v-for="(item, index) in elementHasClassRes"
      :key="index"
      className="flex flex-col justify-center mt-2"
    >
      <div>
        <span className="font-bold">{{ item.label }}</span>
        <span className="ml-2">
          elementHasClass(element, "{{ item.className }}")
        </span>
      </div>
      <n-gradient-text type="info">
        // {{ elementHasClass(item.element, item.className) }}
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
