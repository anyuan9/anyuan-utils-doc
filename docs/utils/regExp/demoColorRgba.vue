<script setup lang="ts">
import { ref } from "vue";
import { regExp } from "@anyuan/utils";

// colorRgba 测试数据
const colorRgbaRes = ref<
  Array<{ label: string; value: string; expected: boolean }>
>([]);
colorRgbaRes.value = [
  { label: "标准RGBA", value: "rgba(255, 255, 255, 1)", expected: true },
  { label: "小数透明度", value: "rgba(255, 255, 255, 0.5)", expected: true },
  { label: "0透明度", value: "rgba(255, 255, 255, 0)", expected: true },
  { label: "1透明度", value: "rgba(255, 255, 255, 1)", expected: true },
  { label: "超出范围", value: "rgba(256, 255, 255, 1)", expected: false },
  { label: "超出透明度", value: "rgba(255, 255, 255, 1.5)", expected: false },
  { label: "负数透明度", value: "rgba(255, 255, 255, -0.5)", expected: false },
  { label: "缺少alpha", value: "rgba(255, 255, 255)", expected: false }
];
</script>

<template>
  <naive-theme>
    <div className="flex flex-col justify-center mt-2">
      <n-gradient-text
        v-for="(item, index) in colorRgbaRes"
        :key="index"
        type="info"
      >
        <div>
          <span className="font-bold">{{ item.label }}</span>
          <span className="ml-2">
            regExp.colorRgba.test("{{ item.value }}")
          </span>
        </div>
        <n-gradient-text type="info">
          // 预期: {{ item.expected }}, 实际:
          {{ regExp.colorRgba.test(item.value) }}, 结果:
          {{ regExp.colorRgba.test(item.value) === item.expected ? "✓" : "✗" }}
        </n-gradient-text>
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
