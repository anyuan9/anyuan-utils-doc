<script setup lang="ts">
import { ref } from "vue";
import { objectPick } from "@anyuan/utils";

// objectPick 测试数据
const objectPickRes = ref<Array<{ label: string; obj: any; props: any }>>([]);
objectPickRes.value = [
  {
    label: "选择单个属性",
    obj: { a: "a", b: false, c: [{ cc: "cc" }], d: { d1: "d1" } },
    props: ["a"]
  },
  {
    label: "选择多个属性",
    obj: { a: "a", b: false, c: [{ cc: "cc" }], d: { d1: "d1" } },
    props: ["a", "b"]
  },
  { label: "属性映射", obj: { a: "a", b: false }, props: [{ newA: "a" }] },
  { label: "混合映射", obj: { a: "a", b: false }, props: ["a", { newB: "b" }] },
  { label: "选择不存在的属性", obj: { a: 1, b: 2 }, props: ["c"] },
  { label: "空对象", obj: {}, props: ["a"] }
];
</script>

<template>
  <naive-theme>
    <div
      v-for="(item, index) in objectPickRes"
      :key="index"
      className="flex flex-col justify-center mt-2"
    >
      <div>
        <span className="font-bold">{{ item.label }}</span>
        <span className="ml-2">
          objectPick({{ JSON.stringify(item.obj) }},
          {{ JSON.stringify(item.props) }})
        </span>
      </div>
      <n-gradient-text type="info">
        // {{ JSON.stringify(objectPick(item.obj, item.props)) }}
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
