<script setup lang="ts">
import { ref } from "vue";
import { hasOwnProp } from "@anyuan/utils";

// hasOwnProp 测试数据
const hasOwnPropRes = ref<Array<{ label: string; obj: any; key: any }>>([]);
hasOwnPropRes.value = [
  { label: "普通对象自有属性", obj: { a: 1, b: 2 }, key: "a" },
  { label: "普通对象非自有属性", obj: { a: 1, b: 2 }, key: "toString" },
  { label: "数组自有属性", obj: [1, 2, 3], key: "0" },
  { label: "数组长度属性", obj: [1, 2, 3], key: "length" },
  { label: "原型链属性", obj: {}, key: "toString" },
  { label: "null对象", obj: null, key: "a" },
  { label: "undefined对象", obj: undefined, key: "a" },
  { label: "字符串对象", obj: "hello", key: "0" },
  { label: "数字对象", obj: 123, key: "toString" }
];
</script>

<template>
  <naive-theme>
    <div
      v-for="(item, index) in hasOwnPropRes"
      :key="index"
      className="flex flex-col justify-center mt-2"
    >
      <div>
        <span className="font-bold">{{ item.label }}</span>
        <span className="ml-2">
          hasOwnProp({{ JSON.stringify(item.obj) }}, "{{ item.key }}")
        </span>
      </div>
      <n-gradient-text type="info">
        // {{ hasOwnProp(item.obj, item.key) }}
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
