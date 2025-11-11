<script setup lang="ts">
import { ref } from "vue";
import { strCamelize } from "@anyuan/utils";

// strCamelize 测试数据
const strCamelizeRes = ref<Array<{ label: string; value: string }>>([]);
strCamelizeRes.value = [
  { label: "连字符转驼峰", value: "hello-world" },
  { label: "下划线转驼峰", value: "hello_world" },
  { label: "混合分隔符", value: "hello-world_test" },
  { label: "已驼峰格式", value: "helloWorld" },
  { label: "空字符串", value: "" },
  { label: "单个单词", value: "hello" },
  { label: "大写开头", value: "Hello-World" }
];
</script>

<template>
  <naive-theme>
    <div
      v-for="(item, index) in strCamelizeRes"
      :key="index"
      className="flex flex-col justify-center mt-2"
    >
      <div>
        <span className="font-bold">{{ item.label }}</span>
        <span className="ml-2"> strCamelize("{{ item.value }}")</span>
      </div>
      <n-gradient-text type="info">
        // {{ strCamelize(item.value) }}
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
