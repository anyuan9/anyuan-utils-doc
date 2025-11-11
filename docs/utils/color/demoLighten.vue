<script setup lang="ts">
import { ref } from "vue";
import { lighten } from "@anyuan/utils";

// lighten 测试数据
const lightenRes = ref<Array<{ label: string; value: any; level: number }>>([]);
lightenRes.value = [
  { label: "标准8位HEX", value: "#ff000080", level: 0.8 },
  { label: "标准6位HEX", value: "#ff0000", level: 0.8 },
  { label: "标准4位HEX", value: "#f008", level: 0.8 },
  { label: "标准3位HEX", value: "#f00", level: 0.8 }
  // { label: "不带#号", value: "00ff00", level: 0.8 }
  // { label: "无效HEX", value: "#zzzzzz", level: 0.8 },
  // { label: "空字符串", value: "", level: 0.8 }
];
</script>

<template>
  <naive-theme>
    <div
      v-for="(item, index) in lightenRes"
      :key="index"
      className="flex flex-col justify-center mt-2"
    >
      <div>
        <span className="font-bold">{{ item.label }}</span>
        <span className="ml-2">
          lighten("{{ item.value }}", {{ item.level }})
        </span>
      </div>
      <n-gradient-text type="info">
        // {{ lighten(item.value, item.level) }}
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
