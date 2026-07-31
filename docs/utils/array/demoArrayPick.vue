<script setup lang="ts">
import { ref } from "vue";
import { arrayPick } from "@anyuan/utils";

const arrayPickData = ref([
  { label: "提取id后的新数组", value: [{id: 1, name: ''}, {id: 2, name: 'b'}, {id: 1, name: undefined}], key:'id' },
  { label: "提取name后的新数组", value: [{id: 1, name: ''}, {id: 2, name: 'b'}, {id: 1, name: undefined}], key:'name' },
  { label: "提取name后的新数组", value: [{id: 1, name: ''}, {id: 2, name: 'b'}, {id: 1, name: undefined}], key:'name', options:{ unique: false, extractValues: false } },
]);
</script>

<template>
  <naive-theme>
    <div
      v-for="(item, index) in arrayPickData"
      :key="index"
      className="flex flex-col justify-center mt-2"
    >
      <div>
        <span className="font-bold">{{ item.label }}</span>
        <span className="ml-2">
          arrayPick({{
            item.value
          }}, {{
            item.key
          }}{{
            item.options ? `, ${JSON.stringify(item.options)}` : ''
          }})
        </span>
      </div>
      <n-gradient-text type="info">
        //
        {{ JSON.stringify(arrayPick(item.value, item.key, item.options)) }}
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
