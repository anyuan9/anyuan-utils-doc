<script setup lang="ts">
import { ref } from "vue";
import { gcj02ToBd09 } from "@anyuan/utils";

// gcj02ToBd09 测试数据
const gcj02ToBd09Res = ref<Array<{ label: string; lng: number; lat: number }>>(
  []
);
gcj02ToBd09Res.value = [
  { label: "北京坐标", lng: 116.391275, lat: 39.907421 },
  { label: "上海坐标", lng: 121.472644, lat: 31.231706 },
  { label: "广州坐标", lng: 113.350269, lat: 23.120385 },
  { label: "深圳坐标", lng: 114.025974, lat: 22.546054 },
  { label: "边界测试1", lng: 73.66, lat: 3.86 },
  { label: "边界测试2", lng: 135.05, lat: 53.55 },
  { label: "零值测试", lng: 0, lat: 0 }
];
</script>

<template>
  <naive-theme>
    <div
      v-for="(item, index) in gcj02ToBd09Res"
      :key="index"
      className="flex flex-col justify-center mt-2"
    >
      <div>
        <span className="font-bold">{{ item.label }}</span>
        <span className="ml-2">
          gcj02ToBd09({{ item.lng }}, {{ item.lat }})
        </span>
      </div>
      <n-gradient-text type="info">
        // {{ JSON.stringify(gcj02ToBd09(item.lng, item.lat)) }}
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
