<script setup lang="ts">
import { ref } from "vue";
import { regExp } from "@anyuan/utils";

// altitude 测试数据
const altitudeRes = ref<
  Array<{ label: string; value: string; expected: boolean }>
>([]);
altitudeRes.value = [
  { label: "整数海拔", value: "1000", expected: true },
  { label: "小数海拔", value: "1000.5", expected: true },
  { label: "零海拔", value: "0", expected: true },
  { label: "负海拔", value: "-100", expected: true },
  { label: "多位小数", value: "1234.56789", expected: true },
  { label: "以点结尾", value: "1000.", expected: true },
  { label: "包含字母", value: "1000A", expected: false },
  { label: "包含特殊字符", value: "1000-500", expected: false }
];
</script>

<template>
  <naive-theme>
    <div className="flex flex-col justify-center mt-2">
      <n-gradient-text
        v-for="(item, index) in altitudeRes"
        :key="index"
        type="info"
      >
        <div>
          <span className="font-bold">{{ item.label }}</span>
          <span className="ml-2">
            regExp.altitude.test("{{ item.value }}")
          </span>
        </div>
        <n-gradient-text type="info">
          // 预期: {{ item.expected }}, 实际:
          {{ regExp.altitude.test(item.value) }}, 结果:
          {{ regExp.altitude.test(item.value) === item.expected ? "✓" : "✗" }}
        </n-gradient-text>
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
