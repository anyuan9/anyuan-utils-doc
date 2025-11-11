<script setup lang="ts">
import { ref } from "vue";
import { regExp } from "@anyuan/utils";

// markdown 测试数据
const markdownRes = ref<
  Array<{ label: string; value: string; expected: boolean }>
>([]);
markdownRes.value = [
  { label: "md文件", value: "readme.md", expected: true },
  { label: "markdown文件", value: "document.markdown", expected: true },
  { label: "大写扩展名", value: "README.MD", expected: true },
  { label: "混合大小写", value: "Document.MaRkDoWn", expected: true },
  { label: "带路径", value: "docs/readme.md", expected: true },
  { label: "文件后缀", value: ".md", expected: true },
  { label: "txt文件", value: "readme.txt", expected: false },
  { label: "无扩展名", value: "readme", expected: false }
];
</script>

<template>
  <naive-theme>
    <div className="flex flex-col justify-center mt-2">
      <n-gradient-text
        v-for="(item, index) in markdownRes"
        :key="index"
        type="info"
      >
        <div>
          <span className="font-bold">{{ item.label }}</span>
          <span className="ml-2">
            regExp.markdown.test("{{ item.value }}")
          </span>
        </div>
        <n-gradient-text type="info">
          // 预期: {{ item.expected }}, 实际:
          {{ regExp.markdown.test(item.value) }}, 结果:
          {{ regExp.markdown.test(item.value) === item.expected ? "✓" : "✗" }}
        </n-gradient-text>
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
