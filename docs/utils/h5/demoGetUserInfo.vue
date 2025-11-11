<script setup lang="ts">
import { ref } from "vue";
import { getUserInfo } from "./h5";

// getUserInfo 测试数据
const getUserInfoRes = ref<Array<{ label: string; mockResponse?: string }>>([]);

// 模拟用户信息响应
const mockUserInfo = JSON.stringify({
  userId: "12345",
  userName: "测试用户",
  avatar: "https://example.com/avatar.jpg",
  email: "test@example.com"
});

getUserInfoRes.value = [
  { label: "获取用户信息(成功)" },
  { label: "模拟成功响应", mockResponse: mockUserInfo },
  { label: "模拟错误响应", mockResponse: "invalid json" }
];

// 模拟getUserInfo调用
const simulateGetUserInfo = async (mockResponse?: string) => {
  if (!mockResponse) {
    try {
      return await getUserInfo();
    } catch (error) {
      return `错误: ${error}`;
    }
  }

  // 模拟响应
  return new Promise((resolve, reject) => {
    window.receiveUserInfo = (userInfo: string) => {
      try {
        const parsedInfo = JSON.parse(userInfo);
        resolve(parsedInfo);
      } catch (error) {
        reject("解析用户信息失败");
      }
      delete window.receiveUserInfo;
    };

    // 模拟回调
    setTimeout(() => {
      if (mockResponse === "invalid json") {
        if (window.receiveUserInfo) {
          window.receiveUserInfo("invalid json");
        }
      } else {
        if (window.receiveUserInfo) {
          window.receiveUserInfo(mockResponse);
        }
      }
    }, 100);
  }).catch(error => `错误: ${error}`);
};
</script>

<template>
  <naive-theme>
    <div
      v-for="(item, index) in getUserInfoRes"
      :key="index"
      className="flex flex-col justify-center mt-2"
    >
      <div>
        <span className="font-bold">{{ item.label }}</span>
        <span className="ml-2"> getUserInfo() </span>
      </div>
      <div>
        <n-button
          @click="
            async () => {
              const result = await simulateGetUserInfo(item.mockResponse);
              console.log('用户信息:', result);
            }
          "
        >
          测试获取
        </n-button>
      </div>
    </div>
  </naive-theme>
</template>
