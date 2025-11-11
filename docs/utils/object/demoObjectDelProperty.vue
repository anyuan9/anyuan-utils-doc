<script setup lang="ts">
import { ref } from "vue";
import { objectDelProperty } from "@anyuan/utils";

// objectDelProperty 测试数据
const objectDelPropertyRes = ref<
  Array<{ label: string; obj: any; props: any }>
>([]);
objectDelPropertyRes.value = [
  { label: "删除单个属性", obj: { a: 1, b: 2, c: 3 }, props: "b" },
  { label: "删除多个属性", obj: { a: 1, b: 2, c: 3, d: 4 }, props: ["b", "c"] },
  { label: "删除不存在的属性", obj: { a: 1, b: 2 }, props: "c" },
  { label: "空对象", obj: {}, props: "a" },
  { label: "数组属性", obj: { 0: "a", 1: "b", length: 2 }, props: "length" }
];
</script>

<template>
  <naive-theme>
    <div
      v-for="(item, index) in objectDelPropertyRes"
      :key="index"
      className="flex flex-col justify-center mt-2"
    >
      <div>
        <span className="font-bold">{{ item.label }}</span>
        <span className="ml-2">
          objectDelProperty({{ JSON.stringify(item.obj) }},
          {{ JSON.stringify(item.props) }})</span
        >
      </div>
      <n-gradient-text type="info">
        // {{ JSON.stringify(objectDelProperty(item.obj, item.props)) }}
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
