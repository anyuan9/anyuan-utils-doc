<script setup lang="ts">
import { ref } from "vue";
import { hexToRgba } from "@anyuan/utils";

// hexToRgba 测试数据
const hexToRgbaRes = ref<Array<{ label: string; value: any }>>([]);
hexToRgbaRes.value = [
  { label: "标准8位HEX", value: "#ff000080" },
  { label: "标准6位HEX", value: "#ff0000" },
  { label: "标准4位HEX", value: "#f008" },
  { label: "标准3位HEX", value: "#f00" }
  // { label: "不带#号", value: "00ff00" }
  // { label: "无效HEX", value: "#zzzzzz" },
  // { label: "空字符串", value: "" },
  // { label: "null", value: null }
];
</script>

<template>
  <naive-theme>
    <div
      v-for="(item, index) in hexToRgbaRes"
      :key="index"
      className="flex flex-col justify-center mt-2"
    >
      <div>
        <span className="font-bold">{{ item.label }}</span>
        <span className="ml-2"> hexToRgba("{{ item.value }}")</span>
      </div>
      <n-gradient-text type="info">
        // {{ JSON.stringify(hexToRgba(item.value)) }}
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
