<script setup lang="ts">
import { ref } from "vue";
import { regExp } from "@anyuan/utils";

// uuid 测试数据
const uuidRes = ref<Array<{ label: string; value: string; expected: boolean }>>(
  []
);
uuidRes.value = [
  {
    label: "标准UUID",
    value: "12345678-1234-1234-1234-123456789abc",
    expected: true
  },
  {
    label: "大写UUID",
    value: "12345678-1234-1234-1234-123456789ABC",
    expected: true
  },
  {
    label: "混合大小写",
    value: "12345678-1234-1234-1234-123456789AbC",
    expected: true
  },
  {
    label: "缺少连字符",
    value: "12345678123412341234123456789abc",
    expected: false
  },
  {
    label: "连字符位置错误",
    value: "1234-5678-1234-1234-1234-56789abc",
    expected: false
  },
  {
    label: "字符数不足",
    value: "1234567-1234-1234-1234-123456789ab",
    expected: false
  },
  {
    label: "包含非法字符",
    value: "12345678-1234-1234-1234-123456789ab!",
    expected: false
  },
  { label: "空字符串", value: "", expected: false }
];
</script>

<template>
  <naive-theme>
    <div className="flex flex-col justify-center mt-2">
      <n-gradient-text
        v-for="(item, index) in uuidRes"
        :key="index"
        type="info"
      >
        <div>
          <span className="font-bold">{{ item.label }}</span>
          <span className="ml-2"> regExp.uuid.test("{{ item.value }}")</span>
        </div>
        <n-gradient-text type="info">
          // 预期: {{ item.expected }}, 实际:
          {{ regExp.uuid.test(item.value) }}, 结果:
          {{ regExp.uuid.test(item.value) === item.expected ? "✓" : "✗" }}
        </n-gradient-text>
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
