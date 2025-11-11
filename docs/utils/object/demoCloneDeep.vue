<script setup lang="ts">
import { ref } from "vue";
import { cloneDeep } from "@anyuan/utils";

// cloneDeep 测试数据
const cloneDeepRes = ref<Array<{ label: string; value: any }>>([]);
cloneDeepRes.value = [
  { label: "嵌套对象", value: { a: 1, b: { c: { d: 2 } } } },
  { label: "嵌套数组", value: [1, [2, [3, [4]]]] },
  { label: "混合结构", value: { a: [1, { b: 2 }], c: { d: [3, 4] } } }
  // {
  //   label: "循环引用",
  //   value: (() => {
  //     const obj = { a: 1 };
  //     obj.self = obj;
  //     return obj;
  //   })()
  // }
];
</script>

<template>
  <naive-theme>
    <div
      v-for="(item, index) in cloneDeepRes"
      :key="index"
      className="flex flex-col justify-center mt-2"
    >
      <div>
        <span className="font-bold">{{ item.label }}</span>
        <span className="ml-2">
          cloneDeep({{ JSON.stringify(item.value) }})
        </span>
      </div>
      <n-gradient-text type="info">
        // {{ JSON.stringify(cloneDeep(item.value)) }}
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
