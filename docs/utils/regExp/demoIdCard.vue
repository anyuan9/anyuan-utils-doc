<script setup lang="ts">
import { ref } from "vue";
import { regExp } from "@anyuan/utils";

// idCard 测试数据
const idCardRes = ref<
  Array<{ label: string; value: string; expected: boolean }>
>([]);
idCardRes.value = [
  { label: "15位身份证", value: "110105670912001", expected: true },
  { label: "18位身份证数字", value: "110105196708120012", expected: true },
  { label: "18位身份证X结尾", value: "11010519670812001X", expected: true },
  { label: "14位数字", value: "11010567091200", expected: false },
  { label: "16位数字", value: "1101056709120001", expected: false },
  { label: "19位数字", value: "1101051967081200123", expected: false },
  { label: "包含字母", value: "11010567091200A", expected: false },
  { label: "空字符串", value: "", expected: false }
];
</script>

<template>
  <naive-theme>
    <div
      v-for="(item, index) in idCardRes"
      :key="index"
      className="flex flex-col justify-center mt-2"
    >
      <div>
        <span className="font-bold">{{ item.label }}</span>
        <span className="ml-2"> regExp.idCard.test("{{ item.value }}") </span>
      </div>
      <n-gradient-text type="info">
        // 预期: {{ item.expected }}, 实际:
        {{ regExp.idCard.test(item.value) }}, 结果:
        {{ regExp.idCard.test(item.value) === item.expected ? "✓" : "✗" }}
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
