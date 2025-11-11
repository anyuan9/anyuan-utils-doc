<script setup lang="ts">
import { ref } from "vue";
import { regExp } from "@anyuan/utils";

// url 测试数据
const urlRes = ref<Array<{ label: string; value: string; expected: boolean }>>(
  []
);
urlRes.value = [
  { label: "http网址", value: "http://example.com", expected: true },
  { label: "https网址", value: "https://example.com", expected: true },
  { label: "带路径", value: "https://example.com/path", expected: true },
  { label: "带查询参数", value: "https://example.com?query=1", expected: true },
  { label: "无协议", value: "example.com", expected: false },
  { label: "FTP协议", value: "ftp://example.com", expected: false }
];
</script>

<template>
  <naive-theme>
    <div
      v-for="(item, index) in urlRes"
      :key="index"
      className="flex flex-col justify-center mt-2"
    >
      <div>
        <span className="font-bold">{{ item.label }}</span>
        <span className="ml-2"> regExp.url.test("{{ item.value }}")</span>
      </div>
      <n-gradient-text type="info">
        // 预期: {{ item.expected }}, 实际: {{ regExp.url.test(item.value) }},
        结果:
        {{ regExp.url.test(item.value) === item.expected ? "✓" : "✗" }}
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
