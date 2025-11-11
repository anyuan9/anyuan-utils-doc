<script setup lang="ts">
import { ref } from "vue";
import { regExp } from "@anyuan/utils";

// email 测试数据
const emailRes = ref<
  Array<{ label: string; value: string; expected: boolean }>
>([]);
emailRes.value = [
  { label: "标准邮箱", value: "test@example.com", expected: true },
  { label: "带点用户名", value: "first.last@example.com", expected: true },
  { label: "带加号", value: "test+tag@example.com", expected: true },
  { label: "数字域名", value: "test@123.com", expected: true },
  { label: "多级域名", value: "test@mail.example.com", expected: true },
  { label: "缺少@", value: "testexample.com", expected: false },
  { label: "缺少域名", value: "test@", expected: false },
  { label: "特殊字符", value: "test@exa mple.com", expected: false },
  { label: "连续点", value: "test@example..com", expected: false }
];
</script>

<template>
  <naive-theme>
    <div
      v-for="(item, index) in emailRes"
      :key="index"
      className="flex flex-col justify-center mt-2"
    >
      <div>
        <span className="font-bold">{{ item.label }}</span>
        <span className="ml-2"> regExp.email.test("{{ item.value }}") </span>
      </div>
      <n-gradient-text type="info">
        // 预期: {{ item.expected }}, 实际: {{ regExp.email.test(item.value) }},
        结果:
        {{ regExp.email.test(item.value) === item.expected ? "✓" : "✗" }}
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
