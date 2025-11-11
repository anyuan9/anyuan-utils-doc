<script setup lang="ts">
import { ref } from "vue";
import { regExp } from "@anyuan/utils";

// deviceAccount 测试数据
const deviceAccountRes = ref<
  Array<{ label: string; value: string; expected: boolean }>
>([]);
deviceAccountRes.value = [
  { label: "标准账号", value: "admin123", expected: true },
  { label: "带特殊字符账号", value: "admin@123", expected: true },
  { label: "带多种特殊字符", value: "user!@#$%^&*()", expected: true },
  { label: "1位字符", value: "a", expected: true },
  { label: "32位字符", value: "Abc123!@#$%^&*()_+-=[]{};',./", expected: true },
  { label: "空字符串", value: "", expected: false },
  {
    label: "33位字符",
    value: "abcdefghijklmnopqrstuvwxyz1234567",
    expected: false
  },
  { label: "包含中文", value: "用户账号", expected: false },
  { label: "包含冒号", value: "user:name", expected: false },
  { label: "包含引号", value: 'user"name', expected: false },
  { label: "包含反斜杠", value: "user\\name", expected: false }
];
</script>

<template>
  <naive-theme>
    <div className="flex flex-col justify-center mt-2">
      <n-gradient-text
        v-for="(item, index) in deviceAccountRes"
        :key="index"
        type="info"
      >
        <div>
          <span className="font-bold">{{ item.label }}</span>
          <span className="ml-2">
            regExp.deviceAccount.test("{{ item.value }}")
          </span>
        </div>
        <n-gradient-text type="info">
          // 预期: {{ item.expected }}, 实际:
          {{ regExp.deviceAccount.test(item.value) }}, 结果:
          {{
            regExp.deviceAccount.test(item.value) === item.expected ? "✓" : "✗"
          }}
        </n-gradient-text>
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
