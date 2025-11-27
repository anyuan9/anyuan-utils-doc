<script setup lang="ts">
import { ref } from "vue";
import { type CoordinateSystem, transformCoord } from "@anyuan/utils";

// transformCoord 测试数据
const transformCoordRes = ref<
  Array<{
    label: string;
    lng: number;
    lat: number;
    from: CoordinateSystem;
    to: CoordinateSystem;
  }>
>([]);
transformCoordRes.value = [
  {
    label: "国内坐标-北京",
    lng: 116.391275,
    lat: 39.907421,
    from: "WGS84",
    to: "GCJ02"
  },
  {
    label: "国内坐标-北京",
    lng: 116.39751615842819,
    lat: 39.90882226073803,
    from: "GCJ02",
    to: "WGS84"
  },
  {
    label: "国内坐标-北京",
    lng: 116.391275,
    lat: 39.907421,
    from: "WGS84",
    to: "BD09"
  },
  {
    label: "国内坐标-北京",
    lng: 116.40397292809531,
    lat: 39.914930922546716,
    from: "BD09",
    to: "WGS84"
  },
  {
    label: "国内坐标-北京",
    lng: 116.39751615842819,
    lat: 39.90882226073803,
    from: "GCJ02",
    to: "BD09"
  },
  {
    label: "国内坐标-北京",
    lng: 116.40397292809531,
    lat: 39.914930922546716,
    from: "BD09",
    to: "GCJ02"
  },
  {
    label: "国内坐标-北京",
    lng: 116.391275,
    lat: 39.907421,
    from: "WGS84",
    to: "WebMercator"
  },
  {
    label: "国内坐标-北京",
    lng: 12956617.463976296,
    lat: 4852498.056945309,
    from: "WebMercator",
    to: "WGS84"
  },
  {
    label: "国内坐标-北京",
    lng: 116.39751615842819,
    lat: 39.90882226073803,
    from: "GCJ02",
    to: "WebMercator"
  },
  {
    label: "国内坐标-北京",
    lng: 12956617.463976188,
    lat: 4852498.056945195,
    from: "WebMercator",
    to: "GCJ02"
  },
  {
    label: "国内坐标-北京",
    lng: 116.40397292809531,
    lat: 39.914930922546716,
    from: "BD09",
    to: "WebMercator"
  },
  {
    label: "国内坐标-北京",
    lng: 12956617.465003679,
    lat: 4852498.05010808,
    from: "WebMercator",
    to: "BD09"
  }
];
</script>

<template>
  <naive-theme>
    <div
      v-for="(item, index) in transformCoordRes"
      :key="index"
      className="flex flex-col justify-center mt-2"
    >
      <div>
        <span className="font-bold">{{ item.label }}</span>
        <span className="ml-2">
          transformCoord({{ item.lng }}, {{ item.lat }}, {{ item.from }},
          {{ item.to }})
        </span>
      </div>
      <n-gradient-text type="info">
        //
        {{
          JSON.stringify(transformCoord(item.lng, item.lat, item.from, item.to))
        }}
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
