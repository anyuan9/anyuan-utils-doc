<script setup lang="ts">
import { ref } from "vue";
import { isSymbol } from "@anyuan/utils";

// isSymbol 测试数据
const isSymbolRes = ref<Array<{ label: string; value: any }>>([]);
isSymbolRes.value = [
  { label: "Symbol", value: Symbol("test") },
  { label: "字符串", value: "symbol" },
  { label: "数字", value: 123 },
  { label: "Symbol.iterator", value: Symbol.iterator }
];
</script>

<template>
  <naive-theme>
    <div
      v-for="(item, index) in isSymbolRes"
      :key="index"
      className="flex flex-col justify-center mt-2"
    >
      <div>
        <span className="font-bold">{{ item.label }}</span>
        <span className="ml-2">
          isSymbol({{
            typeof item.value === "symbol"
              ? "Symbol()"
              : JSON.stringify(item.value)
          }})
        </span>
      </div>
      <n-gradient-text type="info">
        // {{ isSymbol(item.value) }}
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
