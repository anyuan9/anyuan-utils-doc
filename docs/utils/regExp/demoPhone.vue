<script setup lang="ts">
import { ref } from "vue";
import { regExp } from "@anyuan/utils";

// phone 测试数据
const phoneRes = ref<
  Array<{ label: string; value: string; expected: boolean }>
>([]);
phoneRes.value = [
  { label: "带区号座机", value: "010-12345678", expected: true },
  { label: "不带区号座机", value: "12345678", expected: true },
  { label: "带分机号", value: "010-12345678-123", expected: true },
  { label: "手机号", value: "13800138000", expected: true },
  { label: "格式错误", value: "010-1234", expected: false },
  { label: "包含字母", value: "010-1234abcd", expected: false }
];
</script>

<template>
  <naive-theme>
    <div
      v-for="(item, index) in phoneRes"
      :key="index"
      className="flex flex-col justify-center mt-2"
    >
      <div>
        <span className="font-bold">{{ item.label }}</span>
        <span className="ml-2"> regExp.phone.test("{{ item.value }}")</span>
      </div>
      <n-gradient-text type="info">
        // 预期: {{ item.expected }}, 实际: {{ regExp.phone.test(item.value) }},
        结果:
        {{ regExp.phone.test(item.value) === item.expected ? "✓" : "✗" }}
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
