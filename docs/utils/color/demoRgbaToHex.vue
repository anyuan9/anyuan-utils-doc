<script setup lang="ts">
import { ref } from "vue";
import { rgbaToHex } from "@anyuan/utils";

// rgbaToHex 测试数据
const rgbaToHexRes = ref<Array<{ label: string; value: any }>>([]);
rgbaToHexRes.value = [
  { label: "RGB数组", value: [0, 255, 0] },
  { label: "RGB字符串", value: "rgb(0, 0, 255)" },
  { label: "标准RGB对象", value: { r: 255, g: 0, b: 0 } },
  { label: "标准RGBA对象", value: { r: 255, g: 0, b: 0, a: 0.5 } },
  { label: "RGBA字符串", value: "rgba(0, 0, 255, 0.5)" }
  // { label: "无效RGB", value: { r: 300, g: -10, b: 0 } },
  // { label: "空对象", value: {} }
];
</script>

<template>
  <naive-theme>
    <div className="flex flex-col justify-center mt-2">
      <div>r,g,b参数 rgbaToHex(255, 0, 0)</div>
      <n-gradient-text type="info">
        // {{ rgbaToHex(255, 0, 0) }}
      </n-gradient-text>
    </div>
    <div className="flex flex-col justify-center mt-2">
      <div>r,g,b,a参数 rgbaToHex(255, 0, 0, 0.5)</div>
      <n-gradient-text type="info">
        // {{ rgbaToHex(255, 0, 0, 0.5) }}
      </n-gradient-text>
    </div>
    <div
      className="flex flex-col justify-center mt-2"
      v-for="(item, index) in rgbaToHexRes"
      :key="index"
    >
      <div>
        <span className="font-bold">{{ item.label }}</span>
        <span className="ml-2">
          rgbaToHex({{ JSON.stringify(item.value) }})
        </span>
      </div>
      <n-gradient-text type="info">
        // {{ rgbaToHex(item.value) }}
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
