<script setup lang="ts">
import { ref } from "vue";
import { arrayElementSwap } from "@anyuan/utils";

const arrayElementSwapData = ref([
  { label: "交换中间元素", value: [1, 2, 3, 4, 5], index1: 1, index2: 3 },
  { label: "交换首尾", value: [1, 2, 3, 4, 5], index1: 0, index2: 4 },
  { label: "相邻交换", value: [1, 2, 3, 4, 5], index1: 2, index2: 3 }
]);
</script>

<template>
  <naive-theme>
    <div
      v-for="(item, index) in arrayElementSwapData"
      :key="index"
      className="flex flex-col justify-center mt-2"
    >
      <div>
        <span className="font-bold">{{ item.label }}</span>
        <span className="ml-2">
          原数组: {{ JSON.stringify(item.value) }}<br />
          arrayElementSwap(数组, {{ item.index1 }}, {{ item.index2 }})
        </span>
      </div>
      <n-gradient-text type="info">
        //
        {{
          JSON.stringify(
            arrayElementSwap([...item.value], item.index1, item.index2)
          )
        }}
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
