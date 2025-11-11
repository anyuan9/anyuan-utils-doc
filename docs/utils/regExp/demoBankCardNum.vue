<script setup lang="ts">
import { ref } from "vue";
import { regExp } from "@anyuan/utils";

// bankCardNum 测试数据
const bankCardNumRes = ref<
  Array<{ label: string; value: string; expected: boolean }>
>([]);
bankCardNumRes.value = [
  { label: "15位数字", value: "123456789012345", expected: true },
  { label: "16位数字", value: "1234567890123456", expected: true },
  { label: "19位数字", value: "1234567890123456789", expected: true },
  { label: "12位数字", value: "123456789012", expected: false },
  { label: "20位数字", value: "12345678901234567890", expected: false },
  { label: "包含字母", value: "1234567890123A", expected: false },
  { label: "包含特殊字符", value: "1234-5678-9012-3456", expected: false },
  { label: "空字符串", value: "", expected: false }
];
</script>

<template>
  <naive-theme>
    <div className="flex flex-col justify-center mt-2">
      <n-gradient-text
        v-for="(item, index) in bankCardNumRes"
        :key="index"
        type="info"
      >
        <div>
          <span className="font-bold">{{ item.label }}</span>
          <span className="ml-2">
            regExp.bankCardNum.test("{{ item.value }}")
          </span>
        </div>
        <n-gradient-text type="info">
          // 预期: {{ item.expected }}, 实际:
          {{ regExp.bankCardNum.test(item.value) }}, 结果:
          {{
            regExp.bankCardNum.test(item.value) === item.expected ? "✓" : "✗"
          }}
        </n-gradient-text>
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
