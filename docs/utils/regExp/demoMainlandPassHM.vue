<script setup lang="ts">
import { ref } from "vue";
import { regExp } from "@anyuan/utils";

// mainlandPassHM 测试数据
const mainlandPassHMRes = ref<
  Array<{ label: string; value: string; expected: boolean }>
>([]);
mainlandPassHMRes.value = [
  { label: "香港旧版", value: "H1234567890", expected: true },
  { label: "澳门旧版", value: "M1234567890", expected: true },
  { label: "新版11位", value: "12345678901", expected: true },
  { label: "香港错误前缀", value: "X1234567890", expected: false },
  { label: "10位数字", value: "1234567890", expected: false },
  { label: "12位数字", value: "123456789012", expected: false }
];
</script>

<template>
  <naive-theme>
    <div className="flex flex-col justify-center mt-2">
      <n-gradient-text
        v-for="(item, index) in mainlandPassHMRes"
        :key="index"
        type="info"
      >
        <div>
          <span className="font-bold">{{ item.label }}</span>
          <span className="ml-2">
            regExp.mainlandPassHM.test("{{ item.value }}")
          </span>
        </div>
        <n-gradient-text type="info">
          // 预期: {{ item.expected }}, 实际:
          {{ regExp.mainlandPassHM.test(item.value) }}, 结果:
          {{
            regExp.mainlandPassHM.test(item.value) === item.expected ? "✓" : "✗"
          }}
        </n-gradient-text>
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
