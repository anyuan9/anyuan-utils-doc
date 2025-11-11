<script setup lang="ts">
import { ref } from "vue";
import { strSubEllipsis } from "@anyuan/utils";

// strSubEllipsis 测试数据
const strSubEllipsisRes = ref<
  Array<{ label: string; value: string | number; len?: number }>
>([]);
strSubEllipsisRes.value = [
  { label: "默认长度(3)", value: "Hello World" },
  { label: "指定长度(5)", value: "Hello World", len: 5 },
  { label: "短于长度", value: "Hi", len: 5 },
  { label: "等于长度", value: "Hello", len: 5 },
  { label: "数字类型", value: 123456, len: 3 },
  { label: "空字符串", value: "", len: 3 },
  { label: "中文字符", value: "这是一个测试字符串", len: 4 }
];
</script>

<template>
  <naive-theme>
    <div
      v-for="(item, index) in strSubEllipsisRes"
      :key="index"
      className="flex flex-col justify-center mt-2"
    >
      <div>
        <span className="font-bold">{{ item.label }}</span>
        <span className="ml-2">
          strSubEllipsis("{{ item.value }}"{{
            item.len ? `, ${item.len}` : ""
          }})
        </span>
      </div>
      <n-gradient-text type="info">
        // {{ strSubEllipsis(item.value, item.len) }}
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
