<script setup lang="ts">
import { ref } from "vue";
import { regExp } from "@anyuan/utils";

// password 测试数据
const passwordRes = ref<
  Array<{ label: string; value: string; expected: boolean }>
>([]);
passwordRes.value = [
  { label: "字母+数字", value: "Password123", expected: true },
  { label: "字母+特殊字符", value: "Password@", expected: true },
  { label: "数字+特殊字符", value: "1234567@", expected: true },
  { label: "三种字符组合", value: "Password123@", expected: true },
  { label: "四种字符组合", value: "Password123@", expected: true },
  { label: "纯字母", value: "password", expected: false },
  { label: "纯数字", value: "12345678", expected: false },
  { label: "纯特殊字符", value: "@@@@@@@@", expected: false },
  { label: "过短", value: "Pass1@", expected: false },
  { label: "过长", value: "Password123456789@", expected: false },
  { label: "包含空格", value: "Pass word123", expected: false }
];
</script>

<template>
  <naive-theme>
    <div className="flex flex-col justify-center mt-2">
      <n-gradient-text
        v-for="(item, index) in passwordRes"
        :key="index"
        type="info"
      >
        <div>
          <span className="font-bold">{{ item.label }}</span>
          <span className="ml-2">
            regExp.password.test("{{ item.value }}")</span
          >
        </div>
        <n-gradient-text type="info">
          // 预期: {{ item.expected }}, 实际:
          {{ regExp.password.test(item.value) }}, 结果:
          {{ regExp.password.test(item.value) === item.expected ? "✓" : "✗" }}
        </n-gradient-text>
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
