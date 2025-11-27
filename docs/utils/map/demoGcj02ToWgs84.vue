<script setup lang="ts">
import { ref } from "vue";
import { gcj02ToWgs84 } from "@anyuan/utils";

// gcj02ToWgs84 测试数据
const gcj02ToWgs84Res = ref<Array<{ label: string; lng: number; lat: number }>>(
  []
);
gcj02ToWgs84Res.value = [
  { label: "国内坐标-北京", lng: 116.39751615842819, lat: 39.90882226073803 },
  { label: "国内坐标-上海", lng: 121.47717059848272, lat: 31.229767205299222 },
  { label: "国内坐标-广州", lng: 113.35574231748215, lat: 23.117836621689477 },
  { label: "国外坐标-纽约", lng: -74.005974, lat: 40.712776 },
  { label: "国外坐标-伦敦", lng: -0.127758, lat: 51.507351 },
  {
    label: "边界测试-中国境外",
    lng: 73.66278451577757,
    lat: 3.859348557624419
  },
  { label: "零值测试", lng: 0, lat: 0 }
];
</script>

<template>
  <naive-theme>
    <div
      v-for="(item, index) in gcj02ToWgs84Res"
      :key="index"
      className="flex flex-col justify-center mt-2"
    >
      <div>
        <span className="font-bold">{{ item.label }}</span>
        <span className="ml-2">
          gcj02ToWgs84({{ item.lng }}, {{ item.lat }})
        </span>
      </div>
      <n-gradient-text type="info">
        // {{ gcj02ToWgs84(item.lng, item.lat) }}
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
