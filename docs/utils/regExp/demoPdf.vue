<script setup lang="ts">
import { ref } from "vue";
import { regExp } from "@anyuan/utils";

// pdf 测试数据
const pdfRes = ref<Array<{ label: string; value: string; expected: boolean }>>(
  []
);
pdfRes.value = [
  { label: "pdf文件", value: "document.pdf", expected: true },
  { label: "带路径pdf", value: "/documents/report.pdf", expected: true },
  { label: "大写扩展名", value: "DOCUMENT.PDF", expected: true },
  { label: "混合大小写", value: "Document.PdF", expected: true },
  { label: "文件后缀", value: ".pdf", expected: true },
  { label: "doc文件", value: "document.doc", expected: false },
  { label: "txt文件", value: "document.txt", expected: false },
  { label: "无扩展名", value: "document", expected: false }
];
</script>

<template>
  <naive-theme>
    <div className="flex flex-col justify-center mt-2">
      <n-gradient-text v-for="(item, index) in pdfRes" :key="index" type="info">
        <div>
          <span className="font-bold">{{ item.label }}</span>
          <span className="ml-2"> regExp.pdf.test("{{ item.value }}")</span>
        </div>
        <n-gradient-text type="info">
          // 预期: {{ item.expected }}, 实际: {{ regExp.pdf.test(item.value) }},
          结果:
          {{ regExp.pdf.test(item.value) === item.expected ? "✓" : "✗" }}
        </n-gradient-text>
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
