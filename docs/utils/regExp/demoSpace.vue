<script setup lang="ts">
import { ref } from "vue";
import { regExp } from "@anyuan/utils";

// space 测试数据
const spaceRes = ref<
  Array<{ label: string; value: string; expected: boolean }>
>([]);
spaceRes.value = [
  { label: "纯空格", value: "   ", expected: true },
  { label: "包含空格", value: "abc 123", expected: true },
  { label: "包含制表符", value: "abc\t123", expected: true },
  { label: "包含换行符", value: "abc\n123", expected: true },
  { label: "包含回车符", value: "abc\r123", expected: true },
  { label: "包含换页符", value: "abc\f123", expected: true },
  { label: "无空格", value: "abc123", expected: false },
  { label: "空字符串", value: "", expected: false }
];
</script>

<template>
  <naive-theme>
    <div className="flex flex-col justify-center mt-2">
      <n-gradient-text
        v-for="(item, index) in spaceRes"
        :key="index"
        type="info"
      >
        <div>
          <span className="font-bold">{{ item.label }}</span>
          <span className="ml-2"> regExp.space.test("{{ item.value }}")</span>
        </div>
        <n-gradient-text type="info">
          // 预期: {{ item.expected }}, 实际:
          {{ regExp.space.test(item.value) }}, 结果:
          {{ regExp.space.test(item.value) === item.expected ? "✓" : "✗" }}
        </n-gradient-text>
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
