<script setup lang="ts">
import { ref } from "vue";
import { regExp } from "@anyuan/utils";

// enterpriseTaxNumber 测试数据
const enterpriseTaxNumberRes = ref<
  Array<{ label: string; value: string; expected: boolean }>
>([]);
enterpriseTaxNumberRes.value = [
  { label: "15位税号", value: "ABCDE1234567890", expected: true },
  { label: "18位税号", value: "ABCDEFGH1234567890", expected: true },
  { label: "20位税号", value: "ABCDEFGHIJ1234567890", expected: true },
  { label: "纯数字15位", value: "123456789012345", expected: true },
  { label: "纯字母15位", value: "ABCDEFGHIJKLMNO", expected: true },
  { label: "14位字符", value: "ABCDE123456789", expected: false },
  { label: "21位字符", value: "ABCDEFGHIJK1234567890", expected: false },
  { label: "包含小写字母", value: "abcde1234567890", expected: false },
  { label: "包含特殊字符", value: "ABCDE@123456789", expected: false }
];
</script>

<template>
  <naive-theme>
    <div className="flex flex-col justify-center mt-2">
      <n-gradient-text
        v-for="(item, index) in enterpriseTaxNumberRes"
        :key="index"
        type="info"
      >
        <div>
          <span className="font-bold">{{ item.label }}</span>
          <span className="ml-2">
            regExp.enterpriseTaxNumber.test("{{ item.value }}")
          </span>
        </div>
        <n-gradient-text type="info">
          // 预期: {{ item.expected }}, 实际:
          {{ regExp.enterpriseTaxNumber.test(item.value) }}, 结果:
          {{
            regExp.enterpriseTaxNumber.test(item.value) === item.expected
              ? "✓"
              : "✗"
          }}
        </n-gradient-text>
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
