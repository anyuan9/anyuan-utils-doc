<script setup lang="ts">
import { ref } from "vue";
import { regExp } from "@anyuan/utils";

// postalCode 测试数据
const postalCodeRes = ref<
  Array<{ label: string; value: string; expected: boolean }>
>([]);
postalCodeRes.value = [
  { label: "6位数字", value: "100000", expected: true },
  { label: "北京邮编", value: "100010", expected: true },
  { label: "上海邮编", value: "200000", expected: true },
  { label: "5位数字", value: "10000", expected: false },
  { label: "7位数字", value: "1000000", expected: false },
  { label: "包含字母", value: "10000A", expected: false }
];
</script>

<template>
  <naive-theme>
    <div className="flex flex-col justify-center mt-2">
      <n-gradient-text
        v-for="(item, index) in postalCodeRes"
        :key="index"
        type="info"
      >
        <div>
          <span className="font-bold">{{ item.label }}</span>
          <span className="ml-2">
            regExp.postalCode.test("{{ item.value }}")</span
          >
        </div>
        <n-gradient-text type="info">
          // 预期: {{ item.expected }}, 实际:
          {{ regExp.postalCode.test(item.value) }}, 结果:
          {{ regExp.postalCode.test(item.value) === item.expected ? "✓" : "✗" }}
        </n-gradient-text>
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
