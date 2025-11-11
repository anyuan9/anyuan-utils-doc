<script setup lang="ts">
import { ref } from "vue";
import { regExp } from "@anyuan/utils";

// excel 测试数据
const excelRes = ref<
  Array<{ label: string; value: string; expected: boolean }>
>([]);
excelRes.value = [
  { label: "xls文件", value: "spreadsheet.xls", expected: true },
  { label: "xlsx文件", value: "workbook.xlsx", expected: true },
  { label: "xlsm文件", value: "macro_workbook.xlsm", expected: true },
  { label: "xlt文件", value: "template.xlt", expected: true },
  { label: "xltx文件", value: "template.xltx", expected: true },
  { label: "xltm文件", value: "macro_template.xltm", expected: true },
  { label: "xlsb文件", value: "binary.xlsb", expected: true },
  { label: "xlam文件", value: "addin.xlam", expected: true },
  { label: "csv文件", value: "data.csv", expected: true },
  { label: "ods文件", value: "open_office.ods", expected: true },
  { label: "大写扩展名", value: "SPREADSHEET.XLS", expected: true },
  { label: "混合大小写", value: "Spreadsheet.XlSx", expected: true },
  { label: "文件后缀", value: ".xls", expected: true },
  { label: "txt文件", value: "data.txt", expected: false },
  { label: "无扩展名", value: "spreadsheet", expected: false }
];
</script>

<template>
  <naive-theme>
    <div className="flex flex-col justify-center mt-2">
      <n-gradient-text
        v-for="(item, index) in excelRes"
        :key="index"
        type="info"
      >
        <div>
          <span className="font-bold">{{ item.label }}</span>
          <span className="ml-2"> regExp.excel.test("{{ item.value }}") </span>
        </div>
        <n-gradient-text type="info">
          // 预期: {{ item.expected }}, 实际:
          {{ regExp.excel.test(item.value) }}, 结果:
          {{ regExp.excel.test(item.value) === item.expected ? "✓" : "✗" }}
        </n-gradient-text>
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
