<script setup lang="ts">
import { ref } from "vue";
import { regExp } from "@anyuan/utils";

// certificate 测试数据
const certificateRes = ref<
  Array<{ label: string; value: string; expected: boolean }>
>([]);
certificateRes.value = [
  { label: "纯数字", value: "1234567890", expected: true },
  { label: "纯字母", value: "ABCDEF", expected: true },
  { label: "混合", value: "AB123CD456", expected: true },
  { label: "空字符串", value: "", expected: true },
  { label: "20位字符", value: "A".repeat(20), expected: true },
  { label: "21位字符", value: "A".repeat(21), expected: false },
  { label: "包含特殊字符", value: "AB@123", expected: false },
  { label: "包含中文", value: "AB中文123", expected: false }
];
</script>

<template>
  <naive-theme>
    <div className="flex flex-col justify-center mt-2">
      <n-gradient-text
        v-for="(item, index) in certificateRes"
        :key="index"
        type="info"
      >
        <div>
          <span className="font-bold">{{ item.label }}</span>
          <span className="ml-2">
            regExp.certificate.test("{{ item.value }}")
          </span>
        </div>
        <n-gradient-text type="info">
          // 预期: {{ item.expected }}, 实际:
          {{ regExp.certificate.test(item.value) }}, 结果:
          {{
            regExp.certificate.test(item.value) === item.expected ? "✓" : "✗"
          }}
        </n-gradient-text>
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
