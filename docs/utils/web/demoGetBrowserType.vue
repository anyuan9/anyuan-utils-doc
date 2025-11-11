<script setup lang="ts">
import { ref } from "vue";
import { getBrowserType } from "@anyuan/utils";

// getBrowserType 测试数据
const getBrowserTypeRes = ref<Array<{ label: string }>>([]);
getBrowserTypeRes.value = [{ label: "当前浏览器信息" }];
</script>

<template>
  <naive-theme>
    <div
      v-for="(item, index) in getBrowserTypeRes"
      :key="index"
      className="flex flex-col justify-center mt-2"
    >
      <div>
        <span className="font-bold">{{ item.label }}</span>
        <span className="ml-2"> getBrowserType() </span>
      </div>
      <n-gradient-text type="info">
        // {{ JSON.stringify(getBrowserType()) }}</n-gradient-text
      >
    </div>
  </naive-theme>
</template>
