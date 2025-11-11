<script setup lang="ts">
import { ref } from "vue";
import { isMap } from "@anyuan/utils";

// isMap 测试数据
const isMapRes = ref<Array<{ label: string; value: any }>>([]);
isMapRes.value = [
  { label: "Map对象", value: new Map() },
  { label: "普通对象", value: { a: 1 } },
  { label: "Set对象", value: new Set() },
  { label: "数组", value: [] }
];
</script>

<template>
  <naive-theme>
    <div
      v-for="(item, index) in isMapRes"
      :key="index"
      className="flex flex-col justify-center mt-2"
    >
      <div>
        <span className="font-bold">{{ item.label }}</span>
        <span className="ml-2">
          isMap({{
            item.value instanceof Map ? "Map" : JSON.stringify(item.value)
          }})
        </span>
      </div>
      <n-gradient-text type="info">
        // {{ isMap(item.value) }}
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
