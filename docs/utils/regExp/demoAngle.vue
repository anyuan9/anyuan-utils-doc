<script setup lang="ts">
import { ref } from "vue";
import { regExp } from "@anyuan/utils";

// angle 测试数据
const angleRes = ref<
  Array<{ label: string; value: string; expected: boolean }>
>([]);
angleRes.value = [
  { label: "正角度", value: "45", expected: true },
  { label: "负角度", value: "-45", expected: true },
  { label: "零度", value: "0", expected: true },
  { label: "带度符号", value: "45°", expected: true },
  { label: "小数", value: "180.5°", expected: true },
  { label: "弧度", value: "3.14rad", expected: true },
  { label: "百分度", value: "100grad", expected: true },
  { label: "圈数", value: "0.25turn", expected: true },
  { label: "非数字", value: "abc", expected: false },
  { label: "有空格", value: "45 deg", expected: false },
  { label: "符号在前", value: "°45", expected: false }
];
</script>

<template>
  <naive-theme>
    <div className="flex flex-col justify-center mt-2">
      <n-gradient-text
        v-for="(item, index) in angleRes"
        :key="index"
        type="info"
      >
        <div>
          <span className="font-bold">{{ item.label }}</span>
          <span className="ml-2"> regExp.angle.test("{{ item.value }}")</span>
        </div>
        <n-gradient-text type="info">
          // 预期: {{ item.expected }}, 实际:
          {{ regExp.angle.test(item.value) }}, 结果:
          {{ regExp.angle.test(item.value) === item.expected ? "✓" : "✗" }}
        </n-gradient-text>
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
