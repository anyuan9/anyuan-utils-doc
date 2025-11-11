<script setup lang="ts">
import { ref } from "vue";
import { toArray } from "@anyuan/utils";

const toArrayData = ref([
  { label: "空值", value: null },
  { label: "undefined", value: undefined },
  { label: "空数组", value: [] },
  { label: "单个元素", value: 1 },
  { label: "数组", value: [1, 2, 3] },
  { label: "字符串", value: "hello" }
]);
</script>

<template>
  <naive-theme>
    <div
      v-for="(item, index) in toArrayData"
      :key="index"
      className="flex flex-col justify-center mt-2"
    >
      <div>
        <span className="font-bold">{{ item.label }}</span>
        <span className="ml-2">toArray({{ JSON.stringify(item.value) }})</span>
      </div>
      <n-gradient-text type="info">
        //
        {{ JSON.stringify(toArray(item.value)) }}
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
