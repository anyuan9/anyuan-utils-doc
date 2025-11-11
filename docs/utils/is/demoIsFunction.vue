<script setup lang="ts">
import { ref } from "vue";
import { isFunction } from "@anyuan/utils";

// isFunction 测试数据
const isFunctionRes = ref<Array<{ label: string; value: any }>>([]);
isFunctionRes.value = [
  { label: "普通函数", value: function () {} },
  { label: "箭头函数", value: () => {} },
  { label: "async函数", value: async function () {} },
  { label: "生成器函数", value: function* () {} },
  { label: "类", value: class {} },
  { label: "对象", value: {} }
];
</script>

<template>
  <naive-theme>
    <div
      v-for="(item, index) in isFunctionRes"
      :key="index"
      className="flex flex-col justify-center mt-2"
    >
      <div>
        <span className="font-bold">{{ item.label }}</span>
        <span className="ml-2">
          isFunction({{ JSON.stringify(item.value) }})
        </span>
      </div>
      <n-gradient-text type="info">
        // {{ isFunction(item.value) }}
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
