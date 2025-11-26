<script setup lang="ts">
import { ref } from "vue";
import { gcj02ToWgs84 } from "@anyuan/utils";

// gcj02ToWgs84 测试数据
const gcj02ToWgs84Res = ref<Array<{ label: string; lng: number; lat: number }>>(
  []
);
gcj02ToWgs84Res.value = [
  { label: "北京坐标", lng: 116.403875, lat: 39.915168 },
  { label: "上海坐标", lng: 121.480237, lat: 31.236305 },
  { label: "广州坐标", lng: 113.264434, lat: 23.129163 },
  { label: "深圳坐标", lng: 114.057939, lat: 22.543527 },
  { label: "边界测试1", lng: 73.66, lat: 3.86 },
  { label: "边界测试2", lng: 135.05, lat: 53.55 },
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
