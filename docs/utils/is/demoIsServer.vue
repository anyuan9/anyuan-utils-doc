<script setup lang="ts">
import { ref } from "vue";
import { isServer } from "@anyuan/utils";

// isServer 测试数据
const isServerRes = ref<Array<{ label: string; value: any }>>([]);
isServerRes.value = [{ label: "服务端环境", value: "N/A" }];
</script>

<template>
  <naive-theme>
    <div
      v-for="(item, index) in isServerRes"
      :key="index"
      className="flex flex-col justify-center mt-2"
    >
      <div>
        <span className="font-bold">{{ item.label }}</span>
        <span className="ml-2">isServer() </span>
      </div>
      <n-gradient-text type="info"> // {{ isServer() }}</n-gradient-text>
    </div>
  </naive-theme>
</template>
