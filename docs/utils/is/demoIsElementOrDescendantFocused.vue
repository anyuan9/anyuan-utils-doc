<script setup lang="ts">
import { ref } from "vue";
import { isElementOrDescendantFocused } from "@anyuan/utils";

// isElementOrDescendantFocused 测试数据
const isElementOrDescendantFocusedRes = ref<
  Array<{ label: string; value: any }>
>([]);
isElementOrDescendantFocusedRes.value = [
  { label: "包含焦点元素的父元素", value: document.createElement("div") },
  { label: "不包含焦点元素的父元素", value: document.createElement("div") }
];
</script>

<template>
  <naive-theme>
    <div
      v-for="(item, index) in isElementOrDescendantFocusedRes"
      :key="index"
      className="flex flex-col justify-center mt-2"
    >
      <div>
        <span className="font-bold">{{ item.label }}</span>
        <span className="ml-2">
          isElementOrDescendantFocused({{ JSON.stringify(item.value) }})
        </span>
      </div>
      <n-gradient-text type="info">
        // {{ isElementOrDescendantFocused(item.value) }}
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
