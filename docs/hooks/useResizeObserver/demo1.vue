<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import { useResizeObserver } from "@anyuan/utils";

let isObserverOpen = ref(true);
const textareaRef = ref();
let textareaWidth = ref(0);
let textareaHeight = ref(0);

const textareaText = computed(() => {
  return `容器 width: ${textareaWidth.value}\n容器 height: ${textareaHeight.value}`;
});

function onClick() {
  isObserverOpen.value = !isObserverOpen.value;
  if (resizeObserver) {
    isObserverOpen.value ? resizeObserver.restart() : resizeObserver.stop();
  }
}

let resizeObserver: ReturnType<typeof useResizeObserver> | null = null;

onMounted(() => {
  resizeObserver = useResizeObserver(
    textareaRef,
    entries => {
      const [entry] = entries;
      // 安全地获取 borderBoxSize
      if (entry.borderBoxSize && entry.borderBoxSize.length > 0) {
        const [{ inlineSize, blockSize }] = entry.borderBoxSize;
        textareaWidth.value = inlineSize;
        textareaHeight.value = blockSize;
      } else {
        // 兼容性处理
        textareaWidth.value = entry.contentRect.width;
        textareaHeight.value = entry.contentRect.height;
      }
    },
    { time: 0 }
  );
});
</script>

<template>
  <naive-theme>
    <n-space class="mb-2">
      <n-button @click="onClick">{{
        isObserverOpen ? "停止监听" : "启用监听"
      }}</n-button>
    </n-space>
    <textarea
      ref="textareaRef"
      class="textarea dark:!border-[#0000] dark:bg-[rgba(255,255,255,0.1)]"
      v-text="textareaText"
    />
  </naive-theme>
</template>

<style scoped>
.textarea {
  resize: both;
  padding: 8px;
  min-height: 200px;
  max-height: 400px;
  min-width: 200px;
  max-width: 600px;
  border-radius: 4px;
  border: 2px solid rgb(224, 224, 230);
}
</style>
