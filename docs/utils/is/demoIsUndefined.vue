<script setup lang="ts">
import { ref } from "vue";
import { isUndefined } from "@anyuan/utils";

// isUndefined 测试数据
const isUndefinedRes = ref<Array<{ label: string; value: any }>>([]);
isUndefinedRes.value = [
  { label: "undefined", value: undefined },
  { label: "null", value: null },
  { label: "空字符串", value: "" },
  { label: "数字0", value: 0 },
  { label: "未定义变量", value: (() => {})() }
];
</script>

<template>
  <naive-theme>
    <div
      v-for="(item, index) in isUndefinedRes"
      :key="index"
      className="flex flex-col justify-center mt-2"
    >
      <div>
        <span className="font-bold">{{ item.label }}</span>
        <span className="ml-2">
          isUndefined({{ JSON.stringify(item.value) }})
        </span>
      </div>
      <n-gradient-text type="info">
        // {{ isUndefined(item.value) }}
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
