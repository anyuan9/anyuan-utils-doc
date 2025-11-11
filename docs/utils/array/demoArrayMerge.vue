<script setup lang="ts">
import { ref } from "vue";
import { arrayMerge } from "@anyuan/utils";

const arrayMergeData = ref([
  {
    label: "多个数组",
    value: [
      [1, 2],
      [3, 4],
      [5, 6]
    ]
  },
  { label: "包含空数组", value: [[1, 2], [], [3, 4]] },
  {
    label: "混合类型",
    value: [
      [1, 2],
      ["a", "b"],
      [true, false]
    ]
  }
]);
</script>

<template>
  <naive-theme>
    <div
      v-for="(item, index) in arrayMergeData"
      :key="index"
      className="flex flex-col justify-center mt-2"
    >
      <div>
        <span className="font-bold">{{ item.label }}</span>
        <span className="ml-2">
          arrayMerge(...{{ JSON.stringify(item.value) }})
        </span>
      </div>
      <n-gradient-text type="info">
        //
        {{ JSON.stringify(arrayMerge(...item.value)) }}
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
