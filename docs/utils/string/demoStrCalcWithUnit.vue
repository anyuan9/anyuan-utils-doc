<script setup lang="ts">
import { ref } from "vue";
import { strCalcWithUnit } from "@anyuan/utils";

// strCalcWithUnit 测试数据
const strCalcWithUnitRes = ref<
  Array<{ label: string; str1: any; str2: any; operator: string }>
>([]);
strCalcWithUnitRes.value = [
  { label: "相同单位加法", str1: "10px", str2: "20px", operator: "+" },
  { label: "相同单位减法", str1: "30px", str2: "15px", operator: "-" },
  { label: "相同单位乘法", str1: "10px", str2: "2px", operator: "*" },
  { label: "相同单位除法", str1: "20px", str2: "2px", operator: "/" },
  { label: "取余运算", str1: "10px", str2: "3px", operator: "%" },
  { label: "无单位数字", str1: "10", str2: "20px", operator: "+" },
  { label: "不同单位(错误)", str1: "10em", str2: "20px", operator: "+" },
  { label: "无效运算符", str1: "10px", str2: "20px", operator: "#" }
];
function getStrCalcWithUnit(str1, str2, operator) {
  try {
    return strCalcWithUnit(str1, str2, operator);
  } catch (e) {
    return e.toString();
  }
}
</script>

<template>
  <naive-theme>
    <div
      v-for="(item, index) in strCalcWithUnitRes"
      :key="index"
      className="flex flex-col justify-center mt-2"
    >
      <div>
        <span className="font-bold">{{ item.label }}</span>
        <span className="ml-2">
          strCalcWithUnit("{{ item.str1 }}", "{{ item.str2 }}", "{{
            item.operator
          }}")
        </span>
      </div>
      <n-gradient-text type="info">
        //
        {{ getStrCalcWithUnit(item.str1, item.str2, item.operator) }}
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
