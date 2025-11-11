<script setup lang="ts">
import { ref } from "vue";
import { isObject } from "@anyuan/utils";

// isObject 测试数据
const isObjectRes = ref<Array<{ label: string; value: any }>>([]);
isObjectRes.value = [
  { label: "普通对象", value: { a: 1, b: 2 } },
  { label: "数组", value: [1, 2, 3] },
  { label: "Date对象", value: new Date() },
  { label: "Map对象", value: new Map() },
  { label: "Set对象", value: new Set() },
  { label: "null", value: null },
  { label: "字符串", value: "hello" },
  { label: "数字", value: 123 },
  { label: "布尔值", value: true },
  { label: "undefined", value: undefined },
  { label: "函数", value: () => {} }
];
</script>

<template>
  <naive-theme>
    <div
      v-for="(item, index) in isObjectRes"
      :key="index"
      className="flex flex-col justify-center mt-2"
    >
      <div>
        <span className="font-bold">{{ item.label }}</span>
        <span className="ml-2">
          isObject({{ JSON.stringify(item.value) }})
        </span>
      </div>
      <n-gradient-text type="info">
        // {{ isObject(item.value) }}
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
