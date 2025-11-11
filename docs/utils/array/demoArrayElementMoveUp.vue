<script setup lang="ts">
import { ref } from "vue";
import { arrayElementMoveUp } from "@anyuan/utils";

const arrayElementMoveUpData = ref([
  { label: "中间元素上移", value: [1, 2, 3, 4, 5], index: 2 },
  { label: "第一个元素上移(不循环)", value: [1, 2, 3, 4, 5], index: 0 },
  {
    label: "第一个元素上移(循环)",
    value: [1, 2, 3, 4, 5],
    index: 0,
    loop: true
  },
  { label: "末尾元素上移", value: [1, 2, 3, 4, 5], index: 4 }
]);
</script>

<template>
  <naive-theme>
    <div
      v-for="(item, index) in arrayElementMoveUpData"
      :key="index"
      className="flex flex-col justify-center mt-2"
    >
      <div>
        <span className="font-bold">{{ item.label }}</span>
        <span className="ml-2">
          原数组: {{ JSON.stringify(item.value) }}<br />
          arrayElementMoveUp(数组, {{ item.index
          }}{{ item.loop ? ", true" : "" }})
        </span>
      </div>
      <n-gradient-text type="info">
        //
        {{
          JSON.stringify(
            arrayElementMoveUp([...item.value], item.index, item.loop)
          )
        }}
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
