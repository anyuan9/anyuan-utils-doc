<script setup lang="ts">
import { ref } from "vue";
import { isEqualObject } from "@anyuan/utils";

// isEqualObject 测试数据
const isEqualObjectRes = ref<
  Array<{ label: string; value1: any; value2: any }>
>([]);
const obj1 = { a: 1, b: { c: 2 } };
const obj2 = { a: 1, b: { c: 2 } };
const obj3 = { a: 1, b: { c: 3 } };
isEqualObjectRes.value = [
  { label: "相同对象", value1: obj1, value2: obj2 },
  { label: "不同对象", value1: obj1, value2: obj3 },
  { label: "相同数组", value1: [1, 2, 3], value2: [1, 2, 3] },
  { label: "不同数组", value1: [1, 2, 3], value2: [1, 2, 4] },
  { label: "数组和对象", value1: [1, 2], value2: { 0: 1, 1: 2, length: 2 } },
  { label: "null比较", value1: null, value2: null },
  { label: "undefined比较", value1: undefined, value2: undefined },
  { label: "不同类型", value1: "hello", value2: 123 }
];
</script>

<template>
  <naive-theme>
    <div
      v-for="(item, index) in isEqualObjectRes"
      :key="index"
      className="flex flex-col justify-center mt-2"
    >
      <div>
        <span className="font-bold">{{ item.label }}</span>
        <span className="ml-2">
          isEqualObject({{ JSON.stringify(item.value1) }},
          {{ JSON.stringify(item.value2) }})
        </span>
      </div>
      <n-gradient-text type="info">
        // {{ isEqualObject(item.value1, item.value2) }}
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
