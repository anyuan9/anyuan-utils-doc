<script setup lang="ts">
import { ref } from "vue";
import { regExp } from "@anyuan/utils";

// noSpecialChar 测试数据
const noSpecialCharRes = ref<
  Array<{ label: string; value: string; expected: boolean }>
>([]);
noSpecialCharRes.value = [
  { label: "纯字母", value: "abc", expected: true },
  { label: "纯数字", value: "123", expected: true },
  { label: "字母数字混合", value: "abc123", expected: true },
  { label: "包含反引号", value: "abc`123", expected: false },
  { label: "包含波浪号", value: "abc~123", expected: false },
  { label: "包含感叹号", value: "abc!123", expected: false },
  { label: "包含@符号", value: "abc@123", expected: false },
  { label: "包含#号", value: "abc#123", expected: false },
  { label: "包含美元符", value: "abc$123", expected: false },
  { label: "包含百分号", value: "abc%123", expected: false },
  { label: "包含^符号", value: "abc^123", expected: false },
  { label: "包含&符号", value: "abc&123", expected: false },
  { label: "包含星号", value: "abc*123", expected: false },
  { label: "包含括号", value: "abc(123)", expected: false },
  { label: "包含尖括号", value: "abc<123", expected: false },
  { label: "包含下划线", value: "abc_123", expected: false },
  { label: "包含加号", value: "abc+123", expected: false },
  { label: "包含减号", value: "abc-123", expected: false },
  { label: "包含等号", value: "abc=123", expected: false },
  { label: "包含竖线", value: "abc|123", expected: false },
  { label: "包含方括号", value: "abc[123]", expected: false },
  { label: "包含冒号", value: "abc:123", expected: false },
  { label: "包含分号", value: "abc;123", expected: false },
  { label: "包含逗号", value: "abc,123", expected: false },
  { label: "包含点号", value: "abc.123", expected: false },
  { label: "包含斜杠", value: "abc/123", expected: false },
  { label: "包含反斜杠", value: "abc\\123", expected: false },
  { label: "包含引号", value: 'abc"123', expected: false },
  { label: "包含单引号", value: "abc'123", expected: false },
  { label: "包含问号", value: "abc?123", expected: false },
  { label: "空字符串", value: "", expected: true }
];
</script>

<template>
  <naive-theme>
    <div className="flex flex-col justify-center mt-2">
      <n-gradient-text
        v-for="(item, index) in noSpecialCharRes"
        :key="index"
        type="info"
      >
        <div>
          <span className="font-bold">{{ item.label }}</span>
          <span className="ml-2">
            regExp.noSpecialChar.test("{{ item.value }}")
          </span>
        </div>
        <n-gradient-text type="info">
          // 预期: {{ item.expected }}, 实际:
          {{ regExp.noSpecialChar.test(item.value) }}, 结果:
          {{
            regExp.noSpecialChar.test(item.value) === item.expected ? "✓" : "✗"
          }}
        </n-gradient-text>
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
