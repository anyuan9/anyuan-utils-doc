<script setup lang="ts">
import { ref } from "vue";
import { isEqual } from "@anyuan/utils";

// isEqual 测试数据
const isEqualRes = ref<Array<{ label: string; value1: any; value2: any }>>([]);
isEqualRes.value = [
  { label: "相同原始值", value1: "hello", value2: "hello" },
  { label: "不同原始值", value1: "hello", value2: "world" },
  { label: "相同对象", value1: { a: 1 }, value2: { a: 1 } },
  { label: "不同对象", value1: { a: 1 }, value2: { a: 2 } },
  { label: "相同数组", value1: [1, 2, 3], value2: [1, 2, 3] },
  { label: "不同数组", value1: [1, 2, 3], value2: [1, 2, 4] },
  { label: "null比较", value1: null, value2: null },
  { label: "undefined比较", value1: undefined, value2: undefined },
  { label: "null和undefined", value1: null, value2: undefined }
];
</script>

<template>
  <naive-theme>
    <div
      v-for="(item, index) in isEqualRes"
      :key="index"
      className="flex flex-col justify-center mt-2"
    >
      <div>
        <span className="font-bold">{{ item.label }}</span>
        <span className="ml-2">
          isEqual({{ JSON.stringify(item.value1) }},
          {{ JSON.stringify(item.value2) }})
        </span>
      </div>
      <n-gradient-text type="info">
        // {{ isEqual(item.value1, item.value2) }}
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
