<script setup lang="ts">
import { ref } from "vue";
import { regExp } from "@anyuan/utils";

// colorHex 测试数据
const colorHexRes = ref<
  Array<{ label: string; value: string; expected: boolean }>
>([]);
colorHexRes.value = [
  { label: "3位HEX", value: "#fff", expected: true },
  { label: "6位HEX", value: "#ffffff", expected: true },
  { label: "小写字母", value: "#abc123", expected: true },
  { label: "大写字母", value: "#ABC123", expected: true },
  { label: "无#号", value: "ffffff", expected: false },
  { label: "2位长度", value: "#ff", expected: false },
  { label: "4位长度", value: "#ffff", expected: false },
  { label: "非法字符", value: "#ffgg00", expected: false }
];
</script>

<template>
  <naive-theme>
    <div className="flex flex-col justify-center mt-2">
      <n-gradient-text
        v-for="(item, index) in colorHexRes"
        :key="index"
        type="info"
      >
        <div>
          <span className="font-bold">{{ item.label }}</span>
          <span className="ml-2">
            regExp.colorHex.test("{{ item.value }}")
          </span>
        </div>
        <n-gradient-text type="info">
          // 预期: {{ item.expected }}, 实际:
          {{ regExp.colorHex.test(item.value) }}, 结果:
          {{ regExp.colorHex.test(item.value) === item.expected ? "✓" : "✗" }}
        </n-gradient-text>
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
