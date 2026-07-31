<script setup lang="ts">
import { ref } from "vue";
import { isInWgs84 } from "@anyuan/utils";

// isInWgs84 测试数据
const isInWgs84Res = ref<Array<{ label: string; lng: number; lat: number }>>(
  []
);
isInWgs84Res.value = [
  { label: "北京", lng: 116.4, lat: 39.9 },
  { label: "上海", lng: 121.47, lat: 31.23 },
  { label: "台湾", lng: 121.5, lat: 25.05 },
  { label: "无效坐标", lng: null, lat: null }
];
</script>

<template>
  <naive-theme>
    <div
      v-for="(item, index) in isInWgs84Res"
      :key="index"
      className="flex flex-col justify-center mt-2"
    >
      <div>
        <span className="font-bold">{{ item.label }}</span>
        <span className="ml-2"> isInWgs84({{ item.lng }}, {{ item.lat }})</span>
      </div>
      <n-gradient-text type="info">
        // {{ isInWgs84(item.lng, item.lat) }}
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
