<script setup lang="ts">
import { ref } from "vue";
import { arrayShuffle } from "@anyuan/utils";

const arrayShuffleData = ref([
  { label: "数字数组", value: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] },
  { label: "字符串数组", value: ["a", "b", "c", "d", "e"] },
  { label: "混合数组", value: [1, "a", 2, "b", 3, "c"] }
]);
</script>

<template>
  <naive-theme>
    <div
      v-for="(item, index) in arrayShuffleData"
      :key="index"
      className="flex flex-col justify-center mt-2"
    >
      <div>
        <span className="font-bold">{{ item.label }}</span>
        <span className="ml-2">
          arrayShuffle({{ JSON.stringify(item.value) }})
        </span>
      </div>
      <n-gradient-text type="info">
        //
        {{ JSON.stringify(arrayShuffle(item.value)) }}
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
