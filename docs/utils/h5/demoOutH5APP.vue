<script setup lang="ts">
import { ref } from "vue";
import { outH5APP } from "./h5";

// outH5APP 测试数据
const outH5APPRes = ref<Array<{ label: string }>>([]);
outH5APPRes.value = [{ label: "退出H5应用" }];
</script>

<template>
  <naive-theme>
    <div
      v-for="(item, index) in outH5APPRes"
      :key="index"
      className="flex flex-col justify-center mt-2"
    >
      <div>
        <span className="font-bold">{{ item.label }}</span>
        <span className="ml-2"> outH5APP() </span>
      </div>
      <div>
        <n-button
          @click="
            () => {
              try {
                outH5APP();
                console.log('退出H5应用');
              } catch (error) {
                console.error('退出失败:', error);
              }
            }
          "
        >
          测试退出
        </n-button>
      </div>
    </div>
  </naive-theme>
</template>
