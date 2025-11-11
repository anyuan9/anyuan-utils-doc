<script setup lang="ts">
import { ref } from "vue";
import { callAppFn } from "./h5";

// callAppFn 测试数据
const callAppFnRes = ref<
  Array<{ label: string; funName: string; callbackName?: string }>
>([]);
callAppFnRes.value = [
  {
    label: "调用存在的方法",
    funName: "testFunction",
    callbackName: "testCallback"
  },
  {
    label: "调用不存在的方法",
    funName: "nonExistentFunction",
    callbackName: "testCallback"
  },
  { label: "无回调函数", funName: "testFunction" }
];
</script>

<template>
  <naive-theme>
    <div
      v-for="(item, index) in callAppFnRes"
      :key="index"
      className="flex flex-col justify-center mt-2"
    >
      <div>
        <span className="font-bold">{{ item.label }}</span>
        <span className="ml-2">
          callAppFn("{{ item.funName }}",
          {{ item.callbackName ? `"${item.callbackName}"` : "null" }})
        </span>
      </div>
      <div>
        <n-button
          @click="
            () => {
              try {
                callAppFn(item.funName, item.callbackName);
                console.log('调用成功:', item.funName);
              } catch (error) {
                console.error('调用失败:', error);
              }
            }
          "
        >
          测试调用
        </n-button>
      </div>
    </div>
  </naive-theme>
</template>
