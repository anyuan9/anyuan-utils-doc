<script setup lang="ts">
import { ref } from "vue";
import { regExp } from "@anyuan/utils";

// word 测试数据
const wordRes = ref<Array<{ label: string; value: string; expected: boolean }>>(
  []
);
wordRes.value = [
  { label: "doc文件", value: "document.doc", expected: true },
  { label: "docx文件", value: "report.docx", expected: true },
  { label: "docm文件", value: "macro.docm", expected: true },
  { label: "dot文件", value: "template.dot", expected: true },
  { label: "dotx文件", value: "template.dotx", expected: true },
  { label: "dotm文件", value: "macro_template.dotm", expected: true },
  { label: "rtf文件", value: "rich_text.rtf", expected: true },
  { label: "odt文件", value: "open_office.odt", expected: true },
  { label: "大写扩展名", value: "DOCUMENT.DOC", expected: true },
  { label: "混合大小写", value: "Document.DoCx", expected: true },
  { label: "文件后缀", value: ".doc", expected: true },
  { label: "txt文件", value: "document.txt", expected: false },
  { label: "无扩展名", value: "document", expected: false }
];
</script>

<template>
  <naive-theme>
    <div className="flex flex-col justify-center mt-2">
      <n-gradient-text
        v-for="(item, index) in wordRes"
        :key="index"
        type="info"
      >
        <div>
          <span className="font-bold">{{ item.label }}</span>
          <span className="ml-2"> regExp.word.test("{{ item.value }}")</span>
        </div>
        <n-gradient-text type="info">
          // 预期: {{ item.expected }}, 实际:
          {{ regExp.word.test(item.value) }}, 结果:
          {{ regExp.word.test(item.value) === item.expected ? "✓" : "✗" }}
        </n-gradient-text>
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
