<script setup lang="ts">
import { ref } from "vue";
import { strTrim } from "@anyuan/utils";

// strTrim 测试数据
const strTrimRes = ref<Array<{ label: string; value: string; mode?: any }>>([]);
strTrimRes.value = [
  { label: "默认模式(both)", value: "   Hello World   " },
  { label: "去除左边空格", value: "   Hello World   ", mode: "left" },
  { label: "去除右边空格", value: "   Hello World   ", mode: "right" },
  { label: "去除所有空格", value: "   Hello World   ", mode: "all" },
  { label: "包含制表符", value: "\tHello\tWorld\t", mode: "both" },
  { label: "包含换行符", value: "\nHello\nWorld\n", mode: "both" },
  { label: "空字符串", value: "", mode: "both" },
  { label: "纯空格字符串", value: "     ", mode: "both" }
];
</script>

<template>
  <naive-theme>
    <div
      v-for="(item, index) in strTrimRes"
      :key="index"
      className="flex flex-col justify-center mt-2"
    >
      <div>
        <span className="font-bold">{{ item.label }}</span>
        <span className="ml-2">
          strTrim("{{ item.value }}"{{ item.mode ? `, "${item.mode}"` : "" }})
        </span>
      </div>
      <n-gradient-text type="info">
        // {{ strTrim(item.value, item.mode) }}
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
