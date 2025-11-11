<script setup lang="ts">
import { ref } from "vue";
import { regExp } from "@anyuan/utils";

// passwordSimple 测试数据
const passwordSimpleRes = ref<
  Array<{ label: string; value: string; expected: boolean }>
>([]);
passwordSimpleRes.value = [
  { label: "4位数字", value: "1234", expected: true },
  { label: "8位数字", value: "12345678", expected: true },
  { label: "6位数字", value: "123456", expected: true },
  { label: "3位数字", value: "123", expected: false },
  { label: "9位数字", value: "123456789", expected: false },
  { label: "包含字母", value: "123a", expected: false },
  { label: "包含特殊字符", value: "123!", expected: false },
  { label: "空密码", value: "", expected: false }
];
</script>

<template>
  <naive-theme>
    <div className="flex flex-col justify-center mt-2">
      <n-gradient-text
        v-for="(item, index) in passwordSimpleRes"
        :key="index"
        type="info"
      >
        <div>
          <span className="font-bold">{{ item.label }}</span>
          <span className="ml-2">
            regExp.passwordSimple.test("{{ item.value }}")</span
          >
        </div>
        <n-gradient-text type="info">
          // 预期: {{ item.expected }}, 实际:
          {{ regExp.passwordSimple.test(item.value) }}, 结果:
          {{
            regExp.passwordSimple.test(item.value) === item.expected ? "✓" : "✗"
          }}
        </n-gradient-text>
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
