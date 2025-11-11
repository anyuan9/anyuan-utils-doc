<script setup lang="ts">
import { ref } from "vue";
import { isPromise } from "@anyuan/utils";

// isPromise 测试数据
const isPromiseRes = ref<Array<{ label: string; value: any }>>([]);
isPromiseRes.value = [
  { label: "Promise对象", value: Promise.resolve() },
  { label: "thenable对象", value: { then: () => {} } },
  { label: "普通对象", value: {} },
  { label: "函数", value: () => {} }
];
</script>

<template>
  <naive-theme>
    <div
      v-for="(item, index) in isPromiseRes"
      :key="index"
      className="flex flex-col justify-center mt-2"
    >
      <div>
        <span className="font-bold">{{ item.label }}</span>
        <span className="ml-2">
          isPromise({{ JSON.stringify(item.value) }})
        </span>
      </div>
      <n-gradient-text type="info">
        // {{ isPromise(item.value) }}
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
