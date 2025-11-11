<script setup lang="ts">
import { ref } from "vue";
import { objectClean } from "@anyuan/utils";

// objectClean 测试数据
const objectCleanRes = ref<Array<{ label: string; obj: any; options?: any }>>(
  []
);
objectCleanRes.value = [
  {
    label: "清理空值",
    obj: { a: 1, b: null, c: undefined, d: "", e: 0, f: false }
  },
  {
    label: "清理空字符串",
    obj: { a: "text", b: "", c: "   " },
    options: { emptyString: true }
  },
  { label: "清理零值", obj: { a: 0, b: 1, c: -1 }, options: { zero: true } },
  {
    label: "清理假值",
    obj: { a: false, b: true, c: null },
    options: { falsy: true }
  },
  {
    label: "嵌套清理",
    obj: { a: 1, b: { c: null, d: 2 }, e: [3, null, 4] },
    options: { deep: true }
  }
];
</script>

<template>
  <naive-theme>
    <div
      v-for="(item, index) in objectCleanRes"
      :key="index"
      className="flex flex-col justify-center mt-2"
    >
      <div>
        <span className="font-bold">{{ item.label }}</span>
        <span className="ml-2">
          objectClean({{ JSON.stringify(item.obj)
          }}{{ item.options ? `, ${JSON.stringify(item.options)}` : "" }})
        </span>
      </div>
      <n-gradient-text type="info">
        // {{ JSON.stringify(objectClean(item.obj, item.options)) }}
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
