<script setup lang="ts">
import { ref } from "vue";
import { randomGradient } from "@anyuan/utils";

// randomGradient 测试数据
const randomGradientRes = ref<Array<{ label: string; options?: any }>>([]);
randomGradientRes.value = [
  { label: "默认参数", options: {} },
  { label: "固定色调", options: { baseHue: 120, hueOffset: 60 } },
  { label: "随机色调", options: { randomizeHue: true } },
  { label: "随机饱和度", options: { randomizeSaturation: true } },
  { label: "随机亮度", options: { randomizeLightness: true } },
  { label: "随机角度", options: { randomizeAngle: true } },
  {
    label: "完全随机",
    options: {
      randomizeHue: true,
      randomizeSaturation: true,
      randomizeLightness: true,
      randomizeAngle: true
    }
  },
  {
    label: "自定义参数",
    options: { baseHue: 240, saturation: 80, lightness: 70, angle: 45 }
  }
];
</script>

<template>
  <naive-theme>
    <div
      v-for="(item, index) in randomGradientRes"
      :key="index"
      className="flex flex-col justify-center mt-2"
    >
      <div>
        <span className="font-bold">{{ item.label }}</span>
        <span className="ml-2">
          randomGradient({{ item.options ? JSON.stringify(item.options) : "" }})
        </span>
      </div>
      <n-gradient-text type="info">
        // {{ randomGradient(item.options) }}
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
