<script setup lang="ts">
import { ref } from "vue";
import { getCsrfToken } from "@anyuan/utils";

// getCsrfToken 测试数据
const getCsrfTokenRes = ref<
  Array<{ label: string; headerName?: string; tokenName?: string }>
>([]);
getCsrfTokenRes.value = [
  { label: "默认参数" },
  { label: "自定义header名", headerName: "custom_header" },
  { label: "自定义token名", tokenName: "custom_token" },
  {
    label: "同时自定义",
    headerName: "custom_header",
    tokenName: "custom_token"
  }
];
</script>

<template>
  <naive-theme>
    <div
      v-for="(item, index) in getCsrfTokenRes"
      :key="index"
      className="flex flex-col justify-center mt-2"
    >
      <div>
        <span className="font-bold">{{ item.label }}</span>
        <span className="ml-2">
          getCsrfToken({{ item.headerName ? `"${item.headerName}"` : ""
          }}{{ item.headerName && item.tokenName ? ", " : ""
          }}{{ item.tokenName ? `"${item.tokenName}"` : "" }})
        </span>
      </div>
      <n-gradient-text type="info">
        // {{ JSON.stringify(getCsrfToken(item.headerName, item.tokenName)) }}
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
