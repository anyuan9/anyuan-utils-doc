<script setup lang="ts">
import { ref } from "vue";
import * as echarts from "echarts/core";
import themeCustom from "./custom-theme.json";
import { useECharts } from "@anyuan/utils";

// 主题
let theme = "custom"; // "dark", "default";

// 初始化ECharts
const chartRef = ref();
// 第一种注册自定义主题的方法，使用 registerTheme 方法，此方法更适合业务，全局注册后，只需在 theme 属性添加自定义的主题字符串即可
const { setOption } = useECharts(chartRef, { theme });
echarts.registerTheme("custom", themeCustom);

// 第二种注册自定义主题的方法，将主题 json 文件直接赋值给 theme 属性
// const { setOption } = useECharts(chartRef, {
//   theme: themeCustom as any
// })

// 根据配置项渲染ECharts
setOption({
  tooltip: {},
  legend: {
    top: 10,
    left: "left",
    data: ["支出", "收入"]
  },
  radar: {
    radius: "60%",
    indicator: [
      { name: "周一" },
      { name: "周二" },
      { name: "周三" },
      { name: "周四" },
      { name: "周五" }
    ]
  },
  series: [
    {
      name: "Budget vs spending",
      type: "radar",
      data: [
        {
          value: [30, 60, 90, 120, 150],
          name: "支出"
        },
        {
          value: [60, 90, 120, 150, 180],
          name: "收入"
        }
      ]
    }
  ]
});
</script>

<template>
  <div ref="chartRef" style="width: 100%; height: 35vh" />
</template>
