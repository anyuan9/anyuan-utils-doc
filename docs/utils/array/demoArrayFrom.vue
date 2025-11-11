<script setup lang="ts">
import { ref } from "vue";
import { arrayFrom } from "@anyuan/utils";

const arrayFromData = ref([
  { label: "仅长度", length: 3 },
  { label: "固定值", length: 4, initializer: 1 },
  { label: "函数初始化", length: 5, initializer: (_, index) => index * 2 }
]);
</script>

<template>
  <naive-theme>
    <div
      v-for="(item, index) in arrayFromData"
      :key="index"
      className="flex flex-col justify-center mt-2"
    >
      <div>
        <span className="font-bold">{{ item.label }}</span>
        <span className="ml-2">
          arrayFrom({{ item.length
          }}{{
            item.initializer
              ? `, ${typeof item.initializer === "function" ? "函数" : JSON.stringify(item.initializer)}`
              : ""
          }})
        </span>
      </div>
      <n-gradient-text type="info">
        //
        {{ JSON.stringify(arrayFrom(item.length, item.initializer)) }}
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
