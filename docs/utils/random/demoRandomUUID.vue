<script setup lang="ts">
import { ref } from "vue";
import { randomUUID } from "@anyuan/utils";

// randomUUID 测试数据
const randomUUIDRes = ref<Array<{ label: string }>>([]);
randomUUIDRes.value = [
  { label: "随机UUID" },
  { label: "多次生成测试1" },
  { label: "多次生成测试2" },
  { label: "多次生成测试3" }
];
</script>

<template>
  <naive-theme>
    <div
      v-for="(item, index) in randomUUIDRes"
      :key="index"
      className="flex flex-col justify-center mt-2"
    >
      <div>
        <span className="font-bold">{{ item.label }}</span>
        <span className="ml-2">randomUUID() </span>
      </div>
      <n-gradient-text type="info"> // {{ randomUUID() }}</n-gradient-text>
    </div>
  </naive-theme>
</template>
