<script setup lang="ts">
import { ref } from "vue";
import { getScanCodeInfo } from "./h5";

// getScanCodeInfo 测试数据
const getScanCodeInfoRes = ref<Array<{ label: string; mockResponse?: string }>>(
  []
);

// 模拟扫码信息响应
const mockScanCodeInfo = JSON.stringify({
  code: "QR123456",
  type: "QR_CODE",
  content: "https://example.com",
  timestamp: Date.now()
});

getScanCodeInfoRes.value = [
  { label: "获取扫码信息(成功)" },
  { label: "模拟成功响应", mockResponse: mockScanCodeInfo },
  { label: "模拟错误响应", mockResponse: "invalid json" }
];

// 模拟getScanCodeInfo调用
const simulateGetScanCodeInfo = async (mockResponse?: string) => {
  if (!mockResponse) {
    try {
      return await getScanCodeInfo();
    } catch (error) {
      return `错误: ${error}`;
    }
  }

  // 模拟响应
  return new Promise((resolve, reject) => {
    window.receiveScanInfo = (scanCodeInfo: string) => {
      try {
        const parsedInfo = JSON.parse(scanCodeInfo);
        resolve(parsedInfo);
      } catch (error) {
        reject("解析扫码信息失败");
      }
      delete window.receiveScanInfo;
    };

    // 模拟回调
    setTimeout(() => {
      if (mockResponse === "invalid json") {
        if (window.receiveScanInfo) {
          window.receiveScanInfo("invalid json");
        }
      } else {
        if (window.receiveScanInfo) {
          window.receiveScanInfo(mockResponse);
        }
      }
    }, 100);
  }).catch(error => `错误: ${error}`);
};
</script>

<template>
  <naive-theme>
    <div
      v-for="(item, index) in getScanCodeInfoRes"
      :key="index"
      className="flex flex-col justify-center mt-2"
    >
      <div>
        <span className="font-bold">{{ item.label }}</span>
        <span className="ml-2"> getScanCodeInfo() </span>
      </div>
      <div>
        <n-button
          @click="
            async () => {
              const result = await simulateGetScanCodeInfo(item.mockResponse);
              console.log('扫码信息:', result);
            }
          "
        >
          测试获取
        </n-button>
      </div>
    </div>
  </naive-theme>
</template>
