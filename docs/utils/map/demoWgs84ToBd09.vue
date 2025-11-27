<script setup lang="ts">
import { ref } from "vue";
import { wgs84ToBd09 } from "@anyuan/utils";

// wgs84ToBd09 测试数据
const wgs84ToBd09Res = ref<Array<{ label: string; lng: number; lat: number }>>(
  []
);
wgs84ToBd09Res.value = [
  { label: "国内坐标-北京", lng: 116.391275, lat: 39.907421 },
  { label: "国内坐标-上海", lng: 121.472644, lat: 31.231706 },
  { label: "国内坐标-广州", lng: 113.350269, lat: 23.120385 },
  { label: "国外坐标-纽约", lng: -74.005974, lat: 40.712776 },
  { label: "国外坐标-伦敦", lng: -0.127758, lat: 51.507351 },
  { label: "边界测试-中国境外", lng: 73.66, lat: 3.86 },
  { label: "零值测试", lng: 0, lat: 0 }
];
</script>

<template>
  <naive-theme>
    <div
      v-for="(item, index) in wgs84ToBd09Res"
      :key="index"
      className="flex flex-col justify-center mt-2"
    >
      <div>
        <span className="font-bold">{{ item.label }}</span>
        <span className="ml-2">
          wgs84ToBd09({{ item.lng }}, {{ item.lat }})
        </span>
      </div>
      <n-gradient-text type="info">
        // {{ JSON.stringify(wgs84ToBd09(item.lng, item.lat)) }}
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
