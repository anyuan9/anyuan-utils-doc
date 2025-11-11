<script setup lang="ts">
import { ref } from "vue";
import { strSplitWithUnit } from "@anyuan/utils";

// strSplitWithUnit 测试数据
const strSplitWithUnitRes = ref<Array<{ label: string; value: any }>>([]);
strSplitWithUnitRes.value = [
  { label: "带单位字符串", value: "10px" },
  { label: "纯数字字符串", value: "10" },
  { label: "数字类型", value: 10 },
  { label: "带小数单位", value: "10.5rem" },
  { label: "百分比单位", value: "50%" },
  { label: "空字符串", value: "" },
  { label: "无效数字", value: "abcpx" },
  { label: "布尔值", value: false },
  { label: "null值", value: null },
  { label: "undefined", value: undefined }
];
</script>

<template>
  <naive-theme>
    <div
      v-for="(item, index) in strSplitWithUnitRes"
      :key="index"
      className="flex flex-col justify-center mt-2"
    >
      <div>
        <span className="font-bold">{{ item.label }}</span>
        <span className="ml-2">
          strSplitWithUnit({{ JSON.stringify(item.value) }})
        </span>
      </div>
      <n-gradient-text type="info">
        // {{ JSON.stringify(strSplitWithUnit(item.value)) }}
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
