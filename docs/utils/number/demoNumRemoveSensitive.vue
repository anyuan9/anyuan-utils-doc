<script setup lang="ts">
import { ref } from "vue";
import { numRemoveSensitive } from "@anyuan/utils";

// numRemoveSensitive 测试数据
const numRemoveSensitiveRes = ref<
  Array<{
    label: string;
    num: any;
    start?: number;
    end?: number;
    symbol?: string;
  }>
>([]);
numRemoveSensitiveRes.value = [
  { label: "默认参数", num: "12312345678" },
  { label: "自定义保留位数", num: "12312345678", start: 3, end: 4 },
  { label: "长数字", num: "123456123456781234", start: 6, end: 4 },
  { label: "数字类型", num: 12312345678, start: 3, end: 4 },
  { label: "自定义符号", num: "12312345678", start: 3, end: 4, symbol: "#" },
  { label: "全部隐藏", num: "12345678", start: 0, end: 0 },
  { label: "NaN", num: NaN },
  { label: "无穷大", num: Infinity }
];
</script>

<template>
  <naive-theme>
    <div
      v-for="(item, index) in numRemoveSensitiveRes"
      :key="index"
      className="flex flex-col justify-center mt-2"
    >
      <div>
        <span className="font-bold">{{ item.label }}</span>
        <span className="ml-2">
          numRemoveSensitive({{ item.num
          }}{{ item.start !== undefined ? `, ${item.start}` : ""
          }}{{ item.end !== undefined ? `, ${item.end}` : ""
          }}{{ item.symbol ? `, "${item.symbol}"` : "" }})
        </span>
      </div>
      <n-gradient-text type="info">
        // {{ numRemoveSensitive(item.num, item.start, item.end, item.symbol) }}
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
