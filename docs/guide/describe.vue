<script setup lang="ts">
import { useRouter } from "vitepress";
import { hooks } from "../.vitepress/utils/sortHooks";
import { useData } from "../components/wordCloud/data";

const { go } = useRouter();
const { hooksLen, utilsLen } = useData();
</script>

<template>
  <naive-theme>
    <n-space vertical>
      <div className="flex items-center">
        <n-tag type="info">
          <n-number-animation :from="0" :to="hooksLen" /> 个
          <n-tooltip trigger="hover">
            <template #trigger>
              <n-button
                text
                type="primary"
                @click="go(`/hooks/${hooks[0]}/${hooks[0]}`)"
              >
                Hooks
              </n-button>
            </template>
            点击查看hooks方法
          </n-tooltip>
          、
          <n-number-animation :from="0" :to="utilsLen" /> 个
          <n-tooltip trigger="hover">
            <template #trigger>
              <n-button text type="primary" @click="go('/utils/amount/amount')">
                Utils
              </n-button>
            </template>
            点击查看utils工具
          </n-tooltip>
        </n-tag>
      </div>
    </n-space>
  </naive-theme>
</template>
