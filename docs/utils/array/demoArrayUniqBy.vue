<script setup lang="ts">
import { ref } from "vue";
import { arrayUniqBy } from "@anyuan/utils";

const arrayUniqByData = ref([
  {
    label: "对象数组按属性去重",
    value: [
      { id: 1, name: "Alice" },
      { id: 2, name: "Bob" },
      { id: 1, name: "Alice" },
      { id: 3, name: "Charlie" }
    ],
    equalFn: (a: any, b: any) => a.id === b.id
  },
  {
    label: "数字按奇偶去重",
    value: [1, 2, 3, 4, 5, 6],
    equalFn: (a: number, b: number) => a % 2 === b % 2
  }
]);
</script>

<template>
  <naive-theme>
    <div
      v-for="(item, index) in arrayUniqByData"
      :key="index"
      className="flex flex-col justify-center mt-2"
    >
      <div>
        <span className="font-bold">{{ item.label }}</span>
        <span className="ml-2">
          arrayUniqBy({{ JSON.stringify(item.value) }}, 函数)
        </span>
      </div>
      <n-gradient-text type="info">
        //
        {{ JSON.stringify(arrayUniqBy(item.value, item.equalFn)) }}
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
