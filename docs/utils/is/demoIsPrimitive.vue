<script setup lang="ts">
import { ref } from "vue";
import { isPrimitive } from "@anyuan/utils";

// isPrimitive 测试数据
const isPrimitiveRes = ref<Array<{ label: string; value: any }>>([]);
isPrimitiveRes.value = [
  { label: "字符串", value: "hello" },
  { label: "数字", value: 123 },
  { label: "布尔值", value: true },
  { label: "null", value: null },
  { label: "undefined", value: undefined },
  { label: "Symbol", value: Symbol() },
  { label: "对象", value: {} },
  { label: "数组", value: [] },
  { label: "函数", value: () => {} },
  { label: "Date对象", value: new Date() }
];
</script>

<template>
  <naive-theme>
    <div
      v-for="(item, index) in isPrimitiveRes"
      :key="index"
      className="flex flex-col justify-center mt-2"
    >
      <div>
        <span className="font-bold">{{ item.label }}</span>
        <span className="ml-2">
          isPrimitive({{ JSON.stringify(item.value) }})
        </span>
      </div>
      <n-gradient-text type="info">
        // {{ isPrimitive(item.value) }}
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
