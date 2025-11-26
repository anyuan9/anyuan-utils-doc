<script setup lang="ts">
import { ref, onMounted } from "vue";
import { isElementInViewport } from "@anyuan/utils";

const isElementInViewportRes = ref<Array<{ label: string; value: any }>>([]);

onMounted(() => {
  if (typeof document !== "undefined") {
    isElementInViewportRes.value = [
      { label: "视口内元素", value: document.createElement("div") },
      { label: "视口外元素", value: document.createElement("div") }
    ];
  }
});
</script>

<template>
  <naive-theme>
    <div
      v-for="(item, index) in isElementInViewportRes"
      :key="index"
      className="flex flex-col justify-center mt-2"
    >
      <div>
        <span className="font-bold">{{ item.label }}</span>
        <span className="ml-2">
          isElementInViewport({{ JSON.stringify(item.value) }})
        </span>
      </div>
      <n-gradient-text type="info">
        // {{ isElementInViewport(item.value) }}
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
