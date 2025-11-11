<script setup lang="ts">
import { ref } from "vue";
import { isSet } from "@anyuan/utils";

// isSet 测试数据
const isSetRes = ref<Array<{ label: string; value: any }>>([]);
isSetRes.value = [
  { label: "Set对象", value: new Set([1, 2, 3]) },
  { label: "数组", value: [1, 2, 3] },
  { label: "Map对象", value: new Map() },
  { label: "对象", value: { a: 1 } }
];
</script>

<template>
  <naive-theme>
    <div
      v-for="(item, index) in isSetRes"
      :key="index"
      className="flex flex-col justify-center mt-2"
    >
      <div>
        <span className="font-bold">{{ item.label }}</span>
        <span className="ml-2">
          isSet({{
            item.value instanceof Set ? "Set" : JSON.stringify(item.value)
          }})
        </span>
      </div>
      <n-gradient-text type="info">
        // {{ isSet(item.value) }}
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
