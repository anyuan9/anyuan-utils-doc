<script setup lang="ts">
import { ref } from "vue";
import { arrayFlat } from "@anyuan/utils";

const arrayFlatData = ref([
  { label: "单层嵌套", value: [1, [2, 3], 4] },
  { label: "多层嵌套", value: [1, [2, [3, [4]]]] },
  { label: "深度2", value: [1, [2, [3, [4]]]], depth: 2 },
  { label: "非数组", value: "hello" },
  { label: "空值", value: null }
]);
</script>

<template>
  <naive-theme>
    <div
      v-for="(item, index) in arrayFlatData"
      :key="index"
      className="flex flex-col justify-center mt-2"
    >
      <div>
        <span className="font-bold">{{ item.label }}</span>
        <span className="ml-2">
          arrayFlat({{ JSON.stringify(item.value)
          }}{{ item.depth ? `, ${item.depth}` : "" }})
        </span>
      </div>
      <n-gradient-text type="info">
        //
        {{ JSON.stringify(arrayFlat(item.value, item.depth)) }}
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
