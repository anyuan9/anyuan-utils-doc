<script setup lang="ts">
import { ref } from "vue";
import { strRegExpEscape } from "@anyuan/utils";

// strRegExpEscape 测试数据
const strRegExpEscapeRes = ref<Array<{ label: string; value: string }>>([]);
strRegExpEscapeRes.value = [
  { label: "包含点号", value: "www.example.com" },
  { label: "包含星号", value: "a*b*c" },
  { label: "包含加号", value: "1+2=3" },
  { label: "包含问号", value: "hello?" },
  { label: "包含脱字符", value: "^开始" },
  { label: "包含美元符号", value: "$100" },
  { label: "包含花括号", value: "{name}" },
  { label: "包含圆括号", value: "(abc)" },
  { label: "包含竖线", value: "a|b|c" },
  { label: "包含方括号", value: "[abc]" },
  { label: "包含反斜杠", value: "path\\\\to\\file" },
  { label: "混合特殊字符", value: ".*+?^${}()|[]\\" },
];
</script>

<template>
  <naive-theme>
    <div
      v-for="(item, index) in strRegExpEscapeRes"
      :key="index"
      className="flex flex-col justify-center mt-2"
    >
      <div>
        <span className="font-bold">{{ item.label }}</span>
        <span className="ml-2">
          strRegExpEscape("{{ item.value }}")
        </span>
      </div>
      <n-gradient-text type="info">
        // {{ strRegExpEscape(item.value) }}
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
