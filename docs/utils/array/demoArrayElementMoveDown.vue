<script setup lang="ts">
import { ref } from "vue";
import { arrayElementMoveDown } from "@anyuan/utils";

const arrayElementMoveDownData = ref([
  { label: "中间元素下移", value: [1, 2, 3, 4, 5], index: 2 },
  { label: "最后一个元素下移(不循环)", value: [1, 2, 3, 4, 5], index: 4 },
  {
    label: "最后一个元素下移(循环)",
    value: [1, 2, 3, 4, 5],
    index: 4,
    loop: true
  },
  { label: "第一个元素下移", value: [1, 2, 3, 4, 5], index: 0 }
]);
</script>

<template>
  <naive-theme>
    <div
      v-for="(item, index) in arrayElementMoveDownData"
      :key="index"
      className="flex flex-col justify-center mt-2"
    >
      <div>
        <span className="font-bold">{{ item.label }}</span>
        <span className="ml-2">
          原数组: {{ JSON.stringify(item.value) }}<br />
          arrayElementMoveDown(数组, {{ item.index
          }}{{ item.loop ? ", true" : "" }})
        </span>
      </div>
      <n-gradient-text type="info">
        //
        {{
          JSON.stringify(
            arrayElementMoveDown([...item.value], item.index, item.loop)
          )
        }}
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
