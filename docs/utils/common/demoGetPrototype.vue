<script setup lang="ts">
import { ref } from "vue";
import { getPrototype } from "@anyuan/utils";

// getPrototype 测试数据
const getPrototypeRes = ref<Array<{ label: string; value: any }>>([]);
getPrototypeRes.value = [
  { label: "字符串", value: "hello" },
  { label: "数字", value: 123 },
  { label: "布尔值", value: true },
  { label: "undefined", value: undefined },
  { label: "null", value: null },
  { label: "Symbol", value: Symbol("test") },
  { label: "对象", value: { a: 1 } },
  { label: "数组", value: [1, 2, 3] },
  { label: "函数", value: function () {} },
  { label: "异步函数", value: async function () {} },
  { label: "Set", value: new Set([1, 2, 3]) },
  { label: "Map", value: new Map([["a", 1]]) },
  { label: "Date", value: new Date() },
  { label: "正则表达式", value: /test/ },
  { label: "错误对象", value: new Error("test") },
  {
    label: "参数对象",
    value: (function () {
      return arguments;
    })()
  },
  { label: "ArrayBuffer", value: new ArrayBuffer(8) },
  { label: "File", value: new File([], "test.txt") },
  { label: "Blob", value: new Blob() },
  { label: "Promise", value: Promise.resolve() }
];
</script>

<template>
  <naive-theme>
    <div
      v-for="(item, index) in getPrototypeRes"
      :key="index"
      className="flex flex-col justify-center mt-2"
    >
      <div>
        <span className="font-bold">{{ item.label }}</span>
        <span className="ml-2">
          getPrototype({{ JSON.stringify(item.value) }})
        </span>
      </div>
      <n-gradient-text type="info">
        //
        {{ getPrototype(item.value) }}
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
