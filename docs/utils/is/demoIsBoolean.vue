<script setup lang="ts">
import { ref } from "vue";
import { isBoolean } from "@anyuan/utils";

// isBoolean 测试数据
const isBooleanRes = ref<Array<{ label: string; value: any }>>([]);
isBooleanRes.value = [
  { label: "true", value: true },
  { label: "false", value: false },
  { label: "字符串'true'", value: "true" },
  { label: "数字1", value: 1 },
  { label: "空对象", value: {} },
  { label: "null", value: null }
];
</script>

<template>
  <naive-theme>
    <div
      v-for="(item, index) in isBooleanRes"
      :key="index"
      className="flex flex-col justify-center mt-2"
    >
      <div>
        <span className="font-bold">{{ item.label }}</span>
        <span className="ml-2">
          isBoolean({{ JSON.stringify(item.value) }})
        </span>
      </div>
      <n-gradient-text type="info">
        // {{ isBoolean(item.value) }}
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
