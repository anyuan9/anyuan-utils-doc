<script setup lang="ts">
import { ref } from "vue";
import { JSONParse } from "@anyuan/utils";

// JSONParse 测试数据
const JSONParseRes = ref<Array<{ label: string; str: string }>>([]);
JSONParseRes.value = [
  { label: "有效JSON", str: '{"a":1,"b":"text","c":true}' },
  { label: "数组JSON", str: '[1,"text",true,null]' },
  { label: "嵌套JSON", str: '{"a":{"b":{"c":123}}}' },
  { label: "无效JSON", str: '{"a":1,}' },
  { label: "空字符串", str: "" },
  { label: "非JSON字符串", str: "hello world" }
];
</script>

<template>
  <naive-theme>
    <div
      v-for="(item, index) in JSONParseRes"
      :key="index"
      className="flex flex-col justify-center mt-2"
    >
      <div>
        <span className="font-bold">{{ item.label }}</span>
        <span className="ml-2"> JSONParse("{{ item.str }}")</span>
      </div>
      <n-gradient-text type="info">
        // {{ JSON.stringify(JSONParse(item.str)) }}
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
