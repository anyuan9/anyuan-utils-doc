<script setup lang="ts">
import { ref } from "vue";
import { regExp } from "@anyuan/utils";

// plateNumLoose 测试数据
const plateNumLooseRes = ref<
  Array<{ label: string; value: string; expected: boolean }>
>([]);
plateNumLooseRes.value = [
  { label: "带通配符*", value: "京A*", expected: true },
  { label: "带通配符?", value: "粤B?123", expected: true },
  { label: "混合通配符", value: "沪C*?123", expected: true },
  { label: "标准车牌", value: "京A12345", expected: true },
  { label: "字母数字组合", value: "AB123CD", expected: true },
  { label: "纯数字", value: "12345678", expected: true },
  { label: "纯字母", value: "ABCDEFGH", expected: true },
  { label: "空字符串", value: "", expected: true },
  { label: "9位字符", value: "ABCDEFGHI", expected: false },
  { label: "包含非法字符", value: "京A@123", expected: false },
  { label: "包含中文特殊字符", value: "京A！123", expected: false }
];
</script>

<template>
  <naive-theme>
    <div className="flex flex-col justify-center mt-2">
      <n-gradient-text
        v-for="(item, index) in plateNumLooseRes"
        :key="index"
        type="info"
      >
        <div>
          <span className="font-bold">{{ item.label }}</span>
          <span className="ml-2">
            regExp.plateNumLoose.test("{{ item.value }}")</span
          >
        </div>
        <n-gradient-text type="info">
          // 预期: {{ item.expected }}, 实际:
          {{ regExp.plateNumLoose.test(item.value) }}, 结果:
          {{
            regExp.plateNumLoose.test(item.value) === item.expected ? "✓" : "✗"
          }}
        </n-gradient-text>
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
