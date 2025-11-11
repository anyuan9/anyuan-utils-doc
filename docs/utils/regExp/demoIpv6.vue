<script setup lang="ts">
import { ref } from "vue";
import { regExp } from "@anyuan/utils";

// ipv6 测试数据
const ipv6Res = ref<Array<{ label: string; value: string; expected: boolean }>>(
  []
);
ipv6Res.value = [
  {
    label: "标准IPv6",
    value: "2001:0db8:85a3:0000:0000:8a2e:0370:7334",
    expected: true
  },
  { label: "压缩格式", value: "2001:db8:85a3::8a2e:370:7334", expected: true },
  { label: "本地回环", value: "::1", expected: true },
  { label: "全零缩写", value: "::", expected: true },
  { label: "前导零省略", value: "2001:db8::1", expected: true },
  { label: "混合IPv4", value: "::ffff:192.168.1.1", expected: true },
  {
    label: "超过8段",
    value: "2001:0db8:85a3:0000:0000:8a2e:0370:7334:1234",
    expected: false
  },
  { label: "无效字符", value: "2001:db8:85a3::8g2e:370:7334", expected: false },
  { label: "双冒号过多", value: "2001::db8::1", expected: false },
  { label: "段值超限", value: "2001:db8:85a3:10000::1", expected: false }
];
</script>

<template>
  <naive-theme>
    <div
      v-for="(item, index) in ipv6Res"
      :key="index"
      className="flex flex-col justify-center mt-2"
    >
      <div>
        <span className="font-bold">{{ item.label }}</span>
        <span className="ml-2"> regExp.ipv6.test("{{ item.value }}") </span>
      </div>
      <n-gradient-text type="info">
        // 预期: {{ item.expected }}, 实际: {{ regExp.ipv6.test(item.value) }},
        结果:
        {{ regExp.ipv6.test(item.value) === item.expected ? "✓" : "✗" }}
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
