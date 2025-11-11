<script setup lang="ts">
import { ref } from "vue";
import { strHideSensitive } from "@anyuan/utils";

// strHideSensitive 测试数据
const strHideSensitiveRes = ref<
  Array<{ label: string; text: string | number; index: any; symbol?: string }>
>([]);
strHideSensitiveRes.value = [
  { label: "单个位置隐藏", text: "1234567890", index: 3 },
  { label: "范围隐藏", text: "1234567890", index: [3, 7] },
  { label: "对象范围隐藏", text: "1234567890", index: { start: 2, end: 5 } },
  {
    label: "多个范围隐藏",
    text: "1234567890",
    index: [
      { start: 1, end: 3 },
      { start: 7, end: 9 }
    ]
  },
  { label: "自定义符号", text: "1234567890", index: 3, symbol: "#" },
  { label: "中文字符隐藏", text: "这是一个测试字符串", index: [2, 5] },
  { label: "数字类型", text: 1234567890, index: [3, 7] },
  { label: "空字符串", text: "", index: 0 }
];
</script>

<template>
  <naive-theme>
    <div
      v-for="(item, index) in strHideSensitiveRes"
      :key="index"
      className="flex flex-col justify-center mt-2"
    >
      <div>
        <span className="font-bold">{{ item.label }}</span>
        <span className="ml-2">
          strHideSensitive("{{ item.text }}", {{ JSON.stringify(item.index)
          }}{{ item.symbol ? `, "${item.symbol}"` : "" }})
        </span>
      </div>
      <n-gradient-text type="info">
        // {{ strHideSensitive(item.text, item.index, item.symbol) }}
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
