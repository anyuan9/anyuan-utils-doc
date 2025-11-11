<script setup lang="ts">
import { ref } from "vue";
import { measureTime } from "@anyuan/utils";

// measureTime 测试数据
const measureTimeRes = ref<
  Array<{ label: string; testFn: () => any; args?: any[] }>
>([]);

// 测试函数1 - 简单计算
const testCalculation = (n: number) => {
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += i;
  }
  return sum;
};

// 测试函数2 - 数组操作
const testArrayOperation = (size: number) => {
  const arr = [];
  for (let i = 0; i < size; i++) {
    arr.push(Math.random());
  }
  return arr.sort();
};

// 测试函数3 - 字符串操作
const testStringOperation = (str: string, times: number) => {
  let result = "";
  for (let i = 0; i < times; i++) {
    result += str;
  }
  return result;
};

measureTimeRes.value = [
  {
    label: "简单计算(1000次)",
    testFn: () => testCalculation(1000),
    args: [1000]
  },
  {
    label: "中等计算(10000次)",
    testFn: () => testCalculation(10000),
    args: [10000]
  },
  {
    label: "数组排序(1000元素)",
    testFn: () => testArrayOperation(1000),
    args: [1000]
  },
  {
    label: "字符串拼接(100次)",
    testFn: () => testStringOperation("test", 100),
    args: ["test", 100]
  }
];
</script>

<template>
  <naive-theme>
    <div
      v-for="(item, index) in measureTimeRes"
      :key="index"
      className="flex flex-col justify-center mt-2"
    >
      <div>
        <span className="font-bold">{{ item.label }}</span>
        <span className="ml-2"> measureTime(fn, ...{{ item.args }}) </span>
      </div>
      <n-gradient-text type="info">
        // {{ JSON.stringify(measureTime(item.testFn, ...item.args)) }}
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
