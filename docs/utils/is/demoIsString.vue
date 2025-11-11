<script setup lang="ts">
import { ref } from "vue";
import { isString } from "@anyuan/utils";

// isString 测试数据
const isStringRes = ref<Array<{ label: string; value: any }>>([]);
isStringRes.value = [
  { label: "普通字符串", value: "hello" },
  { label: "空字符串", value: "" },
  { label: "数字", value: 123 },
  { label: "布尔值", value: true },
  { label: "对象", value: { a: 1 } }
];
</script>

<template>
  <naive-theme>
    <div
      v-for="(item, index) in isStringRes"
      :key="index"
      className="flex flex-col justify-center mt-2"
    >
      <div>
        <span className="font-bold">{{ item.label }}</span>
        <span className="ml-2">
          isString({{ JSON.stringify(item.value) }})
        </span>
      </div>
      <n-gradient-text type="info">
        // {{ isString(item.value) }}
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
