<script setup lang="ts">
import { ref } from "vue";
import { bd09ToWgs84 } from "@anyuan/utils";

// bd09ToWgs84 测试数据
const bd09ToWgs84Res = ref<Array<{ label: string; lng: number; lat: number }>>(
  []
);
bd09ToWgs84Res.value = [
  { label: "国内坐标-北京", lng: 116.40397292809531, lat: 39.914930922546716 },
  { label: "国内坐标-上海", lng: 121.4836645131092, lat: 31.23573779999825 },
  { label: "国内坐标-广州", lng: 113.36226559338377, lat: 23.123686279440186 },
  { label: "国外坐标-纽约", lng: -73.99960986849455, lat: 40.71856158630974 },

  { label: "国外坐标-伦敦", lng: -0.12140019240090336, lat: 51.51333065238338 },
  {
    label: "边界测试-中国境外",
    lng: 73.66927030850304,
    lat: 3.8654562620341935
  },
  { label: "零值测试", lng: 0.0065, lat: 0.006 }
];
</script>

<template>
  <naive-theme>
    <div
      v-for="(item, index) in bd09ToWgs84Res"
      :key="index"
      className="flex flex-col justify-center mt-2"
    >
      <div>
        <span className="font-bold">{{ item.label }}</span>
        <span className="ml-2">
          bd09ToWgs84({{ item.lng }}, {{ item.lat }})
        </span>
      </div>
      <n-gradient-text type="info">
        // {{ JSON.stringify(bd09ToWgs84(item.lng, item.lat)) }}
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
