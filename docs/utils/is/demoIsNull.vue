<script setup lang="ts">
import { ref } from "vue";
import { isNull } from "@anyuan/utils";

// isNull 测试数据
const isNullRes = ref<Array<{ label: string; value: any }>>([]);
isNullRes.value = [
  { label: "null", value: null },
  { label: "undefined", value: undefined },
  { label: "空字符串", value: "" },
  { label: "数字0", value: 0 },
  { label: "空对象", value: {} }
];
</script>

<template>
  <naive-theme>
    <div
      v-for="(item, index) in isNullRes"
      :key="index"
      className="flex flex-col justify-center mt-2"
    >
      <div>
        <span className="font-bold">{{ item.label }}</span>
        <span className="ml-2"> isNull({{ JSON.stringify(item.value) }}) </span>
      </div>
      <n-gradient-text type="info">
        // {{ isNull(item.value) }}
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
