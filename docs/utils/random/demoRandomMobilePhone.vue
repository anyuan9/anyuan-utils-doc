<script setup lang="ts">
import { ref } from "vue";
import { randomMobilePhone } from "@anyuan/utils";

// randomMobilePhone 测试数据
const randomMobilePhoneRes = ref<Array<{ label: string }>>([]);
randomMobilePhoneRes.value = [
  { label: "随机手机号" },
  { label: "多次生成测试1" },
  { label: "多次生成测试2" },
  { label: "多次生成测试3" },
  { label: "验证格式" }
];
</script>

<template>
  <naive-theme>
    <div
      v-for="(item, index) in randomMobilePhoneRes"
      :key="index"
      className="flex flex-col justify-center mt-2"
    >
      <div>
        <span className="font-bold">{{ item.label }}</span>
        <span className="ml-2">randomMobilePhone() </span>
      </div>
      <n-gradient-text type="info">
        // {{ randomMobilePhone() }}
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
