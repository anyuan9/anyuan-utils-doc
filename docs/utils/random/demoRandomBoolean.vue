<script setup lang="ts">
import { ref } from "vue";
import { randomBoolean } from "@anyuan/utils";

// randomBoolean 测试数据
const randomBooleanRes = ref<Array<{ label: string; rate?: number }>>([]);
randomBooleanRes.value = [
  { label: "默认概率(0.5)", rate: 0.5 },
  { label: "高概率(小于0.8)", rate: 0.8 },
  { label: "低概率(小于0.2)", rate: 0.2 },
  { label: "总是true(小于1.0)", rate: 1.0 },
  { label: "总是false(小于0.0)", rate: 0.0 },
  { label: "负概率(小于负数)", rate: -0.5 },
  { label: "总是false(小于NaN)", rate: NaN },
  { label: "总是true(小于无穷大)", rate: Infinity },
  { label: "总是false(小于负无穷大)", rate: -Infinity }
];
</script>

<template>
  <naive-theme>
    <div
      v-for="(item, index) in randomBooleanRes"
      :key="index"
      className="flex flex-col justify-center mt-2"
    >
      <div>
        <span className="font-bold">{{ item.label }}</span>
        <span className="ml-2">
          randomBoolean({{ item.rate !== undefined ? item.rate : "" }})
        </span>
      </div>
      <n-gradient-text type="info">
        // {{ randomBoolean(item.rate) }}
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
