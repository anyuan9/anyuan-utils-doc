<script setup lang="ts">
import { ref } from "vue";
import { isArrayLength } from "@anyuan/utils";

// isArrayLength 测试数据
const isArrayLengthRes = ref<Array<{ label: string; value: any }>>([]);
isArrayLengthRes.value = [
  { label: "有效长度", value: 5 },
  { label: "零", value: 0 },
  { label: "负数", value: -1 },
  { label: "浮点数", value: 3.14 },
  { label: "超大数", value: Number.MAX_SAFE_INTEGER + 1 },
  { label: "字符串数字", value: "5" }
];
</script>

<template>
  <naive-theme>
    <div
      v-for="(item, index) in isArrayLengthRes"
      :key="index"
      className="flex flex-col justify-center mt-2"
    >
      <div>
        <span className="font-bold">{{ item.label }}</span>
        <span className="ml-2">
          isArrayLength({{ JSON.stringify(item.value) }})
        </span>
      </div>
      <n-gradient-text type="info">
        // {{ isArrayLength(item.value) }}
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
