<script setup lang="ts">
import { ref } from "vue";
import { objectToFormData } from "@anyuan/utils";

// objectToFormData 测试数据
const formDataFormatRes = ref<
  Array<{ label: string; obj: any; options?: any }>
>([]);
formDataFormatRes.value = [
  { label: "简单对象", obj: { name: "John", age: 30 } },
  { label: "嵌套对象", obj: { user: { name: "John", profile: { age: 30 } } } },
  { label: "数组", obj: { tags: ["vue", "react", "angular"] } },
  { label: "文件对象", obj: { file: new File(["content"], "test.txt") } },
  { label: "空值处理", obj: { name: "John", age: null, active: undefined } },
  {
    label: "自定义选项",
    obj: { user: { name: "John" } },
    options: { parentKey: "data" }
  }
];
</script>

<template>
  <naive-theme>
    <div
      v-for="(item, index) in formDataFormatRes"
      :key="index"
      className="flex flex-col justify-center mt-2"
    >
      <div>
        <span className="font-bold">{{ item.label }}</span>
        <span className="ml-2">
          objectToFormData({{ JSON.stringify(item.obj)
          }}{{ item.options ? `, ${JSON.stringify(item.options)}` : "" }})
        </span>
      </div>
      <n-gradient-text>
        {{ objectToFormData(item.obj, item.options) }}
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
