<script setup lang="ts">
import { ref } from "vue";
import { webMercatorToWgs84 } from "@anyuan/utils";

// webMercatorToWgs84 测试数据
const webMercatorToWgs84Res = ref<
  Array<{ label: string; lng: number; lat: number }>
>([]);
webMercatorToWgs84Res.value = [
  { label: "国内坐标-北京", lng: 12956617.463976296, lat: 4852498.056945309 },
  { label: "国内坐标-上海", lng: 13522272.873510284, lat: 3662877.2788554276 },
  { label: "国内坐标-广州", lng: 12618094.22460413, lat: 2646583.6732851327 },
  { label: "国外坐标-纽约", lng: -8238307.340193461, lat: 4970068.053770708 },
  { label: "国外坐标-伦敦", lng: -14221.955502787334, lat: 6711533.710943017 },
  {
    label: "边界测试-中国境外",
    lng: 8199793.690691111,
    lat: 430018.64355263306
  },
  { label: "零值测试", lng: 0, lat: -7.081154550627918e-10 }
];
</script>

<template>
  <naive-theme>
    <div
      v-for="(item, index) in webMercatorToWgs84Res"
      :key="index"
      className="flex flex-col justify-center mt-2"
    >
      <div>
        <span className="font-bold">{{ item.label }}</span>
        <span className="ml-2">
          webMercatorToWgs84({{ item.lng }}, {{ item.lat }})
        </span>
      </div>
      <n-gradient-text type="info">
        // {{ JSON.stringify(webMercatorToWgs84(item.lng, item.lat)) }}
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
