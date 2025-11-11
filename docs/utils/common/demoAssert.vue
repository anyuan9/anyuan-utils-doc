<script setup lang="ts">
import { ref } from "vue";
import { getPrototype } from "@anyuan/utils";

// assert 测试数据
const assertRes = ref<
  Array<{ label: string; condition: boolean; message: string }>
>([]);
assertRes.value = [
  {
    label: "断言成功-真值条件",
    condition: true,
    message: "这个断言应该成功"
  },
  {
    label: "断言成功-表达式为真",
    condition: 1 === 1,
    message: "1等于1，断言应该成功"
  },
  {
    label: "断言失败-假值条件",
    condition: false,
    message: "这个断言应该失败"
  },
  {
    label: "断言失败-表达式为假",
    // @ts-ignore 下面一行不需要ts的错误提示信息
    condition: 1 === 2,
    message: "1不等于2，断言应该失败"
  },
  {
    label: "断言失败-空字符串",
    // @ts-ignore 下面一行不需要ts的错误提示信息
    condition: "",
    message: "空字符串为假，断言应该失败"
  },
  {
    label: "断言失败-0",
    // @ts-ignore 下面一行不需要ts的错误提示信息
    condition: 0,
    message: "0为假，断言应该失败"
  },
  {
    label: "断言失败-null",
    condition: null,
    message: "null为假，断言应该失败"
  },
  {
    label: "断言失败-undefined",
    condition: undefined,
    message: "undefined为假，断言应该失败"
  }
];
</script>

<template>
  <naive-theme>
    <div
      v-for="(item, index) in assertRes"
      :key="index"
      className="flex flex-col justify-center mt-2"
    >
      <div>
        <span className="font-bold">{{ item.label }}</span>
        <span className="ml-2">
          assert({{ JSON.stringify(item.condition) }}, "{{ item.message }}")
        </span>
      </div>
      <n-gradient-text type="info">
        //
        <span v-if="item.condition" style="color: green">✓ 断言成功</span>
        <span v-else style="color: red">✗ 断言失败: {{ item.message }}</span>
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
