<script setup lang="ts">
import { ref } from "vue";
import { isNaturalNumber } from "@anyuan/utils";

// isNaturalNumber 测试数据
const isNaturalNumberRes = ref<Array<{ label: string; value: any }>>([]);
isNaturalNumberRes.value = [
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
      v-for="(item, index) in isNaturalNumberRes"
      :key="index"
      className="flex flex-col justify-center mt-2"
    >
      <div>
        <span className="font-bold">{{ item.label }}</span>
        <span className="ml-2"> isNaturalNumber({{ item.value }}) </span>
      </div>
      <n-gradient-text type="info">
        // {{ isNaturalNumber(item.value) }}
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
