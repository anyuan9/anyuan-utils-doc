<script setup lang="ts">
import { ref } from "vue";
import { isObjectEmpty } from "@anyuan/utils";

// isObjectEmpty 测试数据
const isObjectEmptyRes = ref<Array<{ label: string; value: any }>>([]);
isObjectEmptyRes.value = [
  { label: "空对象", value: {} },
  { label: "Object.create(null)", value: Object.create(null) },
  { label: "非空对象", value: { a: 1 } },
  { label: "数组", value: [] },
  { label: "字符串", value: "" },
  { label: "null", value: null },
  { label: "undefined", value: undefined },
  { label: "数字", value: 0 }
];
</script>

<template>
  <naive-theme>
    <div
      v-for="(item, index) in isObjectEmptyRes"
      :key="index"
      className="flex flex-col justify-center mt-2"
    >
      <div>
        <span className="font-bold">{{ item.label }}</span>
        <span className="ml-2">
          isObjectEmpty({{ JSON.stringify(item.value) }})
        </span>
      </div>
      <n-gradient-text type="info">
        // {{ isObjectEmpty(item.value) }}
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
