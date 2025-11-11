<script setup lang="ts">
import { ref } from "vue";
import { regExp } from "@anyuan/utils";

// numLetterUnderline 测试数据
const numLetterUnderlineRes = ref<
  Array<{ label: string; value: string; expected: boolean }>
>([]);
numLetterUnderlineRes.value = [
  { label: "数字字母下划线", value: "abc_123", expected: true },
  { label: "纯下划线", value: "___", expected: true },
  { label: "空字符串", value: "", expected: false },
  { label: "包含汉字", value: "abc_123张三", expected: false },
  { label: "包含空格", value: "abc_ 123", expected: false },
  { label: "包含其他特殊字符", value: "abc-123", expected: false }
];
</script>

<template>
  <naive-theme>
    <div className="flex flex-col justify-center mt-2">
      <n-gradient-text
        v-for="(item, index) in numLetterUnderlineRes"
        :key="index"
        type="info"
      >
        <div>
          <span className="font-bold">{{ item.label }}</span>
          <span className="ml-2">
            regExp.numLetterUnderline.test("{{ item.value }}")
          </span>
        </div>
        <n-gradient-text type="info">
          // 预期: {{ item.expected }}, 实际:
          {{ regExp.numLetterUnderline.test(item.value) }}, 结果:
          {{
            regExp.numLetterUnderline.test(item.value) === item.expected
              ? "✓"
              : "✗"
          }}
        </n-gradient-text>
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
