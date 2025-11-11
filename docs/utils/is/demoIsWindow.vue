<script setup lang="ts">
import { ref } from "vue";
import { isWindow } from "@anyuan/utils";

// isWindow 测试数据
const isWindowRes = ref<Array<{ label: string; value: any }>>([]);
isWindowRes.value = [
  { label: "window对象", value: window },
  { label: "document对象", value: document },
  { label: "普通对象", value: {} },
  { label: "null", value: null }
];
</script>

<template>
  <naive-theme>
    <div
      v-for="(item, index) in isWindowRes"
      :key="index"
      className="flex flex-col justify-center mt-2"
    >
      <div>
        <span className="font-bold">{{ item.label }}</span>
        <span className="ml-2"> isWindow({{ item.value }}) </span>
      </div>
      <n-gradient-text type="info">
        // {{ isWindow(item.value) }}
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
