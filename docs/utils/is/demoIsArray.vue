<script setup lang="ts">
import { ref } from "vue";
import { isArray } from "@anyuan/utils";

// isArray 测试数据
const isArrayRes = ref<Array<{ label: string; value: any }>>([]);
isArrayRes.value = [
  { label: "数组", value: [1, 2, 3] },
  { label: "空数组", value: [] },
  { label: "类数组", value: { length: 3, 0: "a", 1: "b", 2: "c" } },
  { label: "字符串", value: "hello" },
  { label: "对象", value: { a: 1, b: 2 } }
];
</script>

<template>
  <naive-theme>
    <div
      v-for="(item, index) in isArrayRes"
      :key="index"
      className="flex flex-col justify-center mt-2"
    >
      <div>
        <span className="font-bold">{{ item.label }}</span>
        <span className="ml-2">
          isArray({{ JSON.stringify(item.value) }})
        </span>
      </div>
      <n-gradient-text type="info">
        // {{ isArray(item.value) }}
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
