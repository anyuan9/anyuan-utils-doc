<script setup lang="ts">
import { ref } from "vue";
import { isOutOfChina } from "@anyuan/utils";

// isOutOfChina 测试数据
const isOutOfChinaRes = ref<Array<{ label: string; lng: number; lat: number }>>(
  []
);
isOutOfChinaRes.value = [
  { label: "北京", lng: 116.4, lat: 39.9 },
  { label: "上海", lng: 121.47, lat: 31.23 },
  { label: "台湾", lng: 121.5, lat: 25.05 },
  { label: "香港", lng: 114.1, lat: 22.2 },
  { label: "澳门", lng: 113.5, lat: 22.2 },
  { label: "纽约", lng: -74.0, lat: 40.71 },
  { label: "伦敦", lng: -0.12, lat: 51.51 },
  { label: "悉尼", lng: 151.2, lat: -33.87 },
  { label: "无效坐标", lng: null, lat: null }
];
</script>

<template>
  <naive-theme>
    <div
      v-for="(item, index) in isOutOfChinaRes"
      :key="index"
      className="flex flex-col justify-center mt-2"
    >
      <div>
        <span className="font-bold">{{ item.label }}</span>
        <span className="ml-2"> isOutOfChina({{ (item.lng, item.lat) }})</span>
      </div>
      <n-gradient-text type="info">
        // {{ isOutOfChina(item.lng, item.lat) }}
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
