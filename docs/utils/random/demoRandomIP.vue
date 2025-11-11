<script setup lang="ts">
import { ref } from "vue";
import { randomIP } from "@anyuan/utils";

// randomIP 测试数据
const randomIPRes = ref<Array<{ label: string }>>([]);
randomIPRes.value = [
  { label: "随机IP地址" },
  { label: "多次生成测试1" },
  { label: "多次生成测试2" },
  { label: "多次生成测试3" }
];
</script>

<template>
  <naive-theme>
    <div
      v-for="(item, index) in randomIPRes"
      :key="index"
      className="flex flex-col justify-center mt-2"
    >
      <div>
        <span className="font-bold">{{ item.label }}</span>
        <span className="ml-2">randomIP() </span>
      </div>
      <n-gradient-text type="info"> // {{ randomIP() }} </n-gradient-text>
    </div>
  </naive-theme>
</template>
