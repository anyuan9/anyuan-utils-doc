<script setup lang="ts">
import { ref } from "vue";
import { regExp } from "@anyuan/utils";

// mac 测试数据
const macRes = ref<Array<{ label: string; value: string; expected: boolean }>>(
  []
);
macRes.value = [
  { label: "标准MAC", value: "FF:FF:FF:FF:FF:FF", expected: true },
  { label: "小写MAC", value: "ff:ff:ff:ff:ff:ff", expected: true },
  { label: "混合大小写", value: "Ff:FF:fF:FF:Ff:Ff", expected: true },
  { label: "数字MAC", value: "00:11:22:33:44:55", expected: true },
  { label: "实际MAC", value: "A0:B1:C2:D3:E4:F5", expected: true },
  { label: "不足6段", value: "FF:FF:FF:FF:FF", expected: false },
  { label: "超过6段", value: "FF:FF:FF:FF:FF:FF:FF", expected: false },
  { label: "无效分隔符", value: "FF-FF-FF-FF-FF-FF", expected: false },
  { label: "无效字符", value: "GG:FF:FF:FF:FF:FF", expected: false },
  { label: "段值超限", value: "100:FF:FF:FF:FF:FF", expected: false }
];
</script>

<template>
  <naive-theme>
    <div className="flex flex-col justify-center mt-2">
      <n-gradient-text v-for="(item, index) in macRes" :key="index" type="info">
        <div>
          <span className="font-bold">{{ item.label }}</span>
          <span className="ml-2"> regExp.mac.test("{{ item.value }}") </span>
        </div>
        <n-gradient-text type="info">
          // 预期: {{ item.expected }}, 实际: {{ regExp.mac.test(item.value) }},
          结果:
          {{ regExp.mac.test(item.value) === item.expected ? "✓" : "✗" }}
        </n-gradient-text>
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
