<script setup lang="ts">
import { ref } from "vue";
import { regExp } from "@anyuan/utils";

// plateNumStrict 测试数据
const plateNumStrictRes = ref<
  Array<{ label: string; value: string; expected: boolean }>
>([]);
plateNumStrictRes.value = [
  { label: "普通民用车牌", value: "京A12345", expected: true },
  { label: "新能源车牌", value: "京AD12345", expected: true },
  { label: "大型车辆", value: "京AF0236", expected: true },
  { label: "挂车", value: "京A1234挂", expected: true },
  { label: "特型车", value: "京A1234超", expected: true },
  { label: "教练车", value: "京A1234练", expected: true },
  { label: "学员车", value: "京A1234学", expected: true },
  { label: "试验车", value: "京A1234试", expected: true },
  { label: "警用车牌", value: "京A1234警", expected: true },
  { label: "总队武警", value: "WJA0010", expected: true },
  { label: "地方武警", value: "WJG12345", expected: true },
  { label: "军队车辆", value: "VT10001", expected: true },
  { label: "港澳车牌", value: "粤Z1234港", expected: true },
  { label: "使馆车牌", value: "166001使", expected: true },
  { label: "领馆车牌", value: "京A1234领", expected: true },
  { label: "民航内部车辆", value: "民航123AB", expected: true },
  { label: "小写字母", value: "京a12345", expected: false },
  { label: "无省份前缀", value: "A12345", expected: false },
  { label: "错误省份", value: "美A12345", expected: false },
  { label: "超长车牌", value: "京A1234567", expected: false },
  { label: "过短车牌", value: "京A1234", expected: false },
  { label: "包含特殊字符", value: "京A@1234", expected: false },
  { label: "空字符串", value: "", expected: false }
];
</script>

<template>
  <naive-theme>
    <div className="flex flex-col justify-center mt-2">
      <n-gradient-text
        v-for="(item, index) in plateNumStrictRes"
        :key="index"
        type="info"
      >
        <div>
          <span className="font-bold">{{ item.label }}</span>
          <span className="ml-2">
            regExp.plateNumStrict.test("{{ item.value }}")</span
          >
        </div>
        <n-gradient-text type="info">
          // 预期: {{ item.expected }}, 实际:
          {{ regExp.plateNumStrict.test(item.value) }}, 结果:
          {{
            regExp.plateNumStrict.test(item.value) === item.expected ? "✓" : "✗"
          }}
        </n-gradient-text>
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
