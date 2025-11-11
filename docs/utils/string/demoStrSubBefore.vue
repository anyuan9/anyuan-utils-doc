<script setup lang="ts">
import { ref } from "vue";
import { strSubBefore } from "@anyuan/utils";

// strSubBefore 测试数据
const strSubBeforeRes = ref<
  Array<{ label: string; value: string; character: string }>
>([]);
strSubBeforeRes.value = [
  { label: "存在分隔符", value: "hello-world", character: "-" },
  { label: "不存在分隔符", value: "helloworld", character: "-" },
  { label: "多个分隔符", value: "hello-world-test", character: "-" },
  { label: "空分隔符", value: "helloworld", character: "" },
  { label: "空字符串", value: "", character: "-" },
  { label: "中文字符分隔", value: "你好世界测试", character: "世界" },
  { label: "特殊字符分隔", value: "test@example.com", character: "@" }
];
</script>

<template>
  <naive-theme>
    <div
      v-for="(item, index) in strSubBeforeRes"
      :key="index"
      className="flex flex-col justify-center mt-2"
    >
      <div>
        <span className="font-bold">{{ item.label }}</span>
        <span className="ml-2">
          strSubBefore("{{ item.value }}", "{{ item.character }}")
        </span>
      </div>
      <n-gradient-text type="info">
        // {{ strSubBefore(item.value, item.character) }}
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
