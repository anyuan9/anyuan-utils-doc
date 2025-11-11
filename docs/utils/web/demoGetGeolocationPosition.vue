<script setup lang="ts">
import { ref } from "vue";
import { getGeolocationPosition } from "@anyuan/utils";

// getGeolocationPosition 测试数据
const getGeolocationPositionRes = ref<
  Array<{
    label: string;
    options?: any;
    result?: any;
    error?: string;
    loading?: boolean;
  }>
>([]);
getGeolocationPositionRes.value = [
  { label: "默认选项" },
  { label: "高精度模式", options: { enableHighAccuracy: true } },
  { label: "短超时时间", options: { timeout: 5000 } },
  { label: "使用缓存位置", options: { maximumAge: 300000 } }
];

// 地理位置测试状态
const geolocationLoading = ref<Record<string, boolean>>({});
const geolocationError = ref<Record<string, string>>({});

// 测试地理位置函数
const testGeolocation = async (item: any) => {
  item.loading = true;
  item.error = undefined;
  item.result = undefined;

  try {
    const result = await getGeolocationPosition(item.options);
    item.result = result;
  } catch (error) {
    item.error = error as string;
  } finally {
    item.loading = false;
  }
};

// 测试所有地理位置
const testAllGeolocation = async () => {
  for (const item of getGeolocationPositionRes.value) {
    await testGeolocation(item);
    // 添加延迟避免请求过于频繁
    await new Promise(resolve => setTimeout(resolve, 1000));
  }
};
</script>

<template>
  <naive-theme>
    <div
      v-for="(item, index) in getGeolocationPositionRes"
      :key="index"
      className="flex flex-col justify-center mt-2"
    >
      <div>
        <span className="font-bold">{{ item.label }}</span>
        <span className="ml-2">
          getGeolocationPosition({{ JSON.stringify(item.options || {}) }})
        </span>
        <n-button
          @click="testGeolocation(item)"
          :disabled="item.loading"
          style="margin-top: 5px"
        >
          {{ item.loading ? "测试中..." : "测试" }}
        </n-button>
      </div>
      <n-gradient-text type="info">
        //
        <span v-if="item.loading">加载中...</span>
        <span v-else-if="item.error" style="color: red"
          >错误: {{ item.error }}
        </span>
        <span v-else-if="item.result">{{ JSON.stringify(item.result) }}</span>
        <span v-else>未测试</span>
      </n-gradient-text>
    </div>
    <n-button @click="testAllGeolocation" style="margin-top: 10px">
      测试所有地理位置选项
    </n-button>
  </naive-theme>
</template>
