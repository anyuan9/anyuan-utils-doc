<script setup lang="ts">
import { ref } from "vue";
import { isNumber } from "@anyuan/utils";

// isNumber 测试数据
const isNumberRes = ref<Array<{ label: string; value: any }>>([]);
isNumberRes.value = [
  { label: "整数", value: 123 },
  { label: "浮点数", value: 3.14 },
  { label: "数字字符串", value: "123" },
  { label: "NaN", value: NaN },
  { label: "Infinity", value: Infinity },
  { label: "null", value: null }
];
</script>

<template>
  <naive-theme>
    <div
      v-for="(item, index) in isNumberRes"
      :key="index"
      className="flex flex-col justify-center mt-2"
    >
      <div>
        <span className="font-bold">{{ item.label }}</span>
        <span className="ml-2"> isNumber({{ item.value }}) </span>
      </div>
      <n-gradient-text type="info">
        // {{ isNumber(item.value) }}
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
