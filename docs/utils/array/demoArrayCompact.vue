<script setup lang="ts">
import { ref } from "vue";
import { arrayCompact } from "@anyuan/utils";

const arrayCompactData = ref([
  { label: "包含假值", value: [0, 1, false, 2, "", 3, null, undefined, NaN] },
  { label: "只有真值", value: [1, 2, 3, "hello", true] },
  { label: "空数组", value: [] }
]);
</script>

<template>
  <naive-theme>
    <div
      v-for="(item, index) in arrayCompactData"
      :key="index"
      className="flex flex-col justify-center mt-2"
    >
      <div>
        <span className="font-bold">{{ item.label }}</span>
        <span className="ml-2">
          arrayCompact({{ JSON.stringify(item.value) }})
        </span>
      </div>
      <n-gradient-text type="info">
        //
        {{ JSON.stringify(arrayCompact(item.value)) }}
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
