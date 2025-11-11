<script setup lang="ts">
import { ref } from "vue";
import { regExp } from "@anyuan/utils";

// cardNum 测试数据
const cardNumRes = ref<
  Array<{ label: string; value: string; expected: boolean }>
>([]);
cardNumRes.value = [
  { label: "8位数字字母组合", value: "12345678", expected: true },
  { label: "18位数字字母组合", value: "ABCDEFGH1234567890", expected: true },
  { label: "混合大小写字母数字", value: "AbCd1234567890EFGH", expected: false },
  { label: "7位字符", value: "1234567", expected: false },
  { label: "19位字符", value: "ABCDEFGH12345678901", expected: false },
  { label: "包含特殊字符", value: "ABC@123456", expected: false },
  { label: "包含中文", value: "ABC中文123", expected: false },
  { label: "包含空格", value: "ABC 123456", expected: false }
];
</script>

<template>
  <naive-theme>
    <div className="flex flex-col justify-center mt-2">
      <n-gradient-text
        v-for="(item, index) in cardNumRes"
        :key="index"
        type="info"
      >
        <div>
          <span className="font-bold">{{ item.label }}</span>
          <span className="ml-2">
            regExp.cardNum.test("{{ item.value }}")
          </span>
        </div>
        <n-gradient-text type="info">
          // 预期: {{ item.expected }}, 实际:
          {{ regExp.cardNum.test(item.value) }}, 结果:
          {{ regExp.cardNum.test(item.value) === item.expected ? "✓" : "✗" }}
        </n-gradient-text>
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
