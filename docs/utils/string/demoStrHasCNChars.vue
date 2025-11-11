<script setup lang="ts">
import { ref } from "vue";
import { strHasCNChars } from "@anyuan/utils";

// strHasCNChars 测试数据
const strHasCNCharsRes = ref<
  Array<{ label: string; value: any; options?: any }>
>([]);
strHasCNCharsRes.value = [
  { label: "纯中文", value: "你好世界" },
  { label: "中英混合", value: "Hello世界" },
  { label: "纯英文", value: "Hello World" },
  { label: "包含中文标点", value: "你好，世界！" },
  { label: "空字符串", value: "" },
  { label: "数字", value: "123456" },
  { label: "包含空格", value: "你好 世界", options: { removeSpaces: true } },
  { label: "全中文校验", value: "你好世界123", options: { all: true } },
  { label: "全中文校验通过", value: "你好世界", options: { all: true } }
];
</script>

<template>
  <naive-theme>
    <div
      v-for="(item, index) in strHasCNCharsRes"
      :key="index"
      className="flex flex-col justify-center mt-2"
    >
      <div>
        <span className="font-bold">{{ item.label }}</span>
        <span className="ml-2">
          strHasCNChars("{{ item.value }}"{{
            item.options ? `, ${JSON.stringify(item.options)}` : ""
          }})
        </span>
      </div>
      <n-gradient-text type="info">
        // {{ strHasCNChars(item.value, item.options) }}
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
