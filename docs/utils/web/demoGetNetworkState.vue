<script setup lang="ts">
import { ref } from "vue";
import { getNetworkState } from "@anyuan/utils";

// getNetworkState 测试数据
const getNetworkStateRes = ref<Array<{ label: string }>>([]);
getNetworkStateRes.value = [{ label: "当前网络状态" }];
</script>

<template>
  <naive-theme>
    <div
      v-for="(item, index) in getNetworkStateRes"
      :key="index"
      className="flex flex-col justify-center mt-2"
    >
      <div>
        <span className="font-bold">{{ item.label }}</span>
        <span className="ml-2"> getNetworkState() </span>
      </div>
      <n-gradient-text type="info">
        // {{ JSON.stringify(getNetworkState()) }}
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
