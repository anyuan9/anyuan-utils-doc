<script setup lang="ts">
import { ref } from "vue";
import { getPwdRank } from "@anyuan/utils";

// getPwdRank 测试数据
const getPwdRankRes = ref<
  Array<{ label: string; password: string; username?: string }>
>([]);
getPwdRankRes.value = [
  { label: "风险密码-长度不足", password: "123", username: "test" },
  { label: "风险密码-只包含数字", password: "12345678", username: "test" },
  { label: "风险密码-只包含小写字母", password: "abcdefgh", username: "test" },
  {
    label: "风险密码-与用户名相同",
    password: "testuser",
    username: "testuser"
  },
  { label: "风险密码-用户名倒写", password: "resutsem", username: "testuser" },
  { label: "弱密码-数字+小写字母", password: "12345abc", username: "test" },
  { label: "弱密码-数字+大写字母", password: "12345ABC", username: "test" },
  { label: "中密码-小写+大写字母", password: "abcDEFgh", username: "test" },
  { label: "中密码-数字+特殊字符", password: "12345!@#$", username: "test" },
  { label: "强密码-数字+小写+大写", password: "123abcDEF", username: "test" },
  { label: "强密码-数字+小写+特殊", password: "123abc!@#", username: "test" },
  { label: "强密码-四类字符全有", password: "123abcDEF!@#", username: "test" }
];
</script>

<template>
  <naive-theme>
    <div
      v-for="(item, index) in getPwdRankRes"
      :key="index"
      className="flex flex-col justify-center mt-2"
    >
      <div>
        <span className="font-bold">{{ item.label }}</span>
        <span className="ml-2">
          getPwdRank("{{ item.password }}"{{
            item.username ? `, "${item.username}"` : ""
          }})
        </span>
      </div>
      <n-gradient-text type="info">
        // {{ getPwdRank(item.password, item.username) }}
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
