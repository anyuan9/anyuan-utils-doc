<script setup lang="ts">
import { ref } from "vue";
import { regExp } from "@anyuan/utils";

// imei 测试数据
const imeiRes = ref<Array<{ label: string; value: string; expected: boolean }>>(
  []
);
imeiRes.value = [
  { label: "15位IMEI", value: "123456789012345", expected: true },
  { label: "14位IMEI", value: "12345678901234", expected: false },
  { label: "16位IMEI", value: "1234567890123456", expected: false },
  { label: "17位IMEI", value: "12345678901234567", expected: true },
  { label: "纯数字IMEI", value: "123456789012345", expected: true },
  { label: "包含字母", value: "12345678901234A", expected: false },
  { label: "包含特殊字符", value: "123456-78901234", expected: false },
  { label: "空字符串", value: "", expected: false },
  { label: "13位数字", value: "1234567890123", expected: false },
  { label: "18位数字", value: "123456789012345678", expected: false }
];
</script>

<template>
  <naive-theme>
    <div className="flex flex-col justify-center mt-2">
      <n-gradient-text
        v-for="(item, index) in imeiRes"
        :key="index"
        type="info"
      >
        <div>
          <span className="font-bold">{{ item.label }}</span>
          <span className="ml-2"> regExp.imei.test("{{ item.value }}") </span>
        </div>
        <n-gradient-text type="info">
          // 预期: {{ item.expected }}, 实际:
          {{ regExp.imei.test(item.value) }}, 结果:
          {{ regExp.imei.test(item.value) === item.expected ? "✓" : "✗" }}
        </n-gradient-text>
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
