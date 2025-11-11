<script setup lang="ts">
import { ref } from "vue";
import { isFloat } from "@anyuan/utils";

// isFloat 测试数据
const isFloatRes = ref<Array<{ label: string; value: any }>>([]);
isFloatRes.value = [
  { label: "浮点数", value: 3.14 },
  { label: "负浮点数", value: -2.5 },
  { label: "整数", value: 123 },
  { label: "字符串浮点数", value: "3.14" },
  { label: "零", value: 0 },
  { label: "NaN", value: NaN },
  { label: "Infinity", value: Infinity },
  { label: "null", value: null }
];
</script>

<template>
  <naive-theme>
    <div
      v-for="(item, index) in isFloatRes"
      :key="index"
      className="flex flex-col justify-center mt-2"
    >
      <div>
        <span className="font-bold">{{ item.label }}</span>
        <span className="ml-2"> isFloat({{ item.value }}) </span>
      </div>
      <n-gradient-text type="info">
        // {{ isFloat(item.value) }}
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
