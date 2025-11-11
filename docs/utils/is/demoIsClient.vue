<script setup lang="ts">
import { ref } from "vue";
import { isClient } from "@anyuan/utils";

// isClient 测试数据
const isClientRes = ref<Array<{ label: string; value: any }>>([]);
isClientRes.value = [{ label: "客户端环境", value: "N/A" }];
</script>

<template>
  <naive-theme>
    <div
      v-for="(item, index) in isClientRes"
      :key="index"
      className="flex flex-col justify-center mt-2"
    >
      <div>
        <span className="font-bold">{{ item.label }}</span>
        <span className="ml-2">isClient() </span>
      </div>
      <n-gradient-text type="info"> // {{ isClient() }}</n-gradient-text>
    </div>
  </naive-theme>
</template>
