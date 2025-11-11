<script setup lang="ts">
import { ref } from "vue";
import { strSubBetween } from "@anyuan/utils";

// strSubBetween 测试数据
const strSubBetweenRes = ref<
  Array<{ label: string; value: string; before: string; after: string }>
>([]);
strSubBetweenRes.value = [
  { label: "正常截取", value: "hello[world]test", before: "[", after: "]" },
  { label: "不存在前字符", value: "helloworld]test", before: "[", after: "]" },
  { label: "不存在后字符", value: "hello[worldtest", before: "[", after: "]" },
  {
    label: "多个匹配",
    value: "hello[world]test[again]",
    before: "[",
    after: "]"
  },
  { label: "中文字符", value: "开始【内容】结束", before: "【", after: "】" },
  { label: "空字符串", value: "", before: "[", after: "]" },
  { label: "相同前后字符", value: "hello(world)test", before: "(", after: ")" }
];
</script>

<template>
  <naive-theme>
    <div
      v-for="(item, index) in strSubBetweenRes"
      :key="index"
      className="flex flex-col justify-center mt-2"
    >
      <div>
        <span className="font-bold">{{ item.label }}</span>
        <span className="ml-2">
          strSubBetween("{{ item.value }}", "{{ item.before }}", "{{
            item.after
          }}")
        </span>
      </div>
      <n-gradient-text type="info">
        // {{ strSubBetween(item.value, item.before, item.after) }}
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
