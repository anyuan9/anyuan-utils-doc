<script setup lang="ts">
import { ref } from "vue";
import { objectChain } from "@anyuan/utils";

// objectChain 测试数据
const objectChainRes = ref<Array<{ label: string; obj: any; props: string[] }>>(
  []
);
objectChainRes.value = [
  { label: "简单路径", obj: { a: { b: { c: 123 } } }, props: ["a", "b", "c"] },
  {
    label: "不存在的路径",
    obj: { a: { b: { c: 123 } } },
    props: ["a", "x", "c"]
  },
  {
    label: "数组路径",
    obj: { items: [{ name: "a" }, { name: "b" }] },
    props: ["items", "0", "name"]
  },
  {
    label: "越界数组",
    obj: { items: [{ name: "a" }] },
    props: ["items", "1", "name"]
  },
  { label: "null对象", obj: null, props: ["a", "b"] },
  { label: "基本类型", obj: "hello", props: ["length"] }
];
</script>

<template>
  <naive-theme>
    <div
      v-for="(item, index) in objectChainRes"
      :key="index"
      className="flex flex-col justify-center mt-2"
    >
      <div>
        <span className="font-bold">{{ item.label }}</span>
        <span className="ml-2">
          objectChain({{ JSON.stringify(item.obj) }},
          {{ item.props.map(p => `"${p}"`).join(", ") }})
        </span>
      </div>
      <n-gradient-text type="info">
        // {{ JSON.stringify(objectChain(item.obj, ...item.props)) }}
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
