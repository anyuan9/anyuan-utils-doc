<script setup lang="ts">
import { ref } from "vue";
import { regExp } from "@anyuan/utils";

// latitude 测试数据
const latitudeRes = ref<
  Array<{ label: string; value: string; expected: boolean }>
>([]);
latitudeRes.value = [
  { label: "正数纬度", value: "30.123456789012345", expected: true },
  { label: "负数纬度", value: "-30.123456789012345", expected: true },
  { label: "整数纬度", value: "30", expected: true },
  { label: "北纬90度", value: "90.0", expected: true },
  { label: "南纬90度", value: "-90.0", expected: true },
  { label: "超过90度", value: "91.0", expected: false },
  { label: "超过-90度", value: "-91.0", expected: false },
  { label: "16位小数", value: "30.1234567890123456", expected: false },
  { label: "包含字母", value: "30.12A", expected: false }
];
</script>

<template>
  <naive-theme>
    <div className="flex flex-col justify-center mt-2">
      <n-gradient-text
        v-for="(item, index) in latitudeRes"
        :key="index"
        type="info"
      >
        <div>
          <span className="font-bold">{{ item.label }}</span>
          <span className="ml-2">
            regExp.latitude.test("{{ item.value }}")
          </span>
        </div>
        <n-gradient-text type="info">
          // 预期: {{ item.expected }}, 实际:
          {{ regExp.latitude.test(item.value) }}, 结果:
          {{ regExp.latitude.test(item.value) === item.expected ? "✓" : "✗" }}
        </n-gradient-text>
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
