<script setup lang="ts">
import { ref } from "vue";
import { regExp } from "@anyuan/utils";

// txt 测试数据
const txtRes = ref<Array<{ label: string; value: string; expected: boolean }>>(
  []
);
txtRes.value = [
  { label: "txt文件", value: "document.txt", expected: true },
  { label: "大写扩展名", value: "README.TXT", expected: true },
  { label: "混合大小写", value: "Document.TxT", expected: true },
  { label: "带路径", value: "path/to/document.txt", expected: true },
  { label: "文件后缀", value: ".txt", expected: true },
  { label: "pdf文件", value: "document.pdf", expected: false },
  { label: "无扩展名", value: "document", expected: false }
];
</script>

<template>
  <naive-theme>
    <div className="flex flex-col justify-center mt-2">
      <n-gradient-text v-for="(item, index) in txtRes" :key="index" type="info">
        <div>
          <span className="font-bold">{{ item.label }}</span>
          <span className="ml-2"> regExp.txt.test("{{ item.value }}")</span>
        </div>
        <n-gradient-text type="info">
          // 预期: {{ item.expected }}, 实际: {{ regExp.txt.test(item.value) }},
          结果:
          {{ regExp.txt.test(item.value) === item.expected ? "✓" : "✗" }}
        </n-gradient-text>
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
