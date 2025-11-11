<script setup lang="ts">
import { ref } from "vue";
import { regExp } from "@anyuan/utils";

// numLetterUnderlineInitial 测试数据
const numLetterUnderlineInitialRes = ref<
  Array<{ label: string; value: string; expected: boolean }>
>([]);
numLetterUnderlineInitialRes.value = [
  { label: "字母开头", value: "abc_123", expected: true },
  { label: "大写字母开头", value: "Abc_123", expected: true },
  { label: "数字开头", value: "123_abc", expected: false },
  { label: "下划线开头", value: "_abc123", expected: false },
  { label: "空字符串", value: "", expected: false }
];
</script>

<template>
  <naive-theme>
    <div className="flex flex-col justify-center mt-2">
      <n-gradient-text
        v-for="(item, index) in numLetterUnderlineInitialRes"
        :key="index"
        type="info"
      >
        <div>
          <span className="font-bold">{{ item.label }}</span>
          <span className="ml-2">
            regExp.numLetterUnderlineInitial.test("{{ item.value }}")
          </span>
        </div>
        <n-gradient-text type="info">
          // 预期: {{ item.expected }}, 实际:
          {{ regExp.numLetterUnderlineInitial.test(item.value) }}, 结果:
          {{
            regExp.numLetterUnderlineInitial.test(item.value) === item.expected
              ? "✓"
              : "✗"
          }}
        </n-gradient-text>
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
