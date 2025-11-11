<script setup lang="ts">
import { ref } from "vue";
import { regExp } from "@anyuan/utils";

// ipv4 测试数据
const ipv4Res = ref<Array<{ label: string; value: string; expected: boolean }>>(
  []
);
ipv4Res.value = [
  { label: "标准IPv4", value: "192.168.1.1", expected: true },
  { label: "本地回环", value: "127.0.0.1", expected: true },
  { label: "最大IP", value: "255.255.255.255", expected: true },
  { label: "最小IP", value: "0.0.0.0", expected: true },
  { label: "三位数段", value: "192.168.001.001", expected: true },
  { label: "超过255", value: "256.168.1.1", expected: false },
  { label: "负数段", value: "-1.168.1.1", expected: false },
  { label: "不足4段", value: "192.168.1", expected: false },
  { label: "超过4段", value: "192.168.1.1.1", expected: false },
  { label: "包含字母", value: "192.168.1.a", expected: false }
];
</script>

<template>
  <naive-theme>
    <div
      v-for="(item, index) in ipv4Res"
      :key="index"
      className="flex flex-col justify-center mt-2"
    >
      <div>
        <span className="font-bold">{{ item.label }}</span>
        <span className="ml-2"> regExp.ipv4.test("{{ item.value }}") </span>
      </div>
      <n-gradient-text type="info">
        // 预期: {{ item.expected }}, 实际: {{ regExp.ipv4.test(item.value) }},
        结果:
        {{ regExp.ipv4.test(item.value) === item.expected ? "✓" : "✗" }}
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
