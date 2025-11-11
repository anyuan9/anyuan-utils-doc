<script setup lang="ts">
import { ref } from "vue";
import { regExp } from "@anyuan/utils";

// deviceType 测试数据
const deviceTypeRes = ref<
  Array<{ label: string; value: string; expected: boolean }>
>([]);
deviceTypeRes.value = [
  { label: "标准设备型号", value: "iPhone15Pro", expected: true },
  { label: "中文设备型号", value: "小米手机", expected: true },
  { label: "带小数点型号", value: "iPadPro12.9", expected: true },
  { label: "带下划线型号", value: "Surface_Pro_9", expected: true },
  { label: "带连接符型号", value: "ThinkPad-X1", expected: true },
  { label: "空字符串", value: "", expected: true },
  { label: "包含空格", value: "iPhone 15 Pro", expected: false },
  { label: "包含特殊字符@", value: "Device@Model", expected: false },
  { label: "包含特殊字符#", value: "Model#123", expected: false },
  { label: "包含特殊字符$", value: "Device$Pro", expected: false },
  { label: "包含括号型号", value: "GalaxyS23 (Ultra)", expected: false },
  {
    label: "过长字符串",
    value: "这是一个非常长的设备型号名称测试字符串",
    expected: true
  }
];
</script>

<template>
  <naive-theme>
    <div className="flex flex-col justify-center mt-2">
      <n-gradient-text
        v-for="(item, index) in deviceTypeRes"
        :key="index"
        type="info"
      >
        <div>
          <span className="font-bold">{{ item.label }}</span>
          <span className="ml-2">
            regExp.deviceType.test("{{ item.value }}")
          </span>
        </div>
        <n-gradient-text type="info">
          // 预期: {{ item.expected }}, 实际:
          {{ regExp.deviceType.test(item.value) }}, 结果:
          {{ regExp.deviceType.test(item.value) === item.expected ? "✓" : "✗" }}
        </n-gradient-text>
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
