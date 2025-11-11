<script setup lang="ts">
import { ref } from "vue";
import { regExp } from "@anyuan/utils";

// numLetterUnderlineAndCN 测试数据
const numLetterUnderlineAndCNRes = ref<
  Array<{ label: string; value: string; expected: boolean }>
>([]);
numLetterUnderlineAndCNRes.value = [
  { label: "数字字母下划线汉字", value: "abc_123张三", expected: true },
  { label: "纯汉字", value: "张三李四", expected: true },
  { label: "数字字母下划线", value: "abc_123", expected: true },
  { label: "空字符串", value: "", expected: true },
  { label: "包含空格", value: "abc_ 123", expected: false },
  { label: "包含其他特殊字符", value: "abc-123", expected: false }
];
</script>

<template>
  <naive-theme>
    <div className="flex flex-col justify-center mt-2">
      <n-gradient-text
        v-for="(item, index) in numLetterUnderlineAndCNRes"
        :key="index"
        type="info"
      >
        <div>
          <span className="font-bold">{{ item.label }}</span>
          <span className="ml-2">
            regExp.numLetterUnderlineAndCN.test("{{ item.value }}")
          </span>
        </div>
        <n-gradient-text type="info">
          // 预期: {{ item.expected }}, 实际:
          {{ regExp.numLetterUnderlineAndCN.test(item.value) }}, 结果:
          {{
            regExp.numLetterUnderlineAndCN.test(item.value) === item.expected
              ? "✓"
              : "✗"
          }}
        </n-gradient-text>
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
