<script setup lang="ts">
import { ref } from "vue";
import { imageAddText } from "@anyuan/utils";

// imageAddText 测试数据
const imageAddTextRes = ref<
  Array<{ label: string; url: string; options: any }>
>([]);
imageAddTextRes.value = [
  {
    label: "添加文字",
    url: "https://picsum.photos/200/300",
    options: {
      text: "测试文字",
      x: 50,
      y: 50,
      fontSize: 20,
      color: "#ffffff"
    }
  },
  {
    label: "多行文字",
    url: "https://picsum.photos/200/300",
    options: {
      text: "第一行\n第二行",
      x: 10,
      y: 30,
      fontSize: 16,
      color: "#ff0000"
    }
  }
];

// 执行测试的函数
const executeTest = async (fn: Function, ...args: any[]) => {
  try {
    return await fn(...args);
  } catch (error) {
    return `错误: ${error.message}`;
  }
};
</script>

<template>
  <naive-theme>
    <div
      v-for="(item, index) in imageAddTextRes"
      :key="index"
      className="flex flex-col justify-center mt-2"
    >
      <div>
        <span className="font-bold">{{ item.label }}</span>
        <span className="ml-2">
          imageAddText("{{ item.url }}", {{ JSON.stringify(item.options) }})
        </span>
      </div>
      <n-gradient-text type="info">
        // {{ executeTest(imageAddText, item.url, item.options) }}
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
