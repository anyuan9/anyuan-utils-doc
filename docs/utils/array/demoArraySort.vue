<script setup lang="ts">
import { ref } from "vue";
import { arraySort } from "@anyuan/utils";

const arraySortData = ref([
  { label: "数字升序", value: [3, 1, 4, 2] },
  { label: "数字降序", value: [3, 1, 4, 2], compareFn: "desc" },
  { label: "字符串", value: ["banana", "apple", "cherry"] },
  {
    label: "对象数组",
    value: [{ age: 25 }, { age: 18 }, { age: 30 }],
    compareFn: (a, b) => a.age - b.age
  }
]);
</script>

<template>
  <naive-theme>
    <div
      v-for="(item, index) in arraySortData"
      :key="index"
      className="flex flex-col justify-center mt-2"
    >
      <div>
        <span className="font-bold">{{ item.label }}</span>
        <span className="ml-2">
          arraySort({{ JSON.stringify(item.value)
          }}{{
            item.compareFn
              ? `, ${typeof item.compareFn === "function" ? "函数" : JSON.stringify(item.compareFn)}`
              : ""
          }})
        </span>
      </div>
      <n-gradient-text type="info">
        //
        {{ JSON.stringify(arraySort(item.value, item.compareFn)) }}
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
