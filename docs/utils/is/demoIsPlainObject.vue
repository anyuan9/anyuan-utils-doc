<script setup lang="ts">
import { ref } from "vue";
import { isPlainObject } from "@anyuan/utils";

// isPlainObject 测试数据
const isPlainObjectRes = ref<Array<{ label: string; value: any }>>([]);
isPlainObjectRes.value = [
  { label: "普通对象", value: { a: 1, b: 2 } },
  { label: "空对象", value: {} },
  { label: "Object.create(null)", value: Object.create(null) },
  { label: "Date对象", value: new Date() },
  { label: "数组", value: [1, 2, 3] },
  { label: "Map对象", value: new Map() },
  { label: "null", value: null },
  { label: "字符串", value: "hello" },
  { label: "函数", value: () => {} }
];
</script>

<template>
  <naive-theme>
    <div
      v-for="(item, index) in isPlainObjectRes"
      :key="index"
      className="flex flex-col justify-center mt-2"
    >
      <div>
        <span className="font-bold">{{ item.label }}</span>
        <span className="ml-2">
          isPlainObject({{ JSON.stringify(item.value) }})
        </span>
      </div>
      <n-gradient-text type="info">
        // {{ isPlainObject(item.value) }}
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
