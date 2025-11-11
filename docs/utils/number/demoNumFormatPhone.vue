<script setup lang="ts">
import { ref } from "vue";
import { numFormatPhone } from "@anyuan/utils";

// numFormatPhone 测试数据
const numFormatPhoneRes = ref<
  Array<{ label: string; value: string; format?: string }>
>([]);
numFormatPhoneRes.value = [
  { label: "手机号", value: "123-1234-5678" },
  { label: "手机号", value: "12312345678", format: "xxx-xxxx-xxxx" },
  { label: "电话", value: "(010)12345678" },
  { label: "电话", value: "010-1234-5678", format: "(xxx) xxx-xxxx" },
  { label: "400电话", value: "4001231234", format: "xxx-xxx-xxxx" }
];
</script>

<template>
  <naive-theme>
    <div
      v-for="(item, index) in numFormatPhoneRes"
      :key="index"
      className="flex flex-col justify-center mt-2"
    >
      <div>
        <span className="font-bold">{{ item.label }}</span>
        <span className="ml-2">
          numFormatPhone({{ item.value }}
          {{ item.format ? `, ${item.format}` : "" }})
        </span>
      </div>
      <n-gradient-text type="info">
        // {{ numFormatPhone(item.value, item.format) }}
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
