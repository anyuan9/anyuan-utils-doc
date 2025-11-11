<script setup lang="ts">
import { ref } from "vue";
import { regExp } from "@anyuan/utils";

// deviceUserName 测试数据
const deviceUserNameRes = ref<
  Array<{ label: string; value: string; expected: boolean }>
>([]);
deviceUserNameRes.value = [
  { label: "标准用户名", value: "admin", expected: true },
  { label: "中文用户名", value: "管理员", expected: true },
  { label: "数字用户名", value: "user123", expected: true },
  { label: "带小数点用户名", value: "user.name", expected: true },
  { label: "带下划线用户名", value: "user_name", expected: true },
  { label: "带连接符用户名", value: "user-name", expected: true },
  { label: "1位字符", value: "a", expected: true },
  {
    label: "32位字符",
    value: "abcdefghijklmnopqrstuvwxyz123456",
    expected: true
  },
  { label: "空字符串", value: "", expected: true },
  {
    label: "33位字符",
    value: "abcdefghijklmnopqrstuvwxyz1234567",
    expected: true
  },
  { label: "包含特殊字符@", value: "user@name", expected: false },
  { label: "包含特殊字符#", value: "user#name", expected: false },
  { label: "包含空格", value: "user name", expected: false }
];
</script>

<template>
  <naive-theme>
    <div className="flex flex-col justify-center mt-2">
      <n-gradient-text
        v-for="(item, index) in deviceUserNameRes"
        :key="index"
        type="info"
      >
        <div>
          <span className="font-bold">{{ item.label }}</span>
          <span className="ml-2">
            regExp.deviceUserName.test("{{ item.value }}")
          </span>
        </div>
        <n-gradient-text type="info">
          // 预期: {{ item.expected }}, 实际:
          {{ regExp.deviceUserName.test(item.value) }}, 结果:
          {{
            regExp.deviceUserName.test(item.value) === item.expected ? "✓" : "✗"
          }}
        </n-gradient-text>
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
