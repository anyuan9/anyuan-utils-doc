<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import { useResizeObserver } from "@anyuan/utils";

let divWidth = ref(0);
let divHeight = ref(0);
const divText = computed(() => {
  return `容器 width: ${divWidth.value}\n容器 height: ${divHeight.value}`;
});

onMounted(() => {
  // 一定要确保useResizeObserver的第一个参数target全局唯一，如下面的observer-content类名就是全局唯一
  useResizeObserver(
    ".observer-content",
    entries => {
      const [entry] = entries;
      const [{ inlineSize, blockSize }] = entry.borderBoxSize;
      divWidth.value = inlineSize;
      divHeight.value = Number(blockSize.toFixed(1)); // 四舍五入保留一位小数（跟浏览器的元素选择器显示精度保持一致）
    },
    { time: 0 }
  );
});
</script>

<template>
  <div
    class="observer-content dark:!border-[#0000] dark:bg-[rgba(255,255,255,0.1)]"
  >
    {{ divText }}
  </div>
</template>

<style scoped>
.observer-content {
  padding: 8px;
  border-radius: 4px;
  width: 100%;
  height: 30vh;
  border: 2px solid rgb(224, 224, 230);
}
</style>
