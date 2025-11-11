<script setup lang="ts">
import { ref } from "vue";
import { once } from "@anyuan/utils";

// once 测试数据
const onceRes = ref<Array<{ label: string; testValue: any }>>([]);
onceRes.value = [
  { label: "数字参数", testValue: 42 },
  { label: "字符串参数", testValue: "hello" },
  { label: "对象参数", testValue: { name: "test", value: 123 } },
  { label: "数组参数", testValue: [1, 2, 3] }
];

// 单次执行测试函数
const onceTestFn = (value: any) => {
  console.log(`单次函数被调用，参数: ${JSON.stringify(value)}`);
  return `处理结果: ${JSON.stringify(value)}`;
};

// 记录执行结果的ref
const onceResults = ref<Record<number, string>>({});

const testOnceFunction = (index: number, testValue: any) => {
  const result = once(onceTestFn)(testValue);
  onceResults.value[index] = result || "已执行过";
};
</script>

<template>
  <naive-theme>
    <div
      v-for="(item, index) in onceRes"
      :key="index"
      className="flex flex-col justify-center mt-2"
    >
      <div>
        <span className="font-bold">{{ item.label }}</span>
        <span className="ml-2">
          once(fn)({{ JSON.stringify(item.testValue) }})
        </span>
      </div>
      <n-gradient-text type="info">
        // {{ onceResults[index] || "未执行" }}
      </n-gradient-text>
      <n-button @click="testOnceFunction(index, item.testValue)">
        测试单次执行
      </n-button>
    </div>
  </naive-theme>
</template>
