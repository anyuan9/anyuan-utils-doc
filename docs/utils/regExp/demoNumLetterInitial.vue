<script setup lang="ts">
import { ref } from "vue";
import { regExp } from "@anyuan/utils";

// numLetterInitial 测试数据
const numLetterInitialRes = ref<
  Array<{ label: string; value: string; expected: boolean }>
>([]);
numLetterInitialRes.value = [
  { label: "字母开头", value: "abc123", expected: true },
  { label: "大写字母开头", value: "Abc123", expected: true },
  { label: "数字开头", value: "123abc", expected: false },
  { label: "特殊字符开头", value: "_abc123", expected: false },
  { label: "空字符串", value: "", expected: false }
];
</script>

<template>
  <naive-theme>
    <div
      v-for="(item, index) in numLetterInitialRes"
      :key="index"
      className="flex flex-col justify-center mt-2"
    >
      <div>
        <span className="font-bold">{{ item.label }}</span>
        <span className="ml-2">
          regExp.numLetterInitial.test("{{ item.value }}")
        </span>
      </div>
      <n-gradient-text type="info">
        // 预期: {{ item.expected }}, 实际:
        {{ regExp.numLetterInitial.test(item.value) }}, 结果:
        {{
          regExp.numLetterInitial.test(item.value) === item.expected ? "✓" : "✗"
        }}
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
