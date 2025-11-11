<script setup lang="ts">
import { ref } from "vue";
import { regExp } from "@anyuan/utils";

// passport 测试数据
const passportRes = ref<
  Array<{ label: string; value: string; expected: boolean }>
>([]);
passportRes.value = [
  { label: "7位字符", value: "A123456", expected: true },
  { label: "10位字符", value: "AB12345678", expected: true },
  { label: "8位字符", value: "A1234567", expected: true },
  { label: "6位字符", value: "A12345", expected: false },
  { label: "11位字符", value: "A1234567890", expected: false },
  { label: "包含中文", value: "A123456中", expected: false },
  { label: "包含特殊字符", value: "A12345@", expected: false }
];
</script>

<template>
  <naive-theme>
    <div className="flex flex-col justify-center mt-2">
      <n-gradient-text
        v-for="(item, index) in passportRes"
        :key="index"
        type="info"
      >
        <div>
          <span className="font-bold">{{ item.label }}</span>
          <span className="ml-2">
            regExp.passport.test("{{ item.value }}")</span
          >
        </div>
        <n-gradient-text type="info">
          // 预期: {{ item.expected }}, 实际:
          {{ regExp.passport.test(item.value) }}, 结果:
          {{ regExp.passport.test(item.value) === item.expected ? "✓" : "✗" }}
        </n-gradient-text>
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
