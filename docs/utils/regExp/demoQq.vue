<script setup lang="ts">
import { ref } from "vue";
import { regExp } from "@anyuan/utils";

// qq 测试数据
const qqRes = ref<Array<{ label: string; value: string; expected: boolean }>>(
  []
);
qqRes.value = [
  { label: "5位QQ", value: "12345", expected: true },
  { label: "10位QQ", value: "1234567890", expected: true },
  { label: "11位QQ", value: "12345678901", expected: true },
  { label: "4位QQ", value: "1234", expected: false },
  { label: "包含字母", value: "12345a", expected: false }
];
</script>

<template>
  <naive-theme>
    <div className="flex flex-col justify-center mt-2">
      <n-gradient-text v-for="(item, index) in qqRes" :key="index" type="info">
        <div>
          <span className="font-bold">{{ item.label }}</span>
          <span className="ml-2"> regExp.qq.test("{{ item.value }}")</span>
        </div>
        <n-gradient-text type="info">
          // 预期: {{ item.expected }}, 实际: {{ regExp.qq.test(item.value) }},
          结果:
          {{ regExp.qq.test(item.value) === item.expected ? "✓" : "✗" }}
        </n-gradient-text>
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
