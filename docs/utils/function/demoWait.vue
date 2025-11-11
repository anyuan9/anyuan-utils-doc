<script setup lang="ts">
import { ref } from "vue";
import { wait } from "@anyuan/utils";

// wait 测试数据
const waitRes = ref<Array<{ label: string; timeout?: number }>>([]);
waitRes.value = [
  { label: "默认等待(20ms)", timeout: 20 },
  { label: "短等待(10ms)", timeout: 10 },
  { label: "长等待(100ms)", timeout: 100 },
  { label: "超长等待(1000ms)", timeout: 1000 }
];
</script>

<template>
  <naive-theme>
    <div
      v-for="(item, index) in waitRes"
      :key="index"
      className="flex flex-col justify-center mt-2"
    >
      <div>
        <span className="font-bold">{{ item.label }}</span>
        <span className="ml-2"> wait({{ item.timeout }}) </span>
      </div>
      <n-gradient-text type="info">
        // {{ "返回Promise对象" }}
      </n-gradient-text>
      <n-button
        @click="
          wait(item.timeout).then(() => console.log('等待完成:', item.label))
        "
      >
        测试等待
      </n-button>
    </div>
  </naive-theme>
</template>
