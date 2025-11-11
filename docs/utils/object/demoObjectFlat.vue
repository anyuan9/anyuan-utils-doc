<script setup lang="ts">
import { ref } from "vue";
import { objectFlat } from "@anyuan/utils";

// objectFlat 测试数据
const objectFlatRes = ref<Array<{ label: string; obj: any }>>([]);
objectFlatRes.value = [
  { label: "简单嵌套对象", obj: { a: { b: "x" } } },
  {
    label: "复杂嵌套结构",
    obj: { a: 1, b: [1, 2, { c: true }, [3]], d: { e: 2, f: 3 }, g: null }
  },
  { label: "数组嵌套", obj: { items: [{ name: "a" }, { name: "b" }] } },
  { label: "空对象", obj: {} },
  { label: "null", obj: null },
  { label: "基本类型", obj: "test" }
];
</script>

<template>
  <naive-theme>
    <div
      v-for="(item, index) in objectFlatRes"
      :key="index"
      className="flex flex-col justify-center mt-2"
    >
      <div>
        <span className="font-bold">{{ item.label }}</span>
        <span className="ml-2">
          objectFlat({{ JSON.stringify(item.obj) }})
        </span>
      </div>
      <n-gradient-text type="info">
        // {{ JSON.stringify(objectFlat(item.obj)) }}
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
