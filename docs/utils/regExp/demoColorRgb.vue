<script setup lang="ts">
import { ref } from "vue";
import { regExp } from "@anyuan/utils";

// colorRgb 测试数据
const colorRgbRes = ref<
  Array<{ label: string; value: string; expected: boolean }>
>([]);
colorRgbRes.value = [
  { label: "标准RGB", value: "rgb(255, 255, 255)", expected: true },
  { label: "无空格", value: "rgb(255,255,255)", expected: true },
  { label: "多位空格", value: "rgb(  255  ,  255,  255  )", expected: true },
  { label: "边界值0", value: "rgb(0, 0, 0)", expected: true },
  { label: "边界值255", value: "rgb(255, 255, 255)", expected: true },
  { label: "超出范围", value: "rgb(256, 255, 255)", expected: false },
  { label: "负数", value: "rgb(-1, 255, 255)", expected: false },
  { label: "缺少括号", value: "rgb255, 255, 255", expected: false }
];
</script>

<template>
  <naive-theme>
    <div className="flex flex-col justify-center mt-2">
      <n-gradient-text
        v-for="(item, index) in colorRgbRes"
        :key="index"
        type="info"
      >
        <div>
          <span className="font-bold">{{ item.label }}</span>
          <span className="ml-2">
            regExp.colorRgb.test("{{ item.value }}")
          </span>
        </div>
        <n-gradient-text type="info">
          // 预期: {{ item.expected }}, 实际:
          {{ regExp.colorRgb.test(item.value) }}, 结果:
          {{ regExp.colorRgb.test(item.value) === item.expected ? "✓" : "✗" }}
        </n-gradient-text>
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
