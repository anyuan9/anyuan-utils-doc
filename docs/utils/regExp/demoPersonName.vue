<script setup lang="ts">
import { ref } from "vue";
import { regExp } from "@anyuan/utils";

// personName 测试数据
const personNameRes = ref<
  Array<{ label: string; value: string; expected: boolean }>
>([]);
personNameRes.value = [
  { label: "中文姓名", value: "张三", expected: true },
  { label: "英文姓名", value: "John Smith", expected: true },
  { label: "中英混合", value: "张三John", expected: true },
  { label: "带间隔号", value: "玛丽·居里", expected: true },
  { label: "带空格", value: "John Michael Smith", expected: true },
  { label: "带数字", value: "张三123", expected: true },
  { label: "超长姓名", value: "阿".repeat(129), expected: false },
  { label: "空姓名", value: "", expected: false },
  { label: "包含特殊字符", value: "张三@", expected: false },
  { label: "包含标点符号", value: "张三，", expected: false }
];
</script>

<template>
  <naive-theme>
    <div className="flex flex-col justify-center mt-2">
      <n-gradient-text
        v-for="(item, index) in personNameRes"
        :key="index"
        type="info"
      >
        <div>
          <span className="font-bold">{{ item.label }}</span>
          <span className="ml-2">
            regExp.personName.test("{{ item.value }}")</span
          >
        </div>
        <n-gradient-text type="info">
          // 预期: {{ item.expected }}, 实际:
          {{ regExp.personName.test(item.value) }}, 结果:
          {{ regExp.personName.test(item.value) === item.expected ? "✓" : "✗" }}
        </n-gradient-text>
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
