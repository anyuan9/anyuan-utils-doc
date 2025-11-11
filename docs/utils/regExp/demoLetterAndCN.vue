<script setup lang="ts">
import { ref } from "vue";
import { regExp } from "@anyuan/utils";

// letterAndCN 测试数据
const letterAndCNRes = ref<
  Array<{ label: string; value: string; expected: boolean }>
>([]);
letterAndCNRes.value = [
  { label: "字母汉字混合", value: "abc张三", expected: true },
  { label: "纯字母", value: "abc", expected: true },
  { label: "纯汉字", value: "张三李四", expected: true },
  { label: "包含数字", value: "abc123张三", expected: false },
  { label: "包含下划线", value: "abc_张三", expected: false },
  { label: "空字符串", value: "", expected: true }
];
</script>

<template>
  <naive-theme>
    <div className="flex flex-col justify-center mt-2">
      <n-gradient-text
        v-for="(item, index) in letterAndCNRes"
        :key="index"
        type="info"
      >
        <div>
          <span className="font-bold">{{ item.label }}</span>
          <span className="ml-2">
            regExp.letterAndCN.test("{{ item.value }}")
          </span>
        </div>
        <n-gradient-text type="info">
          // 预期: {{ item.expected }}, 实际:
          {{ regExp.letterAndCN.test(item.value) }}, 结果:
          {{
            regExp.letterAndCN.test(item.value) === item.expected ? "✓" : "✗"
          }}
        </n-gradient-text>
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
