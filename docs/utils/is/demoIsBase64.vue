<script setup lang="ts">
import { ref } from "vue";
import { isBase64 } from "@anyuan/utils";

// isBase64 测试数据
const isBase64Res = ref<Array<{ label: string; value: any }>>([]);
isBase64Res.value = [
  { label: "有效Base64", value: "SGVsbG8gV29ybGQ=" },
  { label: "无效Base64", value: "Hello World" },
  { label: "数据URI", value: "data:text/plain;base64,SGVsbG8=" },
  { label: "空字符串", value: "" }
];
</script>

<template>
  <naive-theme>
    <div
      v-for="(item, index) in isBase64Res"
      :key="index"
      className="flex flex-col justify-center mt-2"
    >
      <div>
        <span className="font-bold">{{ item.label }}</span>
        <span className="ml-2">
          isBase64({{ JSON.stringify(item.value) }})
        </span>
      </div>
      <n-gradient-text type="info">
        // {{ isBase64(item.value) }}
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
