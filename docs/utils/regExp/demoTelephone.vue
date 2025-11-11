<script setup lang="ts">
import { ref } from "vue";
import { regExp } from "@anyuan/utils";

// telephone 测试数据
const telephoneRes = ref<
  Array<{ label: string; value: string; expected: boolean }>
>([]);
telephoneRes.value = [
  { label: "3位区号7位号码", value: "010-1234567", expected: true },
  { label: "3位区号8位号码", value: "010-12345678", expected: true },
  { label: "4位区号7位号码", value: "0531-1234567", expected: true },
  { label: "4位区号8位号码", value: "0531-12345678", expected: true },
  { label: "不带横线", value: "0101234567", expected: true },
  { label: "2位区号", value: "02-12345678", expected: false },
  { label: "5位区号", value: "01234-1234567", expected: false },
  { label: "包含字母", value: "010-1234abc", expected: false }
];
</script>

<template>
  <naive-theme>
    <div className="flex flex-col justify-center mt-2">
      <n-gradient-text
        v-for="(item, index) in telephoneRes"
        :key="index"
        type="info"
      >
        <div>
          <span className="font-bold">{{ item.label }}</span>
          <span className="ml-2">
            regExp.telephone.test("{{ item.value }}")</span
          >
        </div>
        <n-gradient-text type="info">
          // 预期: {{ item.expected }}, 实际:
          {{ regExp.telephone.test(item.value) }}, 结果:
          {{ regExp.telephone.test(item.value) === item.expected ? "✓" : "✗" }}
        </n-gradient-text>
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
