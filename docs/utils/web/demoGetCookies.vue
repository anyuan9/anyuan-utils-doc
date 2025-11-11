<script setup lang="ts">
import { ref } from "vue";
import { getCookies } from "@anyuan/utils";

// getCookies 测试数据
const getCookiesRes = ref<Array<{ label: string }>>([]);
getCookiesRes.value = [{ label: "当前页面所有Cookie" }];
</script>

<template>
  <naive-theme>
    <div
      v-for="(item, index) in getCookiesRes"
      :key="index"
      className="flex flex-col justify-center mt-2"
    >
      <div>
        <span className="font-bold">{{ item.label }}</span>
        <span className="ml-2"> getCookies() </span>
      </div>
      <n-gradient-text type="info">
        // {{ JSON.stringify(getCookies()) }}</n-gradient-text
      >
    </div>
  </naive-theme>
</template>
