<script setup lang="ts">
import { ref } from "vue";
import { isBrowser } from "@anyuan/utils";

// isBrowser 测试数据
const isBrowserRes = ref<Array<{ label: string; value: any }>>([]);
isBrowserRes.value = [{ label: "浏览器环境", value: "N/A" }];
</script>

<template>
  <naive-theme>
    <div
      v-for="(item, index) in isBrowserRes"
      :key="index"
      className="flex flex-col justify-center mt-2"
    >
      <div>
        <span className="font-bold">{{ item.label }}</span>
        <span className="ml-2">isBrowser() </span>
      </div>
      <n-gradient-text type="info"> // {{ isBrowser() }}</n-gradient-text>
    </div>
  </naive-theme>
</template>
