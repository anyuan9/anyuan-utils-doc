<script setup lang="ts">
import { ref } from "vue";
import { regExp } from "@anyuan/utils";

// chinese 测试数据
const chineseRes = ref<
  Array<{ label: string; value: string; expected: boolean }>
>([]);
chineseRes.value = [
  { label: "纯汉字", value: "张三李四", expected: true },
  { label: "扩展汉字", value: "𠮷", expected: false },
  { label: "包含字母", value: "张三abc", expected: false },
  { label: "包含数字", value: "张三123", expected: false },
  { label: "包含标点", value: "张三，李四", expected: false },
  { label: "空字符串", value: "", expected: false }
];
</script>

<template>
  <naive-theme>
    <div
      v-for="(item, index) in chineseRes"
      :key="index"
      className="flex flex-col justify-center mt-2"
    >
      <div>
        <span className="font-bold">{{ item.label }}</span>
        <span className="ml-2"> regExp.chinese.test("{{ item.value }}") </span>
      </div>
      <n-gradient-text type="info">
        // 预期: {{ item.expected }}, 实际:
        {{ regExp.chinese.test(item.value) }}, 结果:
        {{ regExp.chinese.test(item.value) === item.expected ? "✓" : "✗" }}
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
