<script setup lang="ts">
import { ref } from "vue";
import { randomArrayElement } from "@anyuan/utils";

// randomArrayElement 测试数据
const randomArrayElementRes = ref<Array<{ label: string; array: any[] }>>([]);
randomArrayElementRes.value = [
  { label: "数字数组", array: [1, 2, 3, 4, 5] },
  { label: "字符串数组", array: ["apple", "banana", "orange", "grape"] },
  { label: "混合数组", array: [1, "hello", true, null, { key: "value" }] },
  { label: "对象数组", array: [{ id: 1 }, { id: 2 }, { id: 3 }] },
  { label: "空数组", array: [] },
  { label: "单元素数组", array: ["only one"] }
];
</script>

<template>
  <naive-theme>
    <div
      v-for="(item, index) in randomArrayElementRes"
      :key="index"
      className="flex flex-col justify-center mt-2"
    >
      <div>
        <span className="font-bold">{{ item.label }}</span>
        <span className="ml-2">
          randomArrayElement({{ JSON.stringify(item.array) }})
        </span>
      </div>
      <n-gradient-text type="info">
        // {{ JSON.stringify(randomArrayElement(item.array)) }}
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
