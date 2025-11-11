<script setup lang="ts">
import { ref } from "vue";
import { randomString } from "@anyuan/utils";

// randomString 测试数据
const randomStringRes = ref<
  Array<{ label: string; length?: number; chars?: string }>
>([]);
randomStringRes.value = [
  {
    label: "默认参数",
    length: 8,
    chars: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
  },
  { label: "短字符串", length: 4 },
  { label: "长字符串", length: 20 },
  { label: "纯数字", length: 6, chars: "0123456789" },
  {
    label: "纯字母",
    length: 10,
    chars: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  },
  { label: "特殊字符", length: 8, chars: "!@#$%^&*()_+-=[]{}|;:,.<>?" },
  { label: "零长度", length: 0 }
];
</script>

<template>
  <naive-theme>
    <div
      v-for="(item, index) in randomStringRes"
      :key="index"
      className="flex flex-col justify-center mt-2"
    >
      <div>
        <span className="font-bold">{{ item.label }}</span>
        <span className="ml-2">
          randomString({{ item.length !== undefined ? item.length : ""
          }}{{ item.chars ? `, "${item.chars}"` : "" }})
        </span>
      </div>
      <n-gradient-text type="info">
        // "{{ randomString(item.length, item.chars) }}"
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
