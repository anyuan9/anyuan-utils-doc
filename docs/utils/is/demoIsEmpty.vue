<script setup lang="ts">
import { ref } from "vue";
import { isEmpty } from "@anyuan/utils";

// isEmpty 测试数据
const isEmptyRes = ref<Array<{ label: string; value: any }>>([]);
isEmptyRes.value = [
  { label: "空字符串", value: "" },
  { label: "空数组", value: [] },
  { label: "空对象", value: {} },
  { label: "null", value: null },
  { label: "undefined", value: undefined },
  { label: "非空字符串", value: "hello" },
  { label: "非空数组", value: [1, 2, 3] },
  { label: "非空对象", value: { a: 1 } },
  { label: "数字0", value: 0 },
  { label: "false", value: false }
];
</script>

<template>
  <naive-theme>
    <div
      v-for="(item, index) in isEmptyRes"
      :key="index"
      className="flex flex-col justify-center mt-2"
    >
      <div>
        <span className="font-bold">{{ item.label }}</span>
        <span className="ml-2">
          isEmpty({{ JSON.stringify(item.value) }})
        </span>
      </div>
      <n-gradient-text type="info">
        // {{ isEmpty(item.value) }}
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
