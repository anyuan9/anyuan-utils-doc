<script setup lang="ts">
import { ref } from "vue";
import { isRegExp } from "@anyuan/utils";

// isRegExp 测试数据
const isRegExpRes = ref<Array<{ label: string; value: any }>>([]);
isRegExpRes.value = [
  { label: "正则表达式", value: /test/ },
  { label: "正则对象", value: new RegExp("test") },
  { label: "字符串", value: "/test/" },
  { label: "对象", value: { test: "pattern" } }
];
</script>

<template>
  <naive-theme>
    <div
      v-for="(item, index) in isRegExpRes"
      :key="index"
      className="flex flex-col justify-center mt-2"
    >
      <div>
        <span className="font-bold">{{ item.label }}</span>
        <span className="ml-2">
          isRegExp({{
            item.value instanceof RegExp
              ? item.value.toString()
              : JSON.stringify(item.value)
          }})
        </span>
      </div>
      <n-gradient-text type="info">
        // {{ isRegExp(item.value) }}
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
