<script setup lang="ts">
import { ref } from "vue";
import { JSONStringify } from "@anyuan/utils";

// JSONStringify 测试数据
const JSONStringifyRes = ref<
  Array<{ label: string; obj: any; encode?: boolean }>
>([]);
JSONStringifyRes.value = [
  { label: "普通对象", obj: { a: 1, b: "text", c: true } },
  { label: "数组", obj: [1, "text", true, null] },
  { label: "特殊字符", obj: { message: 'Hello "World"' } },
  { label: "URL编码", obj: { query: "a=1&b=2" }, encode: true },
  // {
  //   label: "循环引用",
  //   obj: (() => {
  //     const obj = { a: 1 };
  //     obj.self = obj;
  //     return obj;
  //   })()
  // },
  { label: "日期对象", obj: { date: new Date() } }
];
</script>

<template>
  <naive-theme>
    <div
      v-for="(item, index) in JSONStringifyRes"
      :key="index"
      className="flex flex-col justify-center mt-2"
    >
      <div>
        <span className="font-bold">{{ item.label }}</span>
        <span className="ml-2">
          JSONStringify({{ JSON.stringify(item.obj)
          }}{{ item.encode ? ", true" : "" }})
        </span>
      </div>
      <n-gradient-text type="info">
        // {{ JSONStringify(item.obj, item.encode) }}
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
