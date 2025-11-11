<script setup lang="ts">
import { ref } from "vue";
import { isJsonString } from "@anyuan/utils";

// isJsonString 测试数据
const isJsonStringRes = ref<Array<{ label: string; value: any }>>([]);
isJsonStringRes.value = [
  { label: "有效JSON对象", value: '{"name":"John","age":30}' },
  { label: "有效JSON数组", value: "[1,2,3]" },
  { label: "无效JSON", value: '{"name":"John",}' },
  { label: "普通字符串", value: "hello" },
  { label: "数字", value: 123 },
  { label: "对象", value: { name: "John" } },
  { label: "null", value: null }
];
</script>

<template>
  <naive-theme>
    <div
      v-for="(item, index) in isJsonStringRes"
      :key="index"
      className="flex flex-col justify-center mt-2"
    >
      <div>
        <span className="font-bold">{{ item.label }}</span>
        <span className="ml-2">
          isJsonString({{ JSON.stringify(item.value) }})
        </span>
      </div>
      <n-gradient-text type="info">
        // {{ isJsonString(item.value) }}
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
