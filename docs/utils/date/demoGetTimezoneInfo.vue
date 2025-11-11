<script setup lang="ts">
import { ref } from "vue";
import { getTimezoneInfo } from "@anyuan/utils";

// getTimezoneInfo 测试数据
const getTimezoneInfoRes = ref<Array<{ label: string }>>([]);
getTimezoneInfoRes.value = [{ label: "本地时区信息" }];
</script>

<template>
  <naive-theme>
    <div
      v-for="(item, index) in getTimezoneInfoRes"
      :key="index"
      className="flex flex-col justify-center mt-2"
    >
      <div>
        <span className="font-bold">{{ item.label }}</span>
        <span className="ml-2"> getTimezoneInfo() </span>
      </div>
      <n-gradient-text type="info">
        // {{ getTimezoneInfo() }}
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
