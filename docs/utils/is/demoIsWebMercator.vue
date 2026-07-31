<script setup lang="ts">
import { ref } from "vue";
import { isWebMercator } from "@anyuan/utils";

// isWebMercator 测试数据
const isWebMercatorRes = ref<Array<{ label: string; lng: number; lat: number }>>(
  []
);
isWebMercatorRes.value = [
  { label: "北京", lng: 12958162, lat: 4852834 },
  { label: "上海", lng: 13523925, lat: 3663029 },
  { label: "台湾", lng: 13531447, lat: 2875744 },
  { label: "无效坐标", lng: null, lat: null }
];
</script>

<template>
  <naive-theme>
    <div
      v-for="(item, index) in isWebMercatorRes"
      :key="index"
      className="flex flex-col justify-center mt-2"
    >
      <div>
        <span className="font-bold">{{ item.label }}</span>
        <span className="ml-2"> isWebMercator({{ item.lng }}, {{ item.lat }})</span>
      </div>
      <n-gradient-text type="info">
        // {{ isWebMercator(item.lng, item.lat) }}
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
