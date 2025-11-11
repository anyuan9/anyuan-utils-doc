<script setup lang="ts">
import { ref } from "vue";
import { arrayUniq } from "@anyuan/utils";

const arrayUniqData = ref([
  { label: "数字去重", value: [1, 2, 2, 3, 4, 4, 5] },
  { label: "字符串去重", value: ["a", "b", "a", "c", "b"] },
  { label: "混合类型", value: [1, "1", 2, "2", 1, "1"] }
]);
</script>

<template>
  <naive-theme>
    <div
      v-for="(item, index) in arrayUniqData"
      :key="index"
      className="flex flex-col justify-center mt-2"
    >
      <div>
        <span className="font-bold">{{ item.label }}</span>
        <span className="ml-2">
          arrayUniq({{ JSON.stringify(item.value) }})
        </span>
      </div>
      <n-gradient-text type="info">
        //
        {{ JSON.stringify(arrayUniq(item.value)) }}
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
