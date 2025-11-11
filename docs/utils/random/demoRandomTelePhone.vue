<script setup lang="ts">
import { ref } from "vue";
import { randomTelePhone } from "@anyuan/utils";

// randomTelePhone 测试数据
const randomTelePhoneRes = ref<Array<{ label: string }>>([]);
randomTelePhoneRes.value = [
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
      v-for="(item, index) in randomTelePhoneRes"
      :key="index"
      className="flex flex-col justify-center mt-2"
    >
      <div>
        <span className="font-bold">{{ item.label }}</span>
        <span className="ml-2">randomTelePhone() </span>
      </div>
      <n-gradient-text type="info"> // {{ randomTelePhone() }}</n-gradient-text>
    </div>
  </naive-theme>
</template>
