<script setup lang="ts">
import { ref } from "vue";
import { regExp } from "@anyuan/utils";

// passwordStrict 测试数据
const passwordStrictRes = ref<
  Array<{ label: string; value: string; expected: boolean }>
>([]);
passwordStrictRes.value = [
  { label: "四种字符组合", value: "Password123@", expected: true },
  { label: "更多字符组合", value: "MyPassword123!@#", expected: true },
  { label: "缺少大写字母", value: "password123@", expected: false },
  { label: "缺少小写字母", value: "PASSWORD123@", expected: false },
  { label: "缺少数字", value: "Password@@@", expected: false },
  { label: "缺少特殊字符", value: "Password123", expected: false },
  { label: "过短", value: "Pass1@", expected: false }
];
</script>

<template>
  <naive-theme>
    <div className="flex flex-col justify-center mt-2">
      <n-gradient-text
        v-for="(item, index) in passwordStrictRes"
        :key="index"
        type="info"
      >
        <div>
          <span className="font-bold">{{ item.label }}</span>
          <span className="ml-2">
            regExp.passwordStrict.test("{{ item.value }}")</span
          >
        </div>
        <n-gradient-text type="info">
          // 预期: {{ item.expected }}, 实际:
          {{ regExp.passwordStrict.test(item.value) }}, 结果:
          {{
            regExp.passwordStrict.test(item.value) === item.expected ? "✓" : "✗"
          }}
        </n-gradient-text>
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
