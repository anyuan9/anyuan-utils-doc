<script setup lang="ts">
import { ref } from "vue";
import { regExp } from "@anyuan/utils";

// ppt 测试数据
const pptRes = ref<Array<{ label: string; value: string; expected: boolean }>>(
  []
);
pptRes.value = [
  { label: "ppt文件", value: "presentation.ppt", expected: true },
  { label: "pptx文件", value: "slides.pptx", expected: true },
  { label: "pptm文件", value: "macro_presentation.pptm", expected: true },
  { label: "pot文件", value: "template.pot", expected: true },
  { label: "potx文件", value: "template.potx", expected: true },
  { label: "potm文件", value: "macro_template.potm", expected: true },
  { label: "pps文件", value: "show.pps", expected: true },
  { label: "ppsx文件", value: "show.ppsx", expected: true },
  { label: "ppsm文件", value: "macro_show.ppsm", expected: true },
  { label: "odp文件", value: "open_office.odp", expected: true },
  { label: "大写扩展名", value: "PRESENTATION.PPT", expected: true },
  { label: "混合大小写", value: "Presentation.PpTx", expected: true },
  { label: "文件后缀", value: ".ppt", expected: true },
  { label: "pdf文件", value: "presentation.pdf", expected: false },
  { label: "doc文件", value: "document.doc", expected: false },
  { label: "无扩展名", value: "presentation", expected: false }
];
</script>

<template>
  <naive-theme>
    <div className="flex flex-col justify-center mt-2">
      <n-gradient-text v-for="(item, index) in pptRes" :key="index" type="info">
        <div>
          <span className="font-bold">{{ item.label }}</span>
          <span className="ml-2"> regExp.ppt.test("{{ item.value }}")</span>
        </div>
        <n-gradient-text type="info">
          // 预期: {{ item.expected }}, 实际: {{ regExp.ppt.test(item.value) }},
          结果:
          {{ regExp.ppt.test(item.value) === item.expected ? "✓" : "✗" }}
        </n-gradient-text>
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
