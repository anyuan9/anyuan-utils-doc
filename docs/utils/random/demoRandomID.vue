<script setup lang="ts">
import { ref } from "vue";
import { randomID } from "@anyuan/utils";

// randomID 测试数据
const randomIDRes = ref<Array<{ label: string }>>([]);
randomIDRes.value = [
  { label: "随机ID" },
  { label: "多次生成测试1" },
  { label: "多次生成测试2" },
  { label: "多次生成测试3" }
];
</script>

<template>
  <naive-theme>
    <div
      v-for="(item, index) in randomIDRes"
      :key="index"
      className="flex flex-col justify-center mt-2"
    >
      <div>
        <span className="font-bold">{{ item.label }}</span>
        <span className="ml-2">randomID() </span>
      </div>
      <n-gradient-text type="info"> // {{ randomID() }}</n-gradient-text>
    </div>
  </naive-theme>
</template>
