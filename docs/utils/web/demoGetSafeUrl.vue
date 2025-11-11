<script setup lang="ts">
import { ref } from "vue";
import { getSafeUrl } from "@anyuan/utils";

// getSafeUrl 测试数据
const getSafeUrlRes = ref<Array<{ label: string; url: string }>>([]);
getSafeUrlRes.value = [
  {
    label: "标准URL带参数",
    url: "http://www.domain.com/?user=anonymous&id=123"
  },
  { label: "带hash的URL", url: "http://example.com/#/path?query=user&id=123" },
  { label: "hash路由带参数", url: "/#/path?user=anonymous&id=123" },
  { label: "无参数URL", url: "/path" }
];
</script>

<template>
  <naive-theme>
    <div
      v-for="(item, index) in getSafeUrlRes"
      :key="index"
      className="flex flex-col justify-center mt-2"
    >
      <div>
        <span className="font-bold">{{ item.label }}</span>
        <span className="ml-2"> getSafeUrl("{{ item.url }}")</span>
      </div>
      <n-gradient-text type="info">
        // {{ JSON.stringify(getSafeUrl(item.url)) }}
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
