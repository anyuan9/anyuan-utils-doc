<script setup lang="ts">
import { ref, onMounted, nextTick } from "vue";
import { useWatermark } from "@anyuan/utils";

const foreverRef = ref();
const { setWatermark } = useWatermark(foreverRef);

onMounted(() => {
  nextTick(() => {
    // 哪里需要换行在哪里加个 、就行，这种模式适用大多数场景，前、后端基本不需要额外处理
    setWatermark("可见水印、版权保护、身份验证", {
      width: 225
    });

    // 当然也可以在 setWatermark 的第二次参数中添加 wrap 属性来自定义换行标识符
    // setWatermark("可见水印|版权保护|身份验证", {
    //   width: 225,
    //   wrap: '|'
    // })
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
