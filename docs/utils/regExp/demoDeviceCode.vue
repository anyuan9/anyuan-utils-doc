<script setup lang="ts">
import { ref } from "vue";
import { regExp } from "@anyuan/utils";

// deviceCode 测试数据
const deviceCodeRes = ref<
  Array<{ label: string; value: string; expected: boolean }>
>([]);
deviceCodeRes.value = [
  { label: "标准设备编码", value: "DEV001", expected: true },
  { label: "中文设备编码", value: "设备编码001", expected: true },
  { label: "带#号编码", value: "DEV#001", expected: true },
  { label: "带括号编码", value: "DEV(001)", expected: true },
  { label: "带空格编码", value: "DEV 001", expected: true },
  { label: "带小数点编码", value: "DEV.001", expected: true },
  { label: "带下划线编码", value: "DEV_001", expected: true },
  { label: "带连接符编码", value: "DEV-001", expected: true },
  { label: "空字符串", value: "", expected: true },
  { label: "包含特殊字符@", value: "DEV@001", expected: false },
  { label: "包含特殊字符$", value: "DEV$001", expected: false },
  { label: "包含特殊字符%", value: "DEV%001", expected: false }
];
</script>

<template>
  <naive-theme>
    <div className="flex flex-col justify-center mt-2">
      <n-gradient-text
        v-for="(item, index) in deviceCodeRes"
        :key="index"
        type="info"
      >
        <div>
          <span className="font-bold">{{ item.label }}</span>
          <span className="ml-2">
            regExp.deviceCode.test("{{ item.value }}")
          </span>
        </div>
        <n-gradient-text type="info">
          // 预期: {{ item.expected }}, 实际:
          {{ regExp.deviceCode.test(item.value) }}, 结果:
          {{ regExp.deviceCode.test(item.value) === item.expected ? "✓" : "✗" }}
        </n-gradient-text>
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
