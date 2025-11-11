<script setup lang="ts">
import { ref } from "vue";
import { objectMerge } from "@anyuan/utils";

// objectMerge 测试数据
const objectMergeRes = ref<
  Array<{ label: string; target1: any; target2: any; options?: any }>
>([]);
objectMergeRes.value = [
  { label: "简单合并", target1: { a: 1, b: 2 }, target2: { b: 3, c: 4 } },
  {
    label: "深度合并",
    target1: { a: 1, b: { c: 2 } },
    target2: { b: { d: 3 }, e: 4 },
    options: { deep: true }
  },
  {
    label: "数组合并",
    target1: { arr: [1, 2] },
    target2: { arr: [3, 4] },
    options: { coverArray: false }
  },
  {
    label: "数组覆盖",
    target1: { arr: [1, 2] },
    target2: { arr: [3, 4] },
    options: { coverArray: true }
  },
  { label: "null合并", target1: null, target2: { a: 1 } },
  { label: "undefined合并", target1: { a: 1 }, target2: undefined }
];
</script>

<template>
  <naive-theme>
    <div
      v-for="(item, index) in objectMergeRes"
      :key="index"
      className="flex flex-col justify-center mt-2"
    >
      <div>
        <span className="font-bold">{{ item.label }}</span>
        <span className="ml-2">
          objectMerge({{ JSON.stringify(item.target1) }},
          {{ JSON.stringify(item.target2)
          }}{{ item.options ? `, ${JSON.stringify(item.options)}` : "" }})
        </span>
      </div>
      <n-gradient-text type="info">
        //
        {{
          JSON.stringify(objectMerge(item.target1, item.target2, item.options))
        }}
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
