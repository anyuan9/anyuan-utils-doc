<script setup lang="ts">
import { ref, onMounted, nextTick } from "vue";
import { useWatermark } from "@anyuan/utils";

const foreverRef = ref();
const { setWatermark } = useWatermark(foreverRef);

onMounted(() => {
  nextTick(() => {
    setWatermark("无法删除的水印", {
      forever: true,
      width: 225
    });
  });
});
</script>

<template>
  <naive-theme>
    <div
      ref="foreverRef"
      class="mt-4 mb-4 w-full h-[300px] border-solid border-1 border-[var(--vp-c-divider)] rounded-md"
    />
  </naive-theme>
</template>
