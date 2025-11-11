<script setup lang="ts">
import { ref } from "vue";
import { urlQueryStringify } from "@anyuan/utils";

// urlQueryStringify 测试数据
const urlQueryStringifyRes = ref<
  Array<{ label: string; params: Record<string, any> }>
>([]);
urlQueryStringifyRes.value = [
  { label: "简单对象", params: { user: "anonymous", id: "123" } },
  { label: "数组参数", params: { user: ["admin", "anonymous"], id: "123" } },
  {
    label: "空值过滤",
    params: { user: "anonymous", id: null, age: undefined, active: true }
  },
  {
    label: "特殊字符",
    params: { name: "John Doe", email: "test@example.com" }
  },
  { label: "空对象", params: {} },
  {
    label: "复杂嵌套",
    params: { ids: [1, 2, 3], filters: { status: "active" } }
  }
];
</script>

<template>
  <naive-theme>
    <div
      v-for="(item, index) in urlQueryStringifyRes"
      :key="index"
      className="flex flex-col justify-center mt-2"
    >
      <div>
        <span className="font-bold">{{ item.label }}</span>
        <span className="ml-2">
          urlQueryStringify({{ JSON.stringify(item.params) }})
        </span>
      </div>
      <n-gradient-text type="info">
        // "{{ urlQueryStringify(item.params) }}"
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
