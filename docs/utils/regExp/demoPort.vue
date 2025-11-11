<script setup lang="ts">
import { ref } from "vue";
import { regExp } from "@anyuan/utils";

// port 测试数据
const portRes = ref<Array<{ label: string; value: string; expected: boolean }>>(
  []
);
portRes.value = [
  { label: "最小端口", value: "1", expected: true },
  { label: "常用端口", value: "80", expected: true },
  { label: "中等端口", value: "3000", expected: true },
  { label: "最大端口", value: "65535", expected: true },
  { label: "边界端口", value: "65534", expected: true },
  { label: "零端口", value: "0", expected: false },
  { label: "超过最大", value: "65536", expected: false },
  { label: "超大端口", value: "100000", expected: false },
  { label: "包含字母", value: "80a", expected: false },
  { label: "负数端口", value: "-1", expected: false },
  { label: "小数端口", value: "80.5", expected: false }
];
</script>

<template>
  <naive-theme>
    <div className="flex flex-col justify-center mt-2">
      <n-gradient-text
        v-for="(item, index) in portRes"
        :key="index"
        type="info"
      >
        <div>
          <span className="font-bold">{{ item.label }}</span>
          <span className="ml-2"> regExp.port.test("{{ item.value }}")</span>
        </div>
        <n-gradient-text type="info">
          // 预期: {{ item.expected }}, 实际:
          {{ regExp.port.test(item.value) }}, 结果:
          {{ regExp.port.test(item.value) === item.expected ? "✓" : "✗" }}
        </n-gradient-text>
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
