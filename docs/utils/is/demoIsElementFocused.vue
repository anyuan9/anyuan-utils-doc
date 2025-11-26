<script setup lang="ts">
import { ref, onMounted } from "vue";
import { isElementFocused } from "@anyuan/utils";

const isElementFocusedRes = ref<Array<{ label: string; value: any }>>([]);

onMounted(() => {
  if (typeof document !== "undefined") {
    isElementFocusedRes.value = [
      { label: "焦点元素", value: document.createElement("input") },
      { label: "非焦点元素", value: document.createElement("div") }
    ];
  }
});
</script>

<template>
  <naive-theme>
    <div
      v-for="(item, index) in isElementFocusedRes"
      :key="index"
      className="flex flex-col justify-center mt-2"
    >
      <div>
        <span className="font-bold">{{ item.label }}</span>
        <span className="ml-2">
          isElementFocused({{ JSON.stringify(item.value) }})
        </span>
      </div>
      <n-gradient-text type="info">
        // {{ isElementFocused(item.value) }}
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
