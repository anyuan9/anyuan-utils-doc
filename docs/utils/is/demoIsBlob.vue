<script setup lang="ts">
import { ref } from "vue";
import { isBlob } from "@anyuan/utils";

// isBlob 测试数据
const isBlobRes = ref<Array<{ label: string; value: any }>>([]);
isBlobRes.value = [
  { label: "Blob对象", value: new Blob() },
  { label: "File对象", value: new File([], "test.txt") },
  { label: "普通对象", value: {} },
  { label: "字符串", value: "blob data" }
];
</script>

<template>
  <naive-theme>
    <div
      v-for="(item, index) in isBlobRes"
      :key="index"
      className="flex flex-col justify-center mt-2"
    >
      <div>
        <span className="font-bold">{{ item.label }}</span>
        <span className="ml-2"> isBlob({{ JSON.stringify(item.value) }}) </span>
      </div>
      <n-gradient-text type="info">
        // {{ isBlob(item.value) }}
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
