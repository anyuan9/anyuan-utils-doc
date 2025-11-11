<script setup lang="ts">
import { ref } from "vue";
import { getDeviceType } from "@anyuan/utils";

// getDeviceType 测试数据
const getDeviceTypeRes = ref<Array<{ label: string; userAgent?: string }>>([]);
getDeviceTypeRes.value = [
  { label: "当前设备类型" },
  {
    label: "模拟iOS设备",
    userAgent:
      "Mozilla/5.0 (iPhone; CPU iPhone OS 14_0 like Mac OS X) AppleWebKit/605.1.15"
  },
  {
    label: "模拟Android设备",
    userAgent: "Mozilla/5.0 (Linux; Android 10; SM-G981B) AppleWebKit/537.36"
  },
  {
    label: "模拟PC设备",
    userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
  }
];

// 模拟设备类型检测
const simulateGetDeviceType = (userAgent?: string) => {
  if (!userAgent) return getDeviceType();

  const originalUserAgent = navigator.userAgent;
  Object.defineProperty(navigator, "userAgent", {
    value: userAgent,
    configurable: true
  });

  const result = getDeviceType();

  // 恢复原始userAgent
  Object.defineProperty(navigator, "userAgent", {
    value: originalUserAgent,
    configurable: true
  });

  return result;
};
</script>

<template>
  <naive-theme>
    <div
      v-for="(item, index) in getDeviceTypeRes"
      :key="index"
      className="flex flex-col justify-center mt-2"
    >
      <div>
        <span className="font-bold">{{ item.label }}</span>
        <span className="ml-2">
          getDeviceType({{ item.userAgent ? `"${item.userAgent}"` : "" }})
        </span>
      </div>
      <n-gradient-text type="info">
        // {{ simulateGetDeviceType(item.userAgent) }}
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
