<script setup lang="ts">
import { ref } from "vue";
import { randomMAC } from "@anyuan/utils";

// randomMAC 测试数据
const randomMACRes = ref<Array<{ label: string }>>([]);
randomMACRes.value = [
  { label: "随机MAC地址" },
  { label: "多次生成测试1" },
  { label: "多次生成测试2" },
  { label: "多次生成测试3" }
];
</script>

<template>
  <naive-theme>
    <div
      v-for="(item, index) in randomMACRes"
      :key="index"
      className="flex flex-col justify-center mt-2"
    >
      <div>
        <span className="font-bold">{{ item.label }}</span>
        <span className="ml-2">randomMAC() </span>
      </div>
      <n-gradient-text type="info"> // {{ randomMAC() }}</n-gradient-text>
    </div>
  </naive-theme>
</template>
