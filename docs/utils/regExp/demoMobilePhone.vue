<script setup lang="ts">
import { ref } from "vue";
import { regExp } from "@anyuan/utils";

// mobilePhone 测试数据
const mobilePhoneRes = ref<
  Array<{ label: string; value: string; expected: boolean }>
>([]);
mobilePhoneRes.value = [
  { label: "标准手机号", value: "13800138000", expected: true },
  { label: "13开头", value: "13123456789", expected: true },
  { label: "15开头", value: "15123456789", expected: true },
  { label: "18开头", value: "18123456789", expected: true },
  { label: "19开头", value: "19123456789", expected: true },
  { label: "10位数字", value: "1380013800", expected: false },
  { label: "12位数字", value: "138001380000", expected: false },
  { label: "包含字母", value: "1380013800a", expected: false }
];
</script>

<template>
  <naive-theme>
    <div
      v-for="(item, index) in mobilePhoneRes"
      :key="index"
      className="flex flex-col justify-center mt-2"
    >
      <div>
        <span className="font-bold">{{ item.label }}</span>
        <span className="ml-2">
          regExp.mobilePhone.test("{{ item.value }}")
        </span>
      </div>
      <n-gradient-text type="info">
        // 预期: {{ item.expected }}, 实际:
        {{ regExp.mobilePhone.test(item.value) }}, 结果:
        {{ regExp.mobilePhone.test(item.value) === item.expected ? "✓" : "✗" }}
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
