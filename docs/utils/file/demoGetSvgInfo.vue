<script setup lang="ts">
import { ref } from "vue";
import { getSvgInfo } from "@anyuan/utils";

// getSvgInfo 测试数据
const getSvgInfoRes = ref<Array<{ label: string; value: string }>>([]);
getSvgInfoRes.value = [
  {
    label: "有效SVG",
    value: `<svg height="210" width="500"><polygon points="200,10 250,190 160,210" style="fill:lime;stroke:purple;stroke-width:1"/></svg>`
  },
  { label: "空字符串", value: "" },
  { label: "无效SVG", value: "<div>不是SVG</div>" }
];

// 执行测试的函数
const executeTest = async (fn: Function, ...args: any[]) => {
  try {
    return await fn(...args);
  } catch (error) {
    return `错误: ${error.message}`;
  }
};
</script>

<template>
  <naive-theme>
    <div
      v-for="(item, index) in getSvgInfoRes"
      :key="index"
      className="flex flex-col justify-center mt-2"
    >
      <div>
        <span className="font-bold">{{ item.label }}</span>
        <span className="ml-2">
          getSvgInfo("{{ item.value.substring(0, 50) }}...")
        </span>
      </div>
      <n-gradient-text type="info">
        // {{ JSON.stringify(executeTest(getSvgInfo, item.value)) }}
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
