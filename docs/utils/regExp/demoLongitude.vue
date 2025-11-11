<script setup lang="ts">
import { ref } from "vue";
import { regExp } from "@anyuan/utils";

// longitude 测试数据
const longitudeRes = ref<
  Array<{ label: string; value: string; expected: boolean }>
>([]);
longitudeRes.value = [
  { label: "正数经度", value: "120.123456789012345", expected: true },
  { label: "负数经度", value: "-120.123456789012345", expected: true },
  { label: "整数经度", value: "120", expected: true },
  { label: "东经180度", value: "180.0", expected: true },
  { label: "西经180度", value: "-180.0", expected: true },
  { label: "超过180度", value: "181.0", expected: false },
  { label: "超过-180度", value: "-181.0", expected: false },
  { label: "16位小数", value: "120.1234567890123456", expected: false },
  { label: "包含字母", value: "120.12A", expected: false }
];
</script>

<template>
  <naive-theme>
    <div className="flex flex-col justify-center mt-2">
      <n-gradient-text
        v-for="(item, index) in longitudeRes"
        :key="index"
        type="info"
      >
        <div>
          <span className="font-bold">{{ item.label }}</span>
          <span className="ml-2">
            regExp.longitude.test("{{ item.value }}")
          </span>
        </div>
        <n-gradient-text type="info">
          // 预期: {{ item.expected }}, 实际:
          {{ regExp.longitude.test(item.value) }}, 结果:
          {{ regExp.longitude.test(item.value) === item.expected ? "✓" : "✗" }}
        </n-gradient-text>
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
