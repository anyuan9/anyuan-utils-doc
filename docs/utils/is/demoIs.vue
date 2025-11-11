<script setup lang="ts">
import { ref } from "vue";
import { is } from "@anyuan/utils";

// is 测试数据
const isRes = ref<Array<{ label: string; value: any; type: string }>>([]);
isRes.value = [
  { label: "字符串", value: "hello", type: "String" },
  { label: "数字", value: 123, type: "Number" },
  { label: "布尔值", value: true, type: "Boolean" },
  { label: "数组", value: [1, 2, 3], type: "Array" },
  { label: "对象", value: { a: 1 }, type: "Object" },
  { label: "日期", value: new Date(), type: "Date" },
  { label: "null", value: null, type: "Null" },
  { label: "undefined", value: undefined, type: "Undefined" },
  { label: "错误类型匹配", value: "hello", type: "Number" }
];
</script>

<template>
  <naive-theme>
    <div
      v-for="(item, index) in isRes"
      :key="index"
      className="flex flex-col justify-center mt-2"
    >
      <div>
        <span className="font-bold">{{ item.label }}</span>
        <span className="ml-2">
          is({{ JSON.stringify(item.value) }}, "{{ item.type }}")
        </span>
      </div>
      <n-gradient-text type="info">
        // {{ is(item.value, item.type) }}
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
