<script setup lang="ts">
import { ref } from "vue";
import { arrayIndexOf } from "@anyuan/utils";

const arrayIndexOfData = ref([
  { label: "查找元素", value: [1, 2, 3, 4, 5], compare: 3 },
  { label: "查找最大值索引", value: [1, 5, 3, 9, 2], compare: "max" },
  { label: "查找最小值索引", value: [10, 5, 3, 9, 2], compare: "min" },
  {
    label: "自定义条件",
    value: [1, 2, 3, 4, 5],
    compare: (prevIndex: number, current: number) => current > 3
  }
]);
</script>

<template>
  <naive-theme>
    <div
      v-for="(item, index) in arrayIndexOfData"
      :key="index"
      className="flex flex-col justify-center mt-2"
    >
      <div>
        <span className="font-bold">{{ item.label }}</span>
        <span className="ml-2">
          arrayIndexOf({{ JSON.stringify(item.value) }},
          {{
            typeof item.compare === "function"
              ? "函数"
              : JSON.stringify(item.compare)
          }})
        </span>
      </div>
      <n-gradient-text type="info">
        //
        {{ arrayIndexOf(item.value, item.compare) }}
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
