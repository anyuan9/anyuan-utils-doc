<script setup lang="ts">
import { ref } from "vue";
import { clone } from "@anyuan/utils";

// clone 测试数据
const cloneRes = ref<Array<{ label: string; value: any; deep?: boolean }>>([]);
cloneRes.value = [
  { label: "浅拷贝对象", value: { a: 1, b: { c: 2 } } },
  { label: "浅拷贝数组", value: [1, 2, [3, 4]] },
  { label: "深拷贝对象", value: { a: 1, b: { c: 2 } }, deep: true },
  { label: "深拷贝数组", value: [1, 2, [3, 4]], deep: true },
  { label: "基本类型", value: "hello" },
  { label: "null", value: null },
  { label: "undefined", value: undefined },
  { label: "日期对象", value: new Date(), deep: true },
  { label: "正则表达式", value: /test/g, deep: true }
];
</script>

<template>
  <naive-theme>
    <div
      v-for="(item, index) in cloneRes"
      :key="index"
      className="flex flex-col justify-center mt-2"
    >
      <div>
        <span className="font-bold">{{ item.label }}</span>
        <span className="ml-2">
          clone({{ JSON.stringify(item.value) }}{{ item.deep ? ", true" : "" }})
        </span>
      </div>
      <n-gradient-text type="info">
        // {{ JSON.stringify(clone(item.value, item.deep)) }}
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
