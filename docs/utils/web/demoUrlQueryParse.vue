<script setup lang="ts">
import { ref } from "vue";
import { urlQueryParse } from "@anyuan/utils";

// urlQueryParse 测试数据
const urlQueryParseRes = ref<Array<{ label: string; url: string }>>([]);
urlQueryParseRes.value = [
  {
    label: "标准URL带参数",
    url: "http://www.domain.com/?user=anonymous&id=123"
  },
  {
    label: "带hash的URL",
    url: "http://example.com/path?user=anonymous&id=123#hashParam1=hashValue1"
  },
  {
    label: "hash路由带参数",
    url: "http://example.com/#/path?user=anonymous&id=123"
  },
  { label: "无参数URL", url: "http://example.com/path" },
  {
    label: "复杂参数",
    url: "http://example.com/?name=John%20Doe&age=30&tags=vue&tags=js"
  },
  { label: "空字符串", url: "" },
  { label: "无效URL", url: "invalid-url" }
];
</script>

<template>
  <naive-theme>
    <div
      v-for="(item, index) in urlQueryParseRes"
      :key="index"
      className="flex flex-col justify-center mt-2"
    >
      <div>
        <span className="font-bold">{{ item.label }}</span>
        <span className="ml-2"> urlQueryParse("{{ item.url }}")</span>
      </div>
      <n-gradient-text type="info">
        // {{ JSON.stringify(urlQueryParse(item.url)) }}
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
