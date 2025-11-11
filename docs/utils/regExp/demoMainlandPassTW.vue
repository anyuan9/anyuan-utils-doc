<script setup lang="ts">
import { ref } from "vue";
import { regExp } from "@anyuan/utils";

// mainlandPassTW 测试数据
const mainlandPassTWRes = ref<
  Array<{ label: string; value: string; expected: boolean }>
>([]);
mainlandPassTWRes.value = [
  { label: "旧版8位", value: "12345678", expected: true },
  { label: "新版卡式", value: "A1234567", expected: true },
  { label: "7位数字", value: "1234567", expected: false },
  { label: "9位数字", value: "123456789", expected: false },
  { label: "字母开头但超长", value: "A12345678", expected: false }
];
</script>

<template>
  <naive-theme>
    <div className="flex flex-col justify-center mt-2">
      <n-gradient-text
        v-for="(item, index) in mainlandPassTWRes"
        :key="index"
        type="info"
      >
        <div>
          <span className="font-bold">{{ item.label }}</span>
          <span className="ml-2">
            regExp.mainlandPassTW.test("{{ item.value }}")
          </span>
        </div>
        <n-gradient-text type="info">
          // 预期: {{ item.expected }}, 实际:
          {{ regExp.mainlandPassTW.test(item.value) }}, 结果:
          {{
            regExp.mainlandPassTW.test(item.value) === item.expected ? "✓" : "✗"
          }}
        </n-gradient-text>
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
