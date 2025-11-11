<script setup lang="ts">
import { ref } from "vue";
import { isArrayLike } from "@anyuan/utils";

// isArrayLike 测试数据
const isArrayLikeRes = ref<Array<{ label: string; value: any }>>([]);
isArrayLikeRes.value = [
  { label: "字符串", value: "hello" },
  { label: "函数", value: () => {} },
  { label: "数组", value: [1, 2, 3] },
  { label: "类数组对象", value: { length: 3, 0: "a", 1: "b", 2: "c" } },
  { label: "无length对象", value: { a: 1, b: 2 } }
];
</script>

<template>
  <naive-theme>
    <div
      v-for="(item, index) in isArrayLikeRes"
      :key="index"
      className="flex flex-col justify-center mt-2"
    >
      <div>
        <span className="font-bold">{{ item.label }}</span>
        <span className="ml-2">
          isArrayLike({{ JSON.stringify(item.value) }})
        </span>
      </div>
      <n-gradient-text type="info">
        // {{ isArrayLike(item.value) }}
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
