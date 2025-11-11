<script setup lang="ts">
import { ref } from "vue";
import { isElement } from "@anyuan/utils";

// 由于部分函数需要DOM元素，这里创建一些简单的测试
const isElementRes = ref<Array<{ label: string; value: any }>>([]);
isElementRes.value = [
  { label: "DOM元素", value: document.createElement("div") },
  { label: "文本节点", value: document.createTextNode("test") },
  { label: "普通对象", value: {} },
  { label: "null", value: null }
];
</script>

<template>
  <naive-theme>
    <div
      v-for="(item, index) in isElementRes"
      :key="index"
      className="flex flex-col justify-center mt-2"
    >
      <div>
        <span className="font-bold">{{ item.label }}</span>
        <span className="ml-2">
          isElement({{ JSON.stringify(item.value) }})
        </span>
      </div>
      <n-gradient-text type="info">
        // {{ isElement(item.value) }}
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
