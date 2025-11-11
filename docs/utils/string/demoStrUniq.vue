<script setup lang="ts">
import { ref } from "vue";
import { strUniq } from "@anyuan/utils";

// strUniq 测试数据
const strUniqRes = ref<
  Array<{ label: string; value: string; caseSensitive?: boolean }>
>([]);
strUniqRes.value = [
  { label: "区分大小写(默认)", value: "abcABC123" },
  { label: "不区分大小写", value: "abcABC123", caseSensitive: false },
  { label: "重复字符", value: "aabbccddeeff" },
  { label: "空字符串", value: "" },
  { label: "特殊字符", value: "!@#$%!@#$%" },
  { label: "中文字符", value: "你好你好世界" },
  { label: "混合字符", value: "aA1!bB2@aA1!" }
];
</script>

<template>
  <naive-theme>
    <div
      v-for="(item, index) in strUniqRes"
      :key="index"
      className="flex flex-col justify-center mt-2"
    >
      <div>
        <span className="font-bold">{{ item.label }}</span>
        <span className="ml-2">
          strUniq("{{ item.value }}"{{
            item.caseSensitive === false ? `, false` : ""
          }})
        </span>
      </div>
      <n-gradient-text type="info">
        // {{ strUniq(item.value, item.caseSensitive) }}
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
