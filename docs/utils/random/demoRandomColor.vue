<script setup lang="ts">
import { ref } from "vue";
import { randomColor } from "@anyuan/utils";

// randomColor 测试数据
const randomColorRes = ref<
  Array<{ label: string; mode?: "rgb" | "rgba" | "hsl" | "hex" }>
>([]);
randomColorRes.value = [
  { label: "默认格式(hex)", mode: "hex" },
  { label: "RGB格式", mode: "rgb" },
  { label: "RGBA格式", mode: "rgba" },
  { label: "HSL格式", mode: "hsl" }
];
</script>

<template>
  <naive-theme>
    <div
      v-for="(item, index) in randomColorRes"
      :key="index"
      className="flex flex-col justify-center mt-2"
    >
      <div>
        <span className="font-bold">{{ item.label }}</span>
        <span className="ml-2"> randomColor("{{ item.mode || "hex" }}") </span>
      </div>
      <n-gradient-text type="info">
        // {{ randomColor(item.mode) }}
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
