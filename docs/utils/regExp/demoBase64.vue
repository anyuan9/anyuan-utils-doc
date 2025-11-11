<script setup lang="ts">
import { ref } from "vue";
import { regExp } from "@anyuan/utils";

// base64 测试数据
const base64Res = ref<
  Array<{ label: string; value: string; expected: boolean }>
>([]);
base64Res.value = [
  { label: "'Test'的base64编码", value: "VGVzdA==", expected: true },
  { label: "'Hello'的base64编码", value: "SGVsbG8=", expected: true },
  { label: "包含非法字符 @", value: "SG@sbG8=", expected: false },
  { label: "7字符，不是4的倍数", value: "SGVsbG8", expected: false },
  { label: "3字符组应该用 =，不是 ==", value: "SGVsbG8==", expected: false },
  { label: "填充符出现在中间", value: "AB=C", expected: false }
];
</script>

<template>
  <naive-theme>
    <div className="flex flex-col justify-center mt-2">
      <n-gradient-text
        v-for="(item, index) in base64Res"
        :key="index"
        type="info"
      >
        <div>
          <span className="font-bold">{{ item.label }}</span>
          <span className="ml-2"> regExp.base64.test("{{ item.value }}") </span>
        </div>
        <n-gradient-text type="info">
          // 预期: {{ item.expected }}, 实际:
          {{ regExp.base64.test(item.value) }}, 结果:
          {{ regExp.base64.test(item.value) === item.expected ? "✓" : "✗" }}
        </n-gradient-text>
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
