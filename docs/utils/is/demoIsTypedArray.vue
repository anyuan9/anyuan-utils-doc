<script setup lang="ts">
import { ref } from "vue";
import { isTypedArray } from "@anyuan/utils";

// isTypedArray 测试数据
const isTypedArrayRes = ref<Array<{ label: string; value: any }>>([]);
isTypedArrayRes.value = [
  { label: "Int8Array", value: new Int8Array([1, 2, 3]) },
  { label: "Uint8Array", value: new Uint8Array([1, 2, 3]) },
  { label: "普通数组", value: [1, 2, 3] },
  { label: "对象", value: { 0: 1, 1: 2, 2: 3, length: 3 } }
];
</script>

<template>
  <naive-theme>
    <div
      v-for="(item, index) in isTypedArrayRes"
      :key="index"
      className="flex flex-col justify-center mt-2"
    >
      <div>
        <span className="font-bold">{{ item.label }}</span>
        <span className="ml-2">
          isTypedArray({{
            item.value.constructor?.name || JSON.stringify(item.value)
          }})
        </span>
      </div>
      <n-gradient-text type="info">
        // {{ isTypedArray(item.value) }}
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
